import { LinkButton, Panel, SectionLabel } from "@/components/Ui";
import { brand } from "@/lib/site-content";

export function ContactCta() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
      <div className="rounded-[8px] bg-leaf-800 px-5 py-8 text-white sm:px-8">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-2xl font-bold">Muốn nhìn rõ hơn bức tranh tài chính gia đình?</h2>
            <p className="mt-2 max-w-2xl leading-7 text-leaf-50">
              Anh/chị có thể bắt đầu bằng bài FSI hoặc đặt lịch trao đổi ngắn để cùng xác định ưu tiên phù hợp.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/survey" className="bg-white text-leaf-800 hover:bg-leaf-50">
              Làm FSI
            </LinkButton>
            <LinkButton href={brand.bookingUrl} variant="secondary" className="border-white bg-transparent text-white hover:bg-white/10">
              {brand.bookingLabel}
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageIntro({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
      <SectionLabel>{label}</SectionLabel>
      <h1 className="max-w-4xl text-4xl font-bold leading-tight text-leaf-900 sm:text-5xl">{title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-leaf-800">{body}</p>
    </section>
  );
}

export function PlaceholderMedia({ title }: { title: string }) {
  return (
    <Panel className="grid min-h-56 place-items-center bg-leaf-50 text-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-leaf-600">Media placeholder</p>
        <p className="mt-2 text-xl font-bold text-leaf-900">{title}</p>
        <p className="mt-2 text-sm leading-6 text-leaf-700">Thêm ảnh, video hoặc thumbnail thật sau.</p>
      </div>
    </Panel>
  );
}
