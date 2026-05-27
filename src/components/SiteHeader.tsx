import Link from "next/link";
import { brand, navigation } from "@/lib/site-content";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
      <Link href="/" className="flex items-center gap-3" aria-label={brand.fullName}>
        <span className="grid h-11 w-11 place-items-center rounded-full bg-leaf-700 text-sm font-bold text-white">
          FSI
        </span>
        <span>
          <span className="block text-sm font-bold leading-tight">{brand.name}</span>
          <span className="block text-sm font-semibold leading-tight text-leaf-700">{brand.title}</span>
        </span>
      </Link>
      <nav className="flex max-w-full gap-2 overflow-x-auto pb-1 text-sm font-semibold text-leaf-800">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 rounded-full px-3 py-2 hover:bg-white/80">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SitePage({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen text-leaf-900">
      <SiteHeader />
      {children}
    </main>
  );
}
