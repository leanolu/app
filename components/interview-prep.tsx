import type { ResumeMatch } from "@/types/analysis";
import { SectionCard } from "@/components/section-card";
import { getCopy, type Locale } from "@/lib/i18n";

export function InterviewPrep({ questions, locale }: { questions: ResumeMatch["interviewQuestions"]; locale: Locale }) {
  const text = getCopy(locale);
  return (
    <SectionCard id="interview" title={text.interviewTitle} description={text.interviewDescription}>
      <div className="grid gap-5 lg:grid-cols-3">
        <QuestionGroup number="01" title={text.interviewGroups[0]} items={questions.common} />
        <QuestionGroup number="02" title={text.interviewGroups[1]} items={questions.roleSpecific} />
        <QuestionGroup number="03" title={text.interviewGroups[2]} items={questions.star} />
      </div>
    </SectionCard>
  );
}

function QuestionGroup({ number, title, items }: { number: string; title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="text-xs font-black text-[var(--brand)]">{number}</p>
      <h3 className="mt-2 font-bold text-slate-900">{title}</h3>
      <ol className="mt-4 space-y-3">
        {items.map((item, index) => <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600"><span className="font-bold text-slate-300">{index + 1}.</span>{item}</li>)}
      </ol>
    </div>
  );
}
