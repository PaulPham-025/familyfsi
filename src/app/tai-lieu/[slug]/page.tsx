import { notFound } from "next/navigation";
import { ContactCta } from "@/components/ContentBlocks";
import { Button, LinkButton, Panel, SectionLabel } from "@/components/Ui";
import { SitePage } from "@/components/SiteHeader";
import { guides, teamMembers } from "@/lib/site-content";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export default async function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    notFound();
  }

  const downloadUrl = "downloadUrl" in guide ? guide.downloadUrl : undefined;

  return (
    <SitePage>
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-14 pt-6 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:px-8">
        <article>
          <SectionLabel>{guide.format} · {guide.status}</SectionLabel>
          <h1 className="text-4xl font-bold leading-tight text-leaf-900 sm:text-5xl">{guide.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-leaf-800">{guide.description}</p>
          <Panel className="mt-8">
            <h2 className="text-2xl font-bold text-leaf-900">Nội dung trong tài liệu</h2>
            <div className="mt-5 grid gap-3">
              {guide.sections.map((section, index) => (
                <div key={section} className="flex gap-3 rounded-[8px] border border-leaf-100 bg-white p-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-leaf-100 text-sm font-bold text-leaf-700">
                    {index + 1}
                  </span>
                  <p className="leading-7 text-leaf-800">{section}</p>
                </div>
              ))}
            </div>
          </Panel>
        </article>

        <Panel>
          {downloadUrl ? (
            <>
              <SectionLabel>Tải tài liệu</SectionLabel>
              <h2 className="text-2xl font-bold text-leaf-900">Tải bản PDF để dùng khi cần</h2>
              <p className="mt-3 leading-7 text-leaf-700">
                Anh/chị có thể tải checklist về máy và dùng để tự rà soát nhanh bức tranh tài chính gia đình.
              </p>
              <a
                href={downloadUrl}
                download
                className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-leaf-700 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-leaf-800"
              >
                Tải checklist PDF
              </a>
            </>
          ) : (
            <>
              <SectionLabel>Nhận tài liệu</SectionLabel>
              <h2 className="text-2xl font-bold text-leaf-900">Để lại thông tin để nhận bản đầy đủ</h2>
              <p className="mt-3 leading-7 text-leaf-700">
                FamilyFSI sẽ gửi anh/chị tài liệu khi bản đầy đủ sẵn sàng.
              </p>
              <form className="mt-5 grid gap-4">
                <label>
                  <span className="mb-2 block text-sm font-semibold text-leaf-800">Họ tên</span>
                  <input className="h-12 w-full rounded-[8px] border border-leaf-200 px-3 outline-none focus:border-leaf-500 focus:ring-4 focus:ring-leaf-100" placeholder="Nhập họ tên" />
                </label>
                <label>
                  <span className="mb-2 block text-sm font-semibold text-leaf-800">Số điện thoại hoặc Zalo</span>
                  <input className="h-12 w-full rounded-[8px] border border-leaf-200 px-3 outline-none focus:border-leaf-500 focus:ring-4 focus:ring-leaf-100" placeholder="Nhập thông tin liên hệ" />
                </label>
                <label>
                  <span className="mb-2 block text-sm font-semibold text-leaf-800">Email nếu muốn nhận file qua email</span>
                  <input className="h-12 w-full rounded-[8px] border border-leaf-200 px-3 outline-none focus:border-leaf-500 focus:ring-4 focus:ring-leaf-100" placeholder="name@example.com" type="email" />
                </label>
                <label>
                  <span className="mb-2 block text-sm font-semibold text-leaf-800">Muốn trao đổi với ai?</span>
                  <select className="h-12 w-full rounded-[8px] border border-leaf-200 bg-white px-3 outline-none focus:border-leaf-500 focus:ring-4 focus:ring-leaf-100">
                    <option>Đội ngũ FamilyFSI phân công phù hợp</option>
                    {teamMembers.map((member) => (
                      <option key={member.id}>{member.publicLabel}</option>
                    ))}
                  </select>
                </label>
                <label className="flex gap-3 text-sm leading-6 text-leaf-700">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-leaf-300" />
                  <span>Tôi đồng ý để FamilyFSI liên hệ lại về tài liệu và nội dung tài chính gia đình liên quan.</span>
                </label>
                <Button type="button">Gửi yêu cầu nhận tài liệu</Button>
              </form>
            </>
          )}
          <LinkButton href="/tai-lieu" variant="secondary" className="mt-4">
            Xem tài liệu khác
          </LinkButton>
        </Panel>
      </section>
      <ContactCta />
    </SitePage>
  );
}
