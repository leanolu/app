import type { ResumeMatch as ResumeMatchType } from "@/types/analysis";
import { ItemList, SectionCard } from "@/components/section-card";
import { getCopy, type Locale } from "@/lib/i18n";

export function ResumeMatchResults({ match, locale }: { match: ResumeMatchType; locale: Locale }) {
  const coverage = match.coverage;
  const text = getCopy(locale);
  return (
    <>
      <SectionCard id="resume-match" title={text.resumeMatchTitle} description={text.resumeMatchDescription}>
        <div className="flex flex-col gap-5 rounded-xl bg-slate-950 p-5 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-400">{text.requirementsCovered}</p>
            <p className="mt-1 text-3xl font-bold">{coverage.matchedCount} <span className="text-lg font-medium text-slate-400">/ {coverage.totalRequirements}</span></p>
          </div>
          <div className="sm:text-right">
            <p className="text-2xl font-bold">~{coverage.estimatePercent}%</p>
            <p className="mt-1 max-w-sm text-xs leading-5 text-slate-400">{coverage.disclaimer}</p>
          </div>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div><h3 className="mb-4 text-sm font-bold text-[var(--green)]">{text.matched}</h3><ItemList tone="good" items={match.matched.map((item) => ({ label: item.item, text: item.reason }))} /></div>
          <div><h3 className="mb-4 text-sm font-bold text-[var(--rose)]">{text.missing}</h3><ItemList tone="bad" items={match.missing.map((item) => ({ label: item.item, text: item.reason }))} /></div>
        </div>
      </SectionCard>

      <div id="skill-gaps" className="grid scroll-mt-24 gap-5 lg:grid-cols-2">
        <SectionCard title={text.improvable} description={text.improvableDescription}>
          <ItemList tone="warn" items={match.improvable.map((item) => ({ label: item.item, text: item.reason }))} />
        </SectionCard>
        <SectionCard title={text.hardToFix} description={text.hardToFixDescription}>
          <ItemList tone="bad" items={match.hardToFix.map((item) => ({ label: item.item, text: item.reason }))} />
        </SectionCard>
      </div>

      <SectionCard title={text.prioritySkills} description={text.priorityDescription}>
        <div className="space-y-4">
          {match.prioritySkills.map((skill, index) => (
            <article key={skill.skill} className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-bold text-slate-900"><span className="mr-2 text-slate-400">{String(index + 1).padStart(2, "0")}</span>{skill.skill}</h3>
                <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${skill.priority === "High" ? "bg-red-50 text-red-700" : skill.priority === "Medium" ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-600"}`}>{text.priorities[skill.priority]}</span>
              </div>
              <dl className="mt-4 grid gap-3 text-sm md:grid-cols-3">
                <Detail label={text.whyItMatters} value={skill.whyItMatters} />
                <Detail label={text.currentGap} value={skill.currentGap} />
                <Detail label={text.nextAction} value={skill.nextAction} />
              </dl>
            </article>
          ))}
        </div>
      </SectionCard>

      <SectionCard title={text.suggestions} description={text.suggestionsDescription}>
        <div className="space-y-5">
          {match.resumeSuggestions.map((suggestion, index) => (
            <article key={index} className="rounded-xl border border-slate-200 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{text.original}</p>
              <p className="mt-2 text-sm text-slate-500 line-through decoration-slate-300">{suggestion.original}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[var(--brand)]">{text.rewrite}</p>
              <p className="mt-2 font-medium leading-7 text-slate-800">{suggestion.suggestion}</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">{text.why}：{suggestion.reason}</p>
            </article>
          ))}
        </div>
      </SectionCard>
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return <div className="rounded-lg bg-slate-50 p-3"><dt className="font-bold text-slate-700">{label}</dt><dd className="mt-1 leading-6 text-slate-500">{value}</dd></div>;
}
