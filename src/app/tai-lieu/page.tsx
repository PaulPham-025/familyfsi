import { ContactCta, PageIntro } from "@/components/ContentBlocks";
import { LinkButton, Panel } from "@/components/Ui";
import { SitePage } from "@/components/SiteHeader";
import { guides } from "@/lib/site-content";

export default function ResourcesPage() {
  return (
    <SitePage>
      <PageIntro
        label="Tài liệu tải về"
        title="Checklist, guide và worksheet để gia đình tự rà soát từng phần."
        body="Khu vực này sẽ dùng cho whitepaper, PDF, Google Sheet hoặc tài liệu tặng kèm khi khách hàng để lại thông tin liên hệ."
      />
      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 pb-14 sm:px-6 md:grid-cols-3 lg:px-8">
        {guides.map((guide) => (
          <Panel key={guide.title} className="shadow-none">
            <p className="text-sm font-bold text-leaf-600">{guide.format}</p>
            <h2 className="mt-2 text-xl font-bold leading-7 text-leaf-900">{guide.title}</h2>
            <p className="mt-3 leading-7 text-leaf-700">{guide.description}</p>
            <p className="mt-5 rounded-full bg-leaf-50 px-3 py-2 text-sm font-semibold text-leaf-700">{guide.status}</p>
            <LinkButton href={`/tai-lieu/${guide.slug}`} variant="secondary" className="mt-5">
              Xem tài liệu
            </LinkButton>
          </Panel>
        ))}
      </section>
      <ContactCta />
    </SitePage>
  );
}
