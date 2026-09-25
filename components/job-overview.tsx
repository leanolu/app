import type { JobAnalysis } from "@/types/analysis";
import { ItemList, SectionCard } from "@/components/section-card";
import { getCopy, type Locale } from "@/lib/i18n";

export function JobOverview({ analysis, locale }: { analysis: JobAnalysis; locale: Locale }) {
  const text = getCopy(locale);
  return (
    <>
      <SectionCard id="overview" title={text.overviewTitle} description={text.overviewDescription}>
        <p className="text-base leading-7 text-slate-700">{analysis.jobSummary}</p>
        <div className="mt-5 rounded-xl bg-[var(--brand-soft)] p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--brand-dark)]">{text.mainGoal}</p>
          <p className="mt-2 font-medium leading-7 text-slate-800">{analysis.mainGoal}</p>
        </div>
        <div className="mt-6">
          <h3 className="mb-3 text-sm font-bold text-slate-900">{text.responsibilities}</h3>
          <ItemList items={analysis.responsibilities.map((item) => ({ label: item, text: "" }))} />
        </div>
      </SectionCard>

      <div id="requirements" className="grid scroll-mt-24 gap-5 lg:grid-cols-2">
        <SectionCard title={text.mustHave} description={text.mustHaveDescription}>
          <ItemList tone="good" items={analysis.mustHave.map((item) => ({ label: item.label, text: item.explanation }))} />
        </SectionCard>
        <SectionCard title={text.niceToHave} description={text.niceToHaveDescription}>
          <ItemList tone="warn" items={analysis.niceToHave.map((item) => ({ label: item.label, text: item.explanation }))} />
        </SectionCard>
      </div>

      <SectionCard id="skills" title={text.skillsTitle} description={text.skillsDescription}>
        <div className="grid gap-6 sm:grid-cols-2">
          <SkillGroup title={text.hardSkills} items={analysis.hardSkills} />
          <SkillGroup title={text.softSkills} items={analysis.softSkills} />
        </div>
        <div className="mt-6 border-t border-slate-100 pt-5">
          <h3 className="text-sm font-bold text-slate-900">{text.resumeKeywords}</h3>
          <div className="mt-3 flex flex-wrap gap-2">{analysis.keywords.map((keyword) => <span key={keyword} className="tag">{keyword}</span>)}</div>
          <p className="mt-3 text-xs leading-5 text-slate-500">{text.keywordNote}</p>
        </div>
      </SectionCard>
    </>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return <div><h3 className="text-sm font-bold text-slate-900">{title}</h3><div className="mt-3 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="tag">{item}</span>)}</div></div>;
}
