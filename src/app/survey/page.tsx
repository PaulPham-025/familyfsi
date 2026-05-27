"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Panel, SectionLabel } from "@/components/Ui";
import { SitePage } from "@/components/SiteHeader";
import { fsiQuestions, infoFields, type RespondentInfo } from "@/lib/fsi-data";
import { createInternalReport, isSurveyComplete, type AnswerMap } from "@/lib/fsi-scoring";

const progressKey = "fsi-progress";
const resultKey = "fsi-result";

type SavedProgress = {
  respondentInfo: RespondentInfo;
  answers: AnswerMap;
  step: number;
};

export default function SurveyPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [respondentInfo, setRespondentInfo] = useState<RespondentInfo>({});
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [showValidation, setShowValidation] = useState(false);

  const totalSteps = fsiQuestions.length + 1;
  const isInfoStep = step === 0;
  const currentQuestion = isInfoStep ? undefined : fsiQuestions[step - 1];
  const progress = Math.round(((step + 1) / totalSteps) * 100);
  const canContinue = isInfoStep || Boolean(currentQuestion && answers[currentQuestion.id]);

  useEffect(() => {
    const saved = window.localStorage.getItem(progressKey);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as SavedProgress;
      setRespondentInfo(parsed.respondentInfo ?? {});
      setAnswers(parsed.answers ?? {});
      setStep(Math.min(parsed.step ?? 0, fsiQuestions.length));
    } catch {
      window.localStorage.removeItem(progressKey);
    }
  }, []);

  useEffect(() => {
    const payload: SavedProgress = { respondentInfo, answers, step };
    window.localStorage.setItem(progressKey, JSON.stringify(payload));
  }, [respondentInfo, answers, step]);

  const selectedScore = useMemo(() => {
    if (!currentQuestion) return undefined;
    const option = currentQuestion.options.find((item) => item.id === answers[currentQuestion.id]);
    return option?.score;
  }, [answers, currentQuestion]);

  function updateInfo(fieldId: keyof RespondentInfo, value: string) {
    setRespondentInfo((current) => ({ ...current, [fieldId]: value }));
  }

  function selectAnswer(questionId: string, answerId: string) {
    setAnswers((current) => ({ ...current, [questionId]: answerId }));
    setShowValidation(false);
  }

  function goNext() {
    if (!canContinue) {
      setShowValidation(true);
      return;
    }

    if (step < fsiQuestions.length) {
      setStep((current) => current + 1);
      setShowValidation(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (!isSurveyComplete(answers)) {
      setShowValidation(true);
      return;
    }

    const report = createInternalReport(respondentInfo, answers);
    window.localStorage.setItem(resultKey, JSON.stringify(report));
    window.localStorage.removeItem(progressKey);
    router.push("/result");
  }

  function goBack() {
    setStep((current) => Math.max(0, current - 1));
    setShowValidation(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <SitePage>
      <div className="mx-auto w-full max-w-3xl pb-12">
        <div className="mb-5">
          <div className="mb-2 flex items-center justify-between text-sm text-leaf-700">
            <span>{isInfoStep ? "Thông tin chung" : `Câu ${step}/10`}</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-leaf-100">
            <div className="h-full rounded-full bg-leaf-600 transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <Panel className="transition duration-300">
          {isInfoStep ? (
            <InfoStep respondentInfo={respondentInfo} onChange={updateInfo} />
          ) : currentQuestion ? (
            <QuestionStep
              questionNumber={step}
              question={currentQuestion}
              selectedAnswer={answers[currentQuestion.id]}
              selectedScore={selectedScore}
              onSelect={selectAnswer}
            />
          ) : null}

          {showValidation ? (
            <p className="mt-5 rounded-[8px] bg-warm-100 px-4 py-3 text-sm font-semibold text-warm-800">
              Anh/chị vui lòng chọn một câu trả lời trước khi tiếp tục.
            </p>
          ) : null}

          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
            <Button type="button" variant="secondary" onClick={goBack} disabled={step === 0}>
              Quay lại
            </Button>
            <Button type="button" onClick={goNext}>
              {step === fsiQuestions.length ? "Xem kết quả" : "Tiếp tục"}
            </Button>
          </div>
        </Panel>
      </div>
    </SitePage>
  );
}

function InfoStep({
  respondentInfo,
  onChange
}: {
  respondentInfo: RespondentInfo;
  onChange: (fieldId: keyof RespondentInfo, value: string) => void;
}) {
  return (
    <div>
      <SectionLabel>Bước 1</SectionLabel>
      <h1 className="text-3xl font-bold text-leaf-900">Thông tin chung</h1>
      <p className="mt-3 leading-7 text-leaf-700">
        Một vài thông tin ngắn giúp kết quả dễ đọc hơn. Anh/chị có thể bỏ qua nếu chưa muốn chia sẻ.
      </p>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {infoFields.map((field) => (
          <label key={field.id} className="block">
            <span className="mb-2 block text-sm font-semibold text-leaf-800">{field.label}</span>
            <select
              value={respondentInfo[field.id] ?? ""}
              onChange={(event) => onChange(field.id, event.target.value)}
              className="h-12 w-full rounded-[8px] border border-leaf-200 bg-white px-3 text-leaf-900 outline-none transition focus:border-leaf-500 focus:ring-4 focus:ring-leaf-100"
            >
              <option value="">{field.placeholder}</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>
    </div>
  );
}

function QuestionStep({
  questionNumber,
  question,
  selectedAnswer,
  selectedScore,
  onSelect
}: {
  questionNumber: number;
  question: (typeof fsiQuestions)[number];
  selectedAnswer?: string;
  selectedScore?: number;
  onSelect: (questionId: string, answerId: string) => void;
}) {
  return (
    <div>
      <SectionLabel>{question.dimension}</SectionLabel>
      <h1 className="text-2xl font-bold leading-tight text-leaf-900 sm:text-3xl">
        {questionNumber}. {question.question}
      </h1>
      <div className="mt-6 grid gap-3">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(question.id, option.id)}
              className={`rounded-[8px] border p-4 text-left leading-7 transition ${
                isSelected
                  ? "border-leaf-600 bg-leaf-50 shadow-soft"
                  : "border-leaf-100 bg-white hover:border-leaf-300 hover:bg-leaf-50/60"
              }`}
            >
              <span className="flex gap-3">
                <span
                  className={`mt-1 h-5 w-5 shrink-0 rounded-full border ${
                    isSelected ? "border-leaf-700 bg-leaf-700 ring-4 ring-leaf-100" : "border-leaf-300"
                  }`}
                  aria-hidden="true"
                />
                <span className="font-medium text-leaf-900">{option.label}</span>
              </span>
            </button>
          );
        })}
      </div>
      {selectedScore ? (
        <p className="mt-5 text-sm text-leaf-600">Đã ghi nhận lựa chọn cho phần này.</p>
      ) : null}
    </div>
  );
}
