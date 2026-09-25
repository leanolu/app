import Link from "next/link";
import { getCopy, type Locale } from "@/lib/i18n";

export function SiteHeader({ locale, alternateHref }: { locale: Locale; alternateHref?: string }) {
  const text = getCopy(locale);
  const homeHref = locale === "zh" ? "/zh" : "/";
  return (
    <header className="relative z-20 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href={homeHref} className="flex items-center gap-2.5" aria-label="JobFit AI home">
          <span className="grid size-8 place-items-center rounded-lg bg-[var(--brand)] text-sm font-black text-white">J</span>
          <span className="font-bold tracking-[-0.02em] text-slate-950">JobFit AI</span>
        </Link>
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-2 text-sm text-slate-500 md:flex"><span className="status-dot" aria-hidden="true" /> {text.headerTagline}</span>
          <Link href={alternateHref ?? text.languageHref} className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-bold text-slate-600 hover:border-violet-300 hover:text-[var(--brand)]">{text.languageName}</Link>
        </div>
      </div>
    </header>
  );
}
