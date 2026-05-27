import { ContactCta, PageIntro, PlaceholderMedia } from "@/components/ContentBlocks";
import { Panel } from "@/components/Ui";
import { SitePage } from "@/components/SiteHeader";
import { videos } from "@/lib/site-content";

export default function VideoPage() {
  return (
    <SitePage>
      <PageIntro
        label="Video"
        title="Video ngắn để giải thích tài chính gia đình bằng ngôn ngữ đời thường."
        body="Có thể gắn YouTube, Facebook hoặc TikTok sau. Hiện tại đây là cấu trúc thư viện video để chuẩn bị cho nội dung thật."
      />
      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 pb-14 sm:px-6 md:grid-cols-3 lg:px-8">
        {videos.map((video) => (
          <Panel key={video.title} className="shadow-none">
            <PlaceholderMedia title={video.source} />
            <h2 className="mt-4 text-xl font-bold leading-7 text-leaf-900">{video.title}</h2>
            <p className="mt-2 leading-7 text-leaf-700">{video.description}</p>
            <p className="mt-4 text-sm font-semibold text-leaf-600">{video.status}</p>
          </Panel>
        ))}
      </section>
      <ContactCta />
    </SitePage>
  );
}
