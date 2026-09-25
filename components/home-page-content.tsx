import { HomeAnalyzer } from "@/components/home-analyzer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getCopy, type Locale } from "@/lib/i18n";

export function HomePageContent({ locale }: { locale: Locale }) {
  const text = getCopy(locale);
  return (
    <main lang={locale === "zh" ? "zh-CN" : "en"} className="min-h-screen overflow-hidden bg-[var(--canvas)]">
      <SiteHeader locale={locale} />
      <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <div className="hero-glow" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="eyebrow">{text.eyebrow}</div>
          <h1 className="mt-6 text-balance text-5xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
            {text.heroTop}
            <span className="block text-[var(--brand)]">{text.heroBottom}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl">{text.heroText}</p>
        </div>

        <div className="relative mx-auto mt-12 max-w-4xl">
          <HomeAnalyzer locale={locale} />
          <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
            {text.features.map(([number, title, description]) => (
              <div key={number} className="mini-card">
                <span className="text-xs font-bold text-[var(--brand)]">{number}</span>
                <p className="mt-3 font-semibold text-slate-900">{title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
