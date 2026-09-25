import { HomeAnalyzer } from "@/components/home-analyzer";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--canvas)]">
      <SiteHeader />
      <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <div className="hero-glow" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="eyebrow">AI-powered career clarity</div>
          <h1 className="mt-6 text-balance text-5xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
            Understand the job.
            <span className="block text-[var(--brand)]">Build your path.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
            Turn a confusing job description into clear requirements, skill gaps,
            and a practical plan for your next move.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-4xl">
          <HomeAnalyzer />
          <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
            {[
              ["01", "Decode the role", "See what the job really asks for."],
              ["02", "Compare your resume", "Find strengths and meaningful gaps."],
              ["03", "Take action", "Get a focused learning and interview plan."],
            ].map(([number, title, text]) => (
              <div key={number} className="mini-card">
                <span className="text-xs font-bold text-[var(--brand)]">{number}</span>
                <p className="mt-3 font-semibold text-slate-900">{title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
