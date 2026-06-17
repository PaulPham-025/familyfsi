import { ContactCta, PageIntro } from "@/components/ContentBlocks";
import { Panel } from "@/components/Ui";
import { SitePage } from "@/components/SiteHeader";
import { processSteps, teamWorkflow } from "@/lib/site-content";

export default function ProcessPage() {
  return (
    <SitePage>
      <PageIntro
        label="Quy trình làm việc"
        title="Một quy trình rõ ràng để gia đình biết mình đang ở đâu và nên làm gì tiếp theo."
        body="Quy trình này không nhằm tạo áp lực mua ngay một giải pháp nào đó. Mục tiêu là giúp gia đình nhìn đúng ưu tiên và chọn bước đi vừa sức."
      />
      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 pb-14 sm:px-6 lg:px-8">
        {processSteps.map((step, index) => (
          <Panel key={step.title} className="shadow-none">
            <div className="grid gap-4 md:grid-cols-[120px_1fr] md:items-start">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-leaf-600">Bước {index + 1}</p>
              <div>
                <h2 className="text-2xl font-bold text-leaf-900">{step.title}</h2>
                <p className="mt-2 leading-8 text-leaf-700">{step.body}</p>
              </div>
            </div>
          </Panel>
        ))}
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <Panel>
          <h2 className="text-2xl font-bold text-leaf-900">Khi anh/chị muốn trao đổi thêm</h2>
          <p className="mt-4 max-w-4xl leading-8 text-leaf-800">{teamWorkflow[0]}</p>
        </Panel>
      </section>
      <ContactCta />
    </SitePage>
  );
}
