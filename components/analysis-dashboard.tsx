"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ActionPlan } from "@/components/action-plan";
import { InterviewPrep } from "@/components/interview-prep";
import { JobOverview } from "@/components/job-overview";
import { ResumeMatchResults } from "@/components/resume-match";
import { SectionCard } from "@/components/section-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { JobAnalysis, ResumeMatch } from "@/types/analysis";

type SessionData = {
  jobDescription: string;
  jobAnalysis: JobAnalysis;
  resume: string;
  resumeMatch: ResumeMatch | null;
};

const STORAGE_KEY = "jobfit-session";
const navItems = [
  ["Overview", "#overview"], ["Requirements", "#requirements"], ["Skills", "#skills"],
  ["Resume Match", "#resume-match"], ["Skill Gaps", "#skill-gaps"],
  ["Action Plan", "#action-plan"], ["Interview", "#interview"],
];

export function AnalysisDashboard() {
  const [session, setSession] = useState<SessionData | null>(null);
  const [ready, setReady] = useState(false);
  const [resume, setResume] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        const stored = sessionStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored) as SessionData;
          if (parsed.jobAnalysis?.jobTitle) { setSession(parsed); setResume(parsed.resume || ""); }
        }
      } catch { sessionStorage.removeItem(STORAGE_KEY); }
      setReady(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  async function analyzeResume() {
    if (!resume.trim()) { setError("Please paste your resume before comparing it with the job."); return; }
    if (!session) return;
    setLoading(true); setError("");
    try {
      const response = await fetch("/api/analyze-match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription: session.jobDescription, jobAnalysis: session.jobAnalysis, resume }),
      });
      const body = await response.json().catch(() => null);
      if (!response.ok || !body?.data) throw new Error(body?.error || "We couldn't compare your resume. Please try again.");
      const next = { ...session, resume, resumeMatch: body.data as ResumeMatch };
      setSession(next);
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      requestAnimationFrame(() => document.querySelector("#resume-match")?.scrollIntoView({ behavior: "smooth" }));
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "A network error occurred. Please try again.");
    } finally { setLoading(false); }
  }

  if (!ready) return <LoadingScreen />;
  if (!session) return <EmptyState />;

  return (
    <main className="min-h-screen bg-[var(--canvas)]">
      <SiteHeader />
      <div className="border-b border-slate-200 bg-white px-5 py-7 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="text-sm font-semibold text-[var(--brand)]">← Analyze another job</Link>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-sm font-medium text-slate-500">Your analysis</p><h1 className="mt-1 text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-4xl">{session.jobAnalysis.jobTitle}</h1></div>
            <span className="w-fit rounded-full bg-[var(--green-soft)] px-3 py-1.5 text-xs font-bold text-[var(--green)]">Analysis ready</span>
          </div>
        </div>
      </div>

      <nav aria-label="Analysis sections" className="sticky top-0 z-10 overflow-x-auto border-b border-slate-200 bg-white/90 px-5 backdrop-blur lg:hidden">
        <div className="flex min-w-max gap-5">{navItems.map(([label, href]) => <a key={label} href={href} className="py-3 text-sm font-semibold text-slate-600 hover:text-[var(--brand)]">{label}</a>)}</div>
      </nav>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <nav aria-label="Analysis sections" className="sticky top-6 rounded-xl border border-slate-200 bg-white p-3">
            {navItems.map(([label, href]) => <a key={label} href={href} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-600 hover:bg-[var(--brand-soft)] hover:text-[var(--brand-dark)]">{label}</a>)}
          </nav>
        </aside>

        <div className="min-w-0 space-y-5">
          <JobOverview analysis={session.jobAnalysis} />
          <SectionCard title="Compare Your Resume" description="Paste resume text. File upload can be added later without changing this analysis flow.">
            <label htmlFor="resume" className="sr-only">Resume text</label>
            <textarea id="resume" className="field min-h-64" maxLength={20000} placeholder="Paste your resume here…" value={resume} onChange={(event) => { setResume(event.target.value); if (error) setError(""); }} />
            {error && <p role="alert" className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
            <div className="mt-4 flex justify-end"><button type="button" className="primary-button" onClick={analyzeResume} disabled={loading}>{loading ? <><span className="spinner" /> Comparing your resume...</> : "Compare Resume"}</button></div>
          </SectionCard>
          {session.resumeMatch ? <><ResumeMatchResults match={session.resumeMatch} /><ActionPlan steps={session.resumeMatch.actionPlan} /><InterviewPrep questions={session.resumeMatch.interviewQuestions} /></> : <PendingSteps />}
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}

function LoadingScreen() { return <main className="grid min-h-screen place-items-center bg-[var(--canvas)]"><div className="text-center"><span className="mx-auto block size-7 animate-spin rounded-full border-2 border-violet-200 border-t-[var(--brand)]" /><p className="mt-3 text-sm text-slate-500">Loading your analysis…</p></div></main>; }
function EmptyState() { return <main className="grid min-h-screen place-items-center bg-[var(--canvas)] px-5"><div className="panel max-w-md p-8 text-center"><h1 className="text-2xl font-bold text-slate-950">No analysis found</h1><p className="mt-3 leading-7 text-slate-500">Start with a job description, then your results will appear here.</p><Link href="/" className="primary-button mt-6">Go to homepage</Link></div></main>; }
function PendingSteps() { return <div className="grid gap-4 sm:grid-cols-3">{["Skill Gaps", "Action Plan", "Interview Prep"].map((title) => <div key={title} className="card border-dashed text-center"><div className="mx-auto grid size-9 place-items-center rounded-full bg-slate-100 text-slate-400">○</div><p className="mt-3 font-semibold text-slate-700">{title}</p><p className="mt-1 text-sm text-slate-400">Add your resume to unlock</p></div>)}</div>; }
