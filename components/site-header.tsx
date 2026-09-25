import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="JobFit AI home">
          <span className="grid size-8 place-items-center rounded-lg bg-[var(--brand)] text-sm font-black text-white">J</span>
          <span className="font-bold tracking-[-0.02em] text-slate-950">JobFit AI</span>
        </Link>
        <span className="hidden items-center gap-2 text-sm text-slate-500 sm:flex">
          <span className="status-dot" aria-hidden="true" /> Clear, practical career guidance
        </span>
      </div>
    </header>
  );
}
