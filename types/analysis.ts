export type Requirement = { label: string; explanation: string };

export type JobAnalysis = {
  jobTitle: string;
  jobSummary: string;
  mainGoal: string;
  responsibilities: string[];
  mustHave: Requirement[];
  niceToHave: Requirement[];
  hardSkills: string[];
  softSkills: string[];
  keywords: string[];
};

export type Gap = { item: string; reason: string };
export type PrioritySkill = {
  skill: string;
  priority: "High" | "Medium" | "Low";
  whyItMatters: string;
  currentGap: string;
  nextAction: string;
};
export type ResumeSuggestion = { original: string; suggestion: string; reason: string };
export type ActionStep = { title: string; timeframe: string; actions: string[]; outcome: string };

export type ResumeMatch = {
  coverage: { matchedCount: number; totalRequirements: number; estimatePercent: number; disclaimer: string };
  matched: Gap[];
  missing: Gap[];
  hardToFix: Gap[];
  improvable: Gap[];
  prioritySkills: PrioritySkill[];
  resumeSuggestions: ResumeSuggestion[];
  actionPlan: ActionStep[];
  interviewQuestions: { common: string[]; roleSpecific: string[]; star: string[] };
};
