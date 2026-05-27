import { notFound } from "next/navigation";
import { ContactCta } from "@/components/ContentBlocks";
import { LinkButton, SectionLabel } from "@/components/Ui";
import { SitePage } from "@/components/SiteHeader";
import { articleLongFormAdditions, articles } from "@/lib/site-content";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const paragraphs = [...article.body, ...(articleLongFormAdditions[article.slug] ?? [])];

  return (
    <SitePage>
      <article className="mx-auto w-full max-w-3xl px-4 pb-14 pt-6 sm:px-6 lg:px-8">
        <SectionLabel>{article.category} · {article.readTime}</SectionLabel>
        <h1 className="text-4xl font-bold leading-tight text-leaf-900 sm:text-5xl">{article.title}</h1>
        <p className="mt-5 text-lg leading-8 text-leaf-800">{article.excerpt}</p>
        <div className="mt-8 space-y-5 text-lg leading-9 text-leaf-800">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10 rounded-[8px] border border-leaf-100 bg-leaf-50 p-5">
          <p className="leading-7 text-leaf-800">{article.fsiCta}</p>
          <LinkButton href="/survey" className="mt-4">
            Tự kiểm tra với FSI
          </LinkButton>
        </div>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/bai-viet" variant="secondary">
            Xem bài khác
          </LinkButton>
        </div>
      </article>
      <ContactCta />
    </SitePage>
  );
}
