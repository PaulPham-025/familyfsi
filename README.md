# FamilyFSI

Production-ready MVP for a Vietnamese family-finance education, lead-generation, and self-assessment website. The experience is designed to feel like a calm family financial planning tool, not a hard-sell insurance page.

## Project Structure

- `src/app/page.tsx` - main FamilyFSI homepage.
- `src/app/gioi-thieu/page.tsx` - advisor introduction page.
- `src/app/quy-trinh/page.tsx` - client process page.
- `src/app/bai-viet/page.tsx` - article library page.
- `src/app/bai-viet/[slug]/page.tsx` - long-form article detail pages generated from `src/lib/site-content.ts`.
- `src/app/tai-lieu/page.tsx` - downloadable guides and whitepapers page.
- `src/app/tai-lieu/[slug]/page.tsx` - guide detail pages with request form scaffolding.
- `src/app/video/page.tsx` - video library page.
- `src/app/survey/page.tsx` - optional general info section, 10-question mobile-first survey, progress, validation, and local progress saving.
- `src/app/result/page.tsx` - scored result page, zone explanation, advisor summary, low-friction lead capture, JSON export, copy summary, and print-friendly view.
- `src/lib/site-content.ts` - brand, navigation, process steps, article cards, downloadable guide cards, and video cards.
- `src/lib/fsi-data.ts` - all customer-facing Vietnamese questions, answer choices, score values, info fields, and zone copy.
- `src/lib/fsi-scoring.ts` - scoring, zone classification, strongest/weakest dimensions, suggested priorities, and internal report generation.
- `src/components` - small shared UI components used by the pages.

## Scoring

The survey has 10 scored questions with a maximum score of 50.

Default answer scoring:

- Best answer: `5`
- Next answer: `3`
- Next answer: `2`
- Weakest answer: `1`

Exceptions:

- Question 3: `3, 5, 2, 1`
- Question 8: `5, 3, 2, 1, 3`

Zone classification:

- `43-50`: Vùng Xanh
- `35-42`: Vùng Vàng
- `25-34`: Vùng Cam
- `10-24`: Vùng Đỏ

## Vietnamese Copy

Customer-facing copy is centralized in `src/lib/fsi-data.ts` where possible:

- `infoFields` controls the low-friction general info fields.
- `fsiQuestions` controls question text, answer labels, dimensions, and per-answer scores.
- `zoneContent` controls zone labels, ranges, titles, and result summaries.

Landing and result supporting copy lives in the matching route files:

- `src/app/page.tsx`
- `src/app/result/page.tsx`

Advisor website copy is stored mainly in `src/lib/site-content.ts`. Update this file first when changing:

- Brand name and tagline
- Platform/domain positioning
- Zalo or booking links
- Navigation
- Process steps
- Article previews
- Downloadable guides
- Video placeholders
- Team members and internal lead routing workflow

## Brand Direction

The public brand is now `FamilyFSI`, short for `Family Financial Safety Index`.

Recommended domain direction:

- Primary: `familyfsi.com`
- Vietnam-specific backup: `familyfsi.vn`
- Product/app backup: `familyfsi.app`

Keep individual advisor names as team/member content, not as the main domain identity.

## Updating Questions or Score Bands

To edit survey questions or answer choices, update `fsiQuestions` in `src/lib/fsi-data.ts`.

To change a score value, edit the `score` assigned to the relevant answer option. The helper `withScores()` keeps the default pattern compact, while exceptions can pass a custom score array.

To change score bands, update `getZone()` in `src/lib/fsi-scoring.ts` and keep `zoneContent` in `src/lib/fsi-data.ts` aligned with the new ranges.

## Internal Report Object

After completion, the app generates a structured report in `createInternalReport()`:

- respondent info
- raw answers
- per-question score
- total score
- zone
- strongest dimensions
- weakest dimensions
- generated advisor summary
- optional lead contact info
- team routing fields such as preferred advisor, assigned advisor, lead source, and routing status

The result page stores this object in `localStorage` under `fsi-result` and supports JSON export for later Google Sheets, PDF, email, or CRM workflows.

## Google Sheets Lead Capture

The result page submits completed lead information to `src/app/api/leads/route.ts`. That API route forwards a flattened lead payload to a Google Apps Script webhook.

Required environment variable:

```bash
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Suggested Google Sheet columns:

```text
submittedAt, fullName, phone, preferredContactTime, note, consent, preferredAdvisorId,
assignedAdvisorId, routingStatus, leadSource, ageGroup, familyStatus, dependents,
incomeSource, monthlyIncome, totalScore, maxScore, zoneLabel, zoneTitle,
strongestDimensions, weakestDimensions, suggestedPriorities, advisorSummary, rawReport
```

Google Apps Script starter:

```js
const SHEET_NAME = "Leads";

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error(`Sheet tab "${SHEET_NAME}" was not found.`);
    }

    sheet.appendRow([
      payload.submittedAt,
      payload.fullName,
      payload.phone,
      payload.preferredContactTime,
      payload.note,
      payload.consent,
      payload.preferredAdvisorId,
      payload.assignedAdvisorId,
      payload.routingStatus,
      payload.leadSource,
      payload.ageGroup,
      payload.familyStatus,
      payload.dependents,
      payload.incomeSource,
      payload.monthlyIncome,
      payload.totalScore,
      payload.maxScore,
      payload.zoneLabel,
      payload.zoneTitle,
      payload.strongestDimensions,
      payload.weakestDimensions,
      payload.suggestedPriorities,
      payload.advisorSummary,
      JSON.stringify(payload.rawReport)
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

Apps Script deployment settings:

- Deploy as `Web app`.
- Execute as `Me`.
- Who has access: `Anyone`.
- Copy the `/exec` URL into `GOOGLE_SHEETS_WEBHOOK_URL` in Vercel Project Settings -> Environment Variables.
- Redeploy the Vercel project after adding the environment variable.

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Dependency-Free Preview

If npm is unavailable in the local environment, a static preview is included so the funnel can still be reviewed in a browser:

```bash
node preview-server.mjs
```

Then open `http://localhost:3000`.

This preview is only a fallback for review. The production implementation remains the Next.js app under `src/app`.
