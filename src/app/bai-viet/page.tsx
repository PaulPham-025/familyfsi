import { ContactCta, PageIntro } from "@/components/ContentBlocks";
import { LinkButton, Panel } from "@/components/Ui";
import { SitePage } from "@/components/SiteHeader";
import { articles } from "@/lib/site-content";

export default function ArticlesPage() {
  return (
    <SitePage>
      <PageIntro
        label="Bài viết"
        title="Nội dung dài giúp gia đình trẻ hiểu tài chính theo cách gần gũi hơn."
        body="Đây là thư viện nội dung nền tảng của FamilyFSI, giúp anh/chị nhìn rõ dòng tiền, dự phòng, bảo vệ thu nhập và các mục tiêu dài hạn trước khi ra quyết định."
      />
      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 pb-14 sm:px-6 md:grid-cols-2 lg:px-8">
        {articles.map((article) => (
          <Panel key={article.slug} className="shadow-none">
            <p className="text-sm font-bold text-leaf-600">{article.category} · {article.readTime}</p>
            <h2 className="mt-2 text-2xl font-bold leading-8 text-leaf-900">{article.title}</h2>
            <p className="mt-3 leading-7 text-leaf-700">{article.excerpt}</p>
            <LinkButton href={`/bai-viet/${article.slug}`} variant="secondary" className="mt-5">
              Đọc bài viết
            </LinkButton>
          </Panel>
        ))}
      </section>
      <ContactCta />
    </SitePage>
  );
}
