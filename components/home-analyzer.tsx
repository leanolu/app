"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { demoJobAnalysis, demoJobDescription, demoResume, demoResumeMatch } from "@/lib/demo-data";

const STORAGE_KEY = "jobfit-session";

export function HomeAnalyzer() {
  const router = useRouter();
  const [jobDescription, setJobDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function analyzeJob() {
    if (!jobDescription.trim()) {
      setError("Please paste a job description before continuing.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/analyze-job", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription }),
      });
      const body = await response.json().catch(() => null);
      if (!response.ok || !body?.data) {
        throw new Error(body?.error || "We couldn't analyze this job description. Please try again.");
      }
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ jobDescription, jobAnalysis: body.data, resume: "", resumeMatch: null }));
      router.push("/analyze");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "A network error occurred. Please try again.");
      setLoading(false);
    }
  }

  function tryDemo() {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
      jobDescription: demoJobDescription,
      jobAnalysis: demoJobAnalysis,
      resume: demoResume,
      resumeMatch: demoResumeMatch,
    }));
    router.push("/analyze");
  }

  return (
    <div className="panel p-4 text-left sm:p-6">
      <div className="mb-3 flex items-end justify-between gap-4">
        <div>
          <label htmlFor="job-description" className="text-sm font-bold text-slate-900">Job Description</label>
          <p className="mt-1 text-sm text-slate-500">Paste the full posting for a more useful analysis.</p>
        </div>
        <span className="hidden text-xs font-medium text-slate-400 sm:block">Up to 20,000 characters</span>
      </div>
      <textarea
        id="job-description"
        className="field min-h-72"
        maxLength={20000}
        placeholder="Paste a job description here…"
        value={jobDescription}
        onChange={(event) => { setJobDescription(event.target.value); if (error) setError(""); }}
        aria-describedby={error ? "job-description-error" : undefined}
      />
      {error && <p id="job-description-error" role="alert" className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
      <div className="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="button" className="secondary-button" onClick={tryDemo}>Try Demo</button>
        <button type="button" className="primary-button sm:min-w-44" onClick={analyzeJob} disabled={loading}>
          {loading ? <><span className="spinner" aria-hidden="true" /> Analyzing your job description...</> : <>Analyze Job <span aria-hidden="true">→</span></>}
        </button>
      </div>
    </div>
  );
}
