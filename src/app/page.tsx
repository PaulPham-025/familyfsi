import { ContactCta, PlaceholderMedia } from "@/components/ContentBlocks";
import { LinkButton, Panel, SectionLabel } from "@/components/Ui";
import Link from "next/link";
import { SitePage } from "@/components/SiteHeader";
import { articles, brand, processSteps } from "@/lib/site-content";

const promises = [
  "Nói chuyện dễ hiểu, không làm phức tạp hóa tài chính gia đình.",
  "Tập trung vào ưu tiên thực tế trước khi bàn đến sản phẩm hay giải pháp.",
  "Giúp gia đình trẻ nhìn rõ dòng tiền, dự phòng và mục tiêu dài hạn."
];

export default function HomePage() {
  return (
    <SitePage>
      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 pb-12 pt-6 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pt-12">
        <div>
          <SectionLabel>{brand.fullName}</SectionLabel>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-leaf-900 sm:text-6xl">
            Chỉ số giúp gia đình trẻ nhìn rõ mức độ an toàn tài chính của mình.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-leaf-800">{brand.audience}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/survey">Làm bài FSI</LinkButton>
            <LinkButton href="/quy-trinh" variant="secondary">
              Xem quy trình
            </LinkButton>
          </div>
        </div>
        <PlaceholderMedia title="Video giới thiệu FamilyFSI hoặc hình ảnh đội ngũ tư vấn" />
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 pb-14 sm:grid-cols-3 sm:px-6 lg:px-8">
        {promises.map((item) => (
          <Panel key={item} className="shadow-none">
            <p className="text-base font-semibold leading-7 text-leaf-800">{item}</p>
          </Panel>
        ))}
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Quy trình làm việc</SectionLabel>
            <h2 className="text-3xl font-bold leading-tight text-leaf-900">Bắt đầu từ sự rõ ràng, không bắt đầu từ áp lực.</h2>
            <p className="mt-4 leading-8 text-leaf-700">
              Mỗi gia đình có một nhịp sống khác nhau. FamilyFSI tập trung vào việc hiểu bối cảnh,
              xác định ưu tiên và xây kế hoạch vừa sức.
            </p>
            <LinkButton href="/quy-trinh" variant="secondary" className="mt-6">
              Tìm hiểu thêm
            </LinkButton>
          </div>
          <div className="grid gap-3">
            {processSteps.slice(0, 3).map((step, index) => (
              <Panel key={step.title} className="shadow-none">
                <p className="text-sm font-bold text-leaf-600">Bước {index + 1}</p>
                <h3 className="mt-1 text-xl font-bold text-leaf-900">{step.title}</h3>
                <p className="mt-2 leading-7 text-leaf-700">{step.body}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <SectionLabel>Nội dung giáo dục</SectionLabel>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-2xl text-3xl font-bold leading-tight text-leaf-900">
            Các bài viết giúp gia đình trẻ ra quyết định bình tĩnh hơn.
          </h2>
          <LinkButton href="/bai-viet" variant="secondary">
            Xem tất cả
          </LinkButton>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {articles.slice(0, 2).map((article) => (
            <Panel key={article.slug} className="shadow-none">
              <p className="text-sm font-bold text-leaf-600">{article.category} · {article.readTime}</p>
              <h3 className="mt-2 text-xl font-bold leading-7 text-leaf-900">{article.title}</h3>
              <p className="mt-2 leading-7 text-leaf-700">{article.excerpt}</p>
              <Link href={`/bai-viet/${article.slug}`} className="mt-4 inline-flex text-sm font-bold text-leaf-700 underline decoration-leaf-300 underline-offset-4">
                Đọc bài viết
              </Link>
            </Panel>
          ))}
        </div>
      </section>

      <ContactCta />
    </SitePage>
  );
}
