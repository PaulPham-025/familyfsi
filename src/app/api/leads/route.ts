import { NextResponse } from "next/server";
import type { InternalFsiReport } from "@/lib/fsi-scoring";

export const runtime = "nodejs";

type LeadSheetPayload = {
  submittedAt: string;
  fullName: string;
  phone: string;
  preferredContactTime: string;
  note: string;
  consent: boolean;
  preferredAdvisorId: string;
  assignedAdvisorId: string;
  routingStatus: string;
  leadSource: string;
  ageGroup: string;
  familyStatus: string;
  dependents: string;
  incomeSource: string;
  monthlyIncome: string;
  totalScore: number;
  maxScore: number;
  zoneLabel: string;
  zoneTitle: string;
  strongestDimensions: string;
  weakestDimensions: string;
  suggestedPriorities: string;
  advisorSummary: string;
  rawReport: InternalFsiReport;
};

function asText(value: unknown) {
  return typeof value === "string" ? value : "";
}

function buildSheetPayload(report: InternalFsiReport): LeadSheetPayload {
  const leadInfo = report.leadInfo ?? {};
  const respondentInfo = report.respondentInfo ?? {};

  return {
    submittedAt: leadInfo.submittedAt ?? new Date().toISOString(),
    fullName: asText(leadInfo.fullName),
    phone: asText(leadInfo.phone),
    preferredContactTime: asText(leadInfo.preferredContactTime),
    note: asText(leadInfo.note),
    consent: Boolean(leadInfo.consent),
    preferredAdvisorId: asText(leadInfo.preferredAdvisorId),
    assignedAdvisorId: asText(leadInfo.assignedAdvisorId),
    routingStatus: leadInfo.routingStatus ?? "new",
    leadSource: leadInfo.leadSource ?? "fsi-result",
    ageGroup: asText(respondentInfo.ageGroup),
    familyStatus: asText(respondentInfo.familyStatus),
    dependents: asText(respondentInfo.dependents),
    incomeSource: asText(respondentInfo.incomeSource),
    monthlyIncome: asText(respondentInfo.monthlyIncome),
    totalScore: report.totalScore,
    maxScore: report.maxScore,
    zoneLabel: report.zone.label,
    zoneTitle: report.zone.title,
    strongestDimensions: report.strongestDimensions.map((item) => item.dimension).join(", "),
    weakestDimensions: report.weakestDimensions.map((item) => item.dimension).join(", "),
    suggestedPriorities: report.suggestedPriorities.join(" | "),
    advisorSummary: report.generatedSummary,
    rawReport: report
  };
}

export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { ok: false, error: "GOOGLE_SHEETS_WEBHOOK_URL is not configured." },
      { status: 503 }
    );
  }

  let report: InternalFsiReport;

  try {
    report = (await request.json()) as InternalFsiReport;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON payload." }, { status: 400 });
  }

  if (!report?.totalScore || !report?.zone || !report?.generatedSummary) {
    return NextResponse.json({ ok: false, error: "Invalid FSI report payload." }, { status: 400 });
  }

  const sheetPayload = buildSheetPayload(report);
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sheetPayload)
  });

  const responseBody = await response.text();

  if (!response.ok) {
    return NextResponse.json(
      { ok: false, error: "Google Sheets webhook failed.", details: responseBody },
      { status: 502 }
    );
  }

  try {
    const result = JSON.parse(responseBody) as { ok?: boolean; error?: string };

    if (result.ok !== true) {
      return NextResponse.json(
        { ok: false, error: result.error ?? "Google Sheets webhook did not confirm success." },
        { status: 502 }
      );
    }
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Google Sheets webhook returned a non-JSON response. Check Apps Script deployment access.",
        details: responseBody.slice(0, 500)
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
