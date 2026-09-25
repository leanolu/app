import type { ReactNode } from "react";

export function SectionCard({ id, title, description, children, className = "" }: { id?: string; title: string; description?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`card scroll-mt-24 ${className}`}>
      <div className="mb-5">
        <h2 className="text-lg font-bold tracking-[-0.02em] text-slate-950">{title}</h2>
        {description && <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>}
      </div>
      {children}
    </section>
  );
}

export function ItemList({ items, tone = "neutral" }: { items: { label: string; text: string }[]; tone?: "good" | "warn" | "bad" | "neutral" }) {
  const styles = { good: "bg-[var(--green-soft)] text-[var(--green)]", warn: "bg-[var(--amber-soft)] text-[var(--amber)]", bad: "bg-[var(--rose-soft)] text-[var(--rose)]", neutral: "bg-slate-100 text-slate-500" };
  const symbols = { good: "✓", warn: "△", bad: "!", neutral: "•" };
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={`${item.label}-${index}`} className="flex gap-3">
          <span className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full text-xs font-bold ${styles[tone]}`}>{symbols[tone]}</span>
          <div><p className="font-semibold text-slate-800">{item.label}</p><p className="mt-0.5 text-sm leading-6 text-slate-500">{item.text}</p></div>
        </li>
      ))}
    </ul>
  );
}
