"use client";

import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { Button, LinkButton, Panel, SectionLabel } from "@/components/Ui";
import { SitePage } from "@/components/SiteHeader";
import type { InternalFsiReport } from "@/lib/fsi-scoring";
import { teamMembers } from "@/lib/site-content";

const resultKey = "fsi-result";

export default function ResultPage() {
  const [report, setReport] = useState<InternalFsiReport | null>(null);
  const [copied, setCopied] = useState(false);
  const [leadSaved, setLeadSaved] = useState(false);
  const [leadSubmitStatus, setLeadSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [leadSubmitMessage, setLeadSubmitMessage] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem(resultKey);
    if (!saved) return;

    try {
      setReport(JSON.parse(saved) as InternalFsiReport);
    } catch {
      window.localStorage.removeItem(resultKey);
    }
  }, []);

  const resultJson = useMemo(() => (report ? JSON.stringify(report, null, 2) : ""), [report]);

  async function copySummary() {
    if (!report) return;
    try {
      await navigator.clipboard.writeText(report.generatedSummary);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = report.generatedSummary;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function exportJson() {
    if (!report) return;
    const blob = new Blob([resultJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `fsi-report-${report.generatedAt.slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  async function saveLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!report) return;

    const formData = new FormData(event.currentTarget);
    const nextReport: InternalFsiReport = {
      ...report,
      leadInfo: {
        fullName: String(formData.get("fullName") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        preferredContactTime: String(formData.get("preferredContactTime") ?? ""),
        note: String(formData.get("note") ?? ""),
        consent: formData.get("consent") === "on",
        preferredAdvisorId: String(formData.get("preferredAdvisorId") ?? ""),
        assignedAdvisorId: String(formData.get("assignedAdvisorId") ?? ""),
        leadSource: "fsi-result",
        routingStatus: String(formData.get("assignedAdvisorId") ?? "") ? "assigned" : "new",
        submittedAt: new Date().toISOString()
      }
    };

    setReport(nextReport);
    window.localStorage.setItem(resultKey, JSON.stringify(nextReport));
    setLeadSaved(true);
    setLeadSubmitStatus("submitting");
    setLeadSubmitMessage("Đang gửi thông tin vào hệ thống lead...");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nextReport)
      });

      if (!response.ok) {
        throw new Error("Lead submit failed");
      }

      setLeadSubmitStatus("success");
      setLeadSubmitMessage("Đã gửi thông tin vào Google Sheets.");
    } catch {
      setLeadSubmitStatus("error");
      setLeadSubmitMessage("Đã lưu trên trình duyệt, nhưng chưa gửi được vào Google Sheets. Anh/chị có thể thử lại sau.");
    }

    window.setTimeout(() => setLeadSaved(false), 2200);
  }

  if (!report) {
    return (
      <SitePage>
        <div className="mx-auto max-w-2xl pb-12">
          <Panel>
            <SectionLabel>Chưa có kết quả</SectionLabel>
            <h1 className="text-3xl font-bold text-leaf-900">Anh/chị cần hoàn thành bài kiểm tra trước.</h1>
            <p className="mt-3 leading-7 text-leaf-700">
              Kết quả sẽ được tạo ngay sau khi trả lời đủ 10 câu hỏi.
            </p>
            <LinkButton href="/survey" className="mt-7">
              Bắt đầu kiểm tra
            </LinkButton>
          </Panel>
        </div>
      </SitePage>
    );
  }

  return (
    <SitePage>
      <div className="mx-auto grid w-full max-w-5xl gap-6 px-4 pb-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)] lg:px-8">
        <Panel className="min-w-0 print-panel">
          <SectionLabel>Kết quả của anh/chị</SectionLabel>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-leaf-900">{report.zone.label}</h1>
              <p className="mt-2 max-w-2xl text-xl font-semibold leading-8 text-leaf-800">{report.zone.title}</p>
            </div>
            <div className="rounded-[8px] bg-leaf-50 px-5 py-4 text-center">
              <p className="text-sm font-semibold text-leaf-700">Tổng điểm</p>
              <p className="text-4xl font-bold text-leaf-800">
                {report.totalScore}
                <span className="text-lg text-leaf-600">/50</span>
              </p>
            </div>
          </div>
          <p className="mt-6 leading-8 text-leaf-700">{report.zone.summary}</p>

          <ResultList title="3 điểm mạnh hiện tại" items={report.strengths} />
          <ResultList title="3 điểm nên củng cố" items={report.areasToStrengthen} />
          <ResultList title="3 ưu tiên gợi ý" items={report.suggestedPriorities} />

          <div className="mt-8 rounded-[8px] bg-warm-50 p-5">
            <h2 className="text-xl font-bold text-leaf-900">Gợi ý trao đổi tiếp theo</h2>
            <p className="mt-2 leading-7 text-leaf-700">
              Tư vấn viên có thể dùng kết quả này để mở cuộc trò chuyện nhẹ nhàng về dòng tiền,
              dự phòng, bảo vệ thu nhập và những mục tiêu gia đình muốn ưu tiên trong vài năm tới.
            </p>
          </div>

          <LeadCaptureForm
            report={report}
            leadSaved={leadSaved}
            leadSubmitStatus={leadSubmitStatus}
            leadSubmitMessage={leadSubmitMessage}
            onSubmit={saveLead}
          />

          <div className="no-print mt-7 flex flex-col gap-3 sm:flex-row">
            <Button type="button" onClick={() => window.print()}>
              In kết quả
            </Button>
            <Button type="button" variant="secondary" onClick={copySummary}>
              {copied ? "Đã sao chép" : "Sao chép tóm tắt"}
            </Button>
            <Button type="button" variant="secondary" onClick={exportJson}>
              Xuất JSON
            </Button>
          </div>
        </Panel>

        <aside className="min-w-0 space-y-6">
          <Panel className="min-w-0 print-panel">
            <SectionLabel>Nội bộ tư vấn</SectionLabel>
            <h2 className="text-2xl font-bold text-leaf-900">Advisor review</h2>
            <p className="mt-3 break-words leading-7 text-leaf-700 [overflow-wrap:anywhere]">{report.generatedSummary}</p>
            <div className="mt-5 grid gap-3">
              <ReviewBlock title="Gợi ý mở đầu" body="Cảm ơn anh/chị đã hoàn thành bài kiểm tra. Mình có thể cùng nhìn nhanh 2-3 điểm đang ảnh hưởng nhiều nhất đến độ an toàn tài chính của gia đình." />
              <ReviewBlock title="Câu hỏi nên đào sâu" body={`Ưu tiên hỏi thêm về ${report.weakestDimensions.map((item) => item.dimension.toLowerCase()).join(", ")} để hiểu nguyên nhân, mức độ cấp thiết và khả năng hành động trong 30-90 ngày tới.`} />
              <ReviewBlock title="Cách kết thúc mềm" body="Chốt lại bằng một bước nhỏ, cụ thể và phù hợp với ngân sách hiện tại thay vì đưa quá nhiều giải pháp cùng lúc." />
            </div>
          </Panel>

          <Panel className="min-w-0 print-panel">
            <h2 className="text-xl font-bold text-leaf-900">Điểm theo từng nhóm</h2>
            <div className="mt-4 space-y-3">
              {report.perQuestionScore.map((item) => (
                <div key={item.questionId} className="min-w-0 rounded-[8px] border border-leaf-100 bg-white p-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="min-w-0 break-words text-sm font-semibold text-leaf-900">{item.dimension}</p>
                    <span className="rounded-full bg-leaf-50 px-3 py-1 text-sm font-bold text-leaf-700">
                      {item.score}/5
                    </span>
                  </div>
                  <p className="mt-2 break-words text-sm leading-6 text-leaf-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="min-w-0 print-panel">
            <h2 className="text-xl font-bold text-leaf-900">Dữ liệu xuất nội bộ</h2>
            <p className="mt-2 text-sm leading-6 text-leaf-700">
              Dùng nút Xuất JSON để lưu cấu trúc này cho Google Sheets, CRM, email hoặc PDF sau này.
            </p>
            <pre className="mt-4 max-h-80 max-w-full overflow-auto whitespace-pre-wrap break-words rounded-[8px] bg-leaf-900 p-4 text-xs leading-5 text-leaf-50 [overflow-wrap:anywhere]">
              {resultJson}
            </pre>
          </Panel>

          <div className="no-print min-w-0 rounded-[8px] border border-leaf-100 bg-white/70 p-5">
            <Link href="/survey" className="font-semibold text-leaf-800 underline decoration-leaf-300 underline-offset-4">
              Làm lại bài kiểm tra
            </Link>
          </div>
        </aside>
      </div>
    </SitePage>
  );
}

function LeadCaptureForm({
  report,
  leadSaved,
  leadSubmitStatus,
  leadSubmitMessage,
  onSubmit
}: {
  report: InternalFsiReport;
  leadSaved: boolean;
  leadSubmitStatus: "idle" | "submitting" | "success" | "error";
  leadSubmitMessage: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void | Promise<void>;
}) {
  return (
    <form onSubmit={onSubmit} className="no-print mt-8 rounded-[8px] border border-leaf-100 bg-white p-5">
      <h2 className="text-xl font-bold text-leaf-900">Thông tin liên hệ tư vấn</h2>
      <p className="mt-2 text-sm leading-6 text-leaf-700">
        Phần này giúp đội ngũ tư vấn lưu lại nhu cầu trao đổi tiếp theo và phân công người phụ trách.
        Có thể bỏ trống nếu chỉ muốn xem kết quả.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-leaf-800">Họ tên</span>
          <input
            name="fullName"
            defaultValue={report.leadInfo?.fullName ?? ""}
            className="h-12 w-full rounded-[8px] border border-leaf-200 px-3 outline-none transition focus:border-leaf-500 focus:ring-4 focus:ring-leaf-100"
            placeholder="Nhập họ tên"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-leaf-800">Số điện thoại</span>
          <input
            name="phone"
            defaultValue={report.leadInfo?.phone ?? ""}
            className="h-12 w-full rounded-[8px] border border-leaf-200 px-3 outline-none transition focus:border-leaf-500 focus:ring-4 focus:ring-leaf-100"
            placeholder="Nhập số điện thoại"
            inputMode="tel"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-leaf-800">Thời gian tiện liên hệ</span>
          <select
            name="preferredContactTime"
            defaultValue={report.leadInfo?.preferredContactTime ?? ""}
            className="h-12 w-full rounded-[8px] border border-leaf-200 bg-white px-3 outline-none transition focus:border-leaf-500 focus:ring-4 focus:ring-leaf-100"
          >
            <option value="">Chọn thời gian phù hợp</option>
            <option>Buổi sáng</option>
            <option>Buổi chiều</option>
            <option>Buổi tối</option>
            <option>Cuối tuần</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-leaf-800">Ghi chú cho tư vấn viên</span>
          <input
            name="note"
            defaultValue={report.leadInfo?.note ?? ""}
            className="h-12 w-full rounded-[8px] border border-leaf-200 px-3 outline-none transition focus:border-leaf-500 focus:ring-4 focus:ring-leaf-100"
            placeholder="Ví dụ: muốn trao đổi về quỹ dự phòng"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-leaf-800">Muốn trao đổi với ai?</span>
          <select
            name="preferredAdvisorId"
            defaultValue={report.leadInfo?.preferredAdvisorId ?? ""}
            className="h-12 w-full rounded-[8px] border border-leaf-200 bg-white px-3 outline-none transition focus:border-leaf-500 focus:ring-4 focus:ring-leaf-100"
          >
            <option value="">Đội ngũ Tài Chính Vui phân công phù hợp</option>
            {teamMembers.map((member) => (
              <option key={member.id} value={member.id}>
                {member.publicLabel}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-leaf-800">Phân công nội bộ</span>
          <select
            name="assignedAdvisorId"
            defaultValue={report.leadInfo?.assignedAdvisorId ?? ""}
            className="h-12 w-full rounded-[8px] border border-leaf-200 bg-white px-3 outline-none transition focus:border-leaf-500 focus:ring-4 focus:ring-leaf-100"
          >
            <option value="">Chưa phân công</option>
            {teamMembers.map((member) => (
              <option key={member.id} value={member.id}>
                {member.name} · {member.role}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-4 flex gap-3 text-sm leading-6 text-leaf-700">
        <input
          name="consent"
          type="checkbox"
          defaultChecked={report.leadInfo?.consent ?? false}
          className="mt-1 h-4 w-4 rounded border-leaf-300 text-leaf-700"
        />
        <span>Tôi đồng ý để tư vấn viên liên hệ lại về kết quả tự kiểm tra này.</span>
      </label>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={leadSubmitStatus === "submitting"}>
          {leadSubmitStatus === "submitting" ? "Đang gửi..." : "Lưu thông tin liên hệ"}
        </Button>
        {leadSaved ? <span className="text-sm font-semibold text-leaf-700">Đã lưu vào báo cáo nội bộ.</span> : null}
      </div>
      {leadSubmitMessage ? (
        <p
          className={`mt-3 text-sm font-semibold ${
            leadSubmitStatus === "error" ? "text-red-700" : "text-leaf-700"
          }`}
        >
          {leadSubmitMessage}
        </p>
      ) : null}
    </form>
  );
}

function ReviewBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="min-w-0 rounded-[8px] border border-leaf-100 bg-leaf-50 p-4">
      <p className="text-sm font-bold text-leaf-900">{title}</p>
      <p className="mt-1 break-words text-sm leading-6 text-leaf-700 [overflow-wrap:anywhere]">{body}</p>
    </div>
  );
}

function ResultList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-7">
      <h2 className="text-xl font-bold text-leaf-900">{title}</h2>
      <div className="mt-3 grid gap-3">
        {items.map((item) => (
          <div key={item} className="min-w-0 break-words rounded-[8px] border border-leaf-100 bg-white p-4 leading-7 text-leaf-800">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
