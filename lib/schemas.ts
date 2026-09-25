import { z } from "zod";

const text = z.string().min(1);
const requirementSchema = z.object({ label: text, explanation: text });
const gapSchema = z.object({ item: text, reason: text });

export const jobAnalysisSchema = z.object({
  jobTitle: text,
  jobSummary: text,
  mainGoal: text,
  responsibilities: z.array(text),
  mustHave: z.array(requirementSchema),
  niceToHave: z.array(requirementSchema),
  hardSkills: z.array(text),
  softSkills: z.array(text),
  keywords: z.array(text),
});

export const resumeMatchSchema = z.object({
  coverage: z.object({
    matchedCount: z.number().int().nonnegative(),
    totalRequirements: z.number().int().positive(),
    estimatePercent: z.number().int().min(0).max(100),
    disclaimer: text,
  }),
  matched: z.array(gapSchema),
  missing: z.array(gapSchema),
  hardToFix: z.array(gapSchema),
  improvable: z.array(gapSchema),
  prioritySkills: z.array(z.object({
    skill: text,
    priority: z.enum(["High", "Medium", "Low"]),
    whyItMatters: text,
    currentGap: text,
    nextAction: text,
  })),
  resumeSuggestions: z.array(z.object({ original: text, suggestion: text, reason: text })),
  actionPlan: z.array(z.object({ title: text, timeframe: text, actions: z.array(text), outcome: text })),
  interviewQuestions: z.object({
    common: z.array(text).length(5),
    roleSpecific: z.array(text).length(5),
    star: z.array(text).length(5),
  }),
});

export const analyzeJobRequestSchema = z.object({
  jobDescription: z.string().trim().min(50).max(20000),
});

export const analyzeMatchRequestSchema = z.object({
  jobDescription: z.string().trim().min(50).max(20000),
  resume: z.string().trim().min(50).max(20000),
  jobAnalysis: jobAnalysisSchema,
});
