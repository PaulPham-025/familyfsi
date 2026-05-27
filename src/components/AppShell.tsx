import Link from "next/link";
import type { ReactNode } from "react";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen px-4 py-5 text-leaf-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between pb-5">
        <Link href="/" className="flex items-center gap-3" aria-label="Family Financial Safety Index">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-leaf-700 text-sm font-bold text-white">
            FSI
          </span>
          <span>
            <span className="block text-sm font-semibold leading-tight">Family Financial</span>
            <span className="block text-sm font-semibold leading-tight">Safety Index</span>
          </span>
        </Link>
        <span className="hidden rounded-full border border-leaf-200 bg-white/70 px-4 py-2 text-sm text-leaf-700 sm:inline-flex">
          Tự kiểm tra trong 5 phút
        </span>
      </div>
      {children}
    </main>
  );
}
