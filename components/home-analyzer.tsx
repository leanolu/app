"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { demoJobAnalysis, demoJobDescription, demoResume, demoResumeMatch } from "@/lib/demo-data";
import { demoJobAnalysisZh, demoJobDescriptionZh, demoResumeMatchZh, demoResumeZh } from "@/lib/demo-data-zh";
import { getCopy, type Locale } from "@/lib/i18n";

const STORAGE_KEY = "jobfit-session";

export function HomeAnalyzer({ locale }: { locale: Locale }) {
  const text = getCopy(locale);
  const router = useRouter();
  const [jobDescription, setJobDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyzeJob() {
    if (!jobDescription.trim()) {
      setError(text.emptyJob);
      return;
    }
    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/analyze-job", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription, locale }),
      });
      const body = await response.json().catch(() => null);
      if (!response.ok || !body?.data) {
        throw new Error(body?.error || text.analyzeError);
      }
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ jobDescription, jobAnalysis: body.data, resume: "", resumeMatch: null }));
      router.push(locale === "zh" ? "/zh/analyze" : "/analyze");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : text.networkError);
      setLoading(false);
    }
  }

  function tryDemo() {
    const isChinese = locale === "zh";
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
      jobDescription: isChinese ? demoJobDescriptionZh : demoJobDescription,
      jobAnalysis: isChinese ? demoJobAnalysisZh : demoJobAnalysis,
      resume: isChinese ? demoResumeZh : demoResume,
      resumeMatch: isChinese ? demoResumeMatchZh : demoResumeMatch,
    }));
    router.push(isChinese ? "/zh/analyze" : "/analyze");
  }

  return (
    <div className="panel p-4 text-left sm:p-6">
      <div className="mb-3 flex items-end justify-between gap-4">
        <div>
          <label htmlFor="job-description" className="text-sm font-bold text-slate-900">{text.jobLabel}</label>
          <p className="mt-1 text-sm text-slate-500">{text.jobHelp}</p>
        </div>
        <span className="hidden text-xs font-medium text-slate-400 sm:block">{text.charLimit}</span>
      </div>
      <textarea
        id="job-description"
        className="field min-h-72"
        maxLength={20000}
        placeholder={text.jobPlaceholder}
        value={jobDescription}
        onChange={(event) => { setJobDescription(event.target.value); if (error) setError(""); }}
        aria-describedby={error ? "job-description-error" : undefined}
      />
      {error && <p id="job-description-error" role="alert" className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
      <div className="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="button" className="secondary-button" onClick={tryDemo}>{text.tryDemo}</button>
        <button type="button" className="primary-button sm:min-w-44" onClick={analyzeJob} disabled={loading}>
          {loading ? <><span className="spinner" aria-hidden="true" /> {text.analyzingJob}</> : <>{text.analyzeJob} <span aria-hidden="true">→</span></>}
        </button>
      </div>
    </div>
  );
}
