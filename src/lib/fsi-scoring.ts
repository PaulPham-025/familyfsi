import { fsiQuestions, type RespondentInfo, type ZoneKey, zoneContent } from "./fsi-data";

export type AnswerMap = Record<string, string>;

export type QuestionScore = {
  questionId: string;
  dimension: string;
  advisorLabel: string;
  answer: string;
  score: number;
};

export type InternalFsiReport = {
  respondentInfo: RespondentInfo;
  leadInfo?: {
    fullName?: string;
    phone?: string;
    preferredContactTime?: string;
    note?: string;
    consent?: boolean;
    preferredAdvisorId?: string;
    assignedAdvisorId?: string;
    leadSource?: string;
    routingStatus?: "new" | "assigned" | "contacted" | "closed";
    submittedAt?: string;
  };
  rawAnswers: AnswerMap;
  perQuestionScore: QuestionScore[];
  totalScore: number;
  maxScore: 50;
  zone: {
    key: ZoneKey;
    label: string;
    title: string;
    range: string;
    summary: string;
  };
  strongestDimensions: QuestionScore[];
  weakestDimensions: QuestionScore[];
  strengths: string[];
  areasToStrengthen: string[];
  suggestedPriorities: string[];
  generatedSummary: string;
  generatedAt: string;
};

export function getZone(totalScore: number): ZoneKey {
  if (totalScore >= 43) return "green";
  if (totalScore >= 35) return "yellow";
  if (totalScore >= 25) return "orange";
  return "red";
}

export function scoreAnswers(rawAnswers: AnswerMap): QuestionScore[] {
  return fsiQuestions.map((question) => {
    const selectedId = rawAnswers[question.id];
    const option = question.options.find((item) => item.id === selectedId);

    return {
      questionId: question.id,
      dimension: question.dimension,
      advisorLabel: question.advisorLabel,
      answer: option?.label ?? "",
      score: option?.score ?? 0
    };
  });
}

function buildStrengths(strongest: QuestionScore[]): string[] {
  if (strongest.length === 0) {
    return ["Gia đình đã bắt đầu nhìn lại bức tranh tài chính một cách có hệ thống."];
  }

  return strongest.slice(0, 3).map((item) => `${item.dimension}: đang là điểm tương đối tốt trong hồ sơ hiện tại.`);
}

function buildWeaknesses(weakest: QuestionScore[]): string[] {
  if (weakest.length === 0) {
    return ["Nên tiếp tục rà soát định kỳ để tránh các khoảng trống nhỏ tích tụ theo thời gian."];
  }

  return weakest.slice(0, 3).map((item) => `${item.dimension}: nên được xem lại để giảm áp lực khi có thay đổi lớn.`);
}

function buildPriorities(zone: ZoneKey, weakest: QuestionScore[]): string[] {
  const core = weakest.slice(0, 2).map((item) => `Làm rõ kế hoạch cho ${item.dimension.toLowerCase()}.`);

  const zonePriority = {
    green: "Duy trì thói quen tốt và tối ưu các kế hoạch dài hạn cho gia đình.",
    yellow: "Củng cố các phần còn thiếu trước khi mở rộng mục tiêu tài chính mới.",
    orange: "Ưu tiên quỹ dự phòng, bảo vệ thu nhập và kiểm soát các khoản chi cố định.",
    red: "Bắt đầu bằng một kế hoạch nhỏ, rõ ràng cho dòng tiền và dự phòng cơ bản."
  } satisfies Record<ZoneKey, string>;

  return [...core, zonePriority[zone]].slice(0, 3);
}

export function createInternalReport(
  respondentInfo: RespondentInfo,
  rawAnswers: AnswerMap
): InternalFsiReport {
  const perQuestionScore = scoreAnswers(rawAnswers);
  const totalScore = perQuestionScore.reduce((sum, item) => sum + item.score, 0);
  const zoneKey = getZone(totalScore);
  const zone = { key: zoneKey, ...zoneContent[zoneKey] };
  const completedScores = perQuestionScore.filter((item) => item.score > 0);
  const strongestDimensions = [...completedScores].sort((a, b) => b.score - a.score).slice(0, 3);
  const weakestDimensions = [...completedScores].sort((a, b) => a.score - b.score).slice(0, 3);
  const strengths = buildStrengths(strongestDimensions);
  const areasToStrengthen = buildWeaknesses(weakestDimensions);
  const suggestedPriorities = buildPriorities(zoneKey, weakestDimensions);
  const generatedSummary = [
    `FSI ${totalScore}/50 - ${zone.label}: ${zone.title}.`,
    `Điểm mạnh nổi bật: ${strongestDimensions.map((item) => item.dimension).join(", ") || "chưa đủ dữ liệu"}.`,
    `Khoảng cần trao đổi thêm: ${weakestDimensions.map((item) => item.dimension).join(", ") || "chưa đủ dữ liệu"}.`
  ].join(" ");

  return {
    respondentInfo,
    rawAnswers,
    perQuestionScore,
    totalScore,
    maxScore: 50,
    zone,
    strongestDimensions,
    weakestDimensions,
    strengths,
    areasToStrengthen,
    suggestedPriorities,
    generatedSummary,
    generatedAt: new Date().toISOString()
  };
}

export function isSurveyComplete(rawAnswers: AnswerMap): boolean {
  return fsiQuestions.every((question) => Boolean(rawAnswers[question.id]));
}
