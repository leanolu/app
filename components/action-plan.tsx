import type { ActionStep } from "@/types/analysis";
import { SectionCard } from "@/components/section-card";
import { getCopy, type Locale } from "@/lib/i18n";

export function ActionPlan({ steps, locale }: { steps: ActionStep[]; locale: Locale }) {
  const text = getCopy(locale);
  return (
    <SectionCard id="action-plan" title={text.actionPlanTitle} description={text.actionPlanDescription}>
      <ol className="relative ml-4 border-l border-violet-200">
        {steps.map((step, index) => (
          <li key={`${step.title}-${index}`} className="relative pb-8 pl-8 last:pb-0">
            <span className="absolute -left-4 top-0 grid size-8 place-items-center rounded-full bg-[var(--brand)] text-xs font-bold text-white ring-4 ring-white">{index + 1}</span>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-bold text-slate-900">{step.title}</h3>
              <span className="text-xs font-bold text-[var(--brand)]">{step.timeframe}</span>
            </div>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              {step.actions.map((action) => <li key={action} className="flex gap-2"><span className="text-violet-400">→</span>{action}</li>)}
            </ul>
            <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600"><strong className="text-slate-800">{text.outcome}：</strong> {step.outcome}</p>
          </li>
        ))}
      </ol>
    </SectionCard>
  );
}
