import type { ResumeMatch } from "@/types/analysis";
import { SectionCard } from "@/components/section-card";

export function InterviewPrep({ questions }: { questions: ResumeMatch["interviewQuestions"] }) {
  return (
    <SectionCard id="interview" title="Interview Preparation" description="Practice concise answers grounded in your real experience">
      <div className="grid gap-5 lg:grid-cols-3">
        <QuestionGroup number="01" title="Common questions" items={questions.common} />
        <QuestionGroup number="02" title="Role-specific" items={questions.roleSpecific} />
        <QuestionGroup number="03" title="STAR stories" items={questions.star} />
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
