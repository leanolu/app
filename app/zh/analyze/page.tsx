import type { Metadata } from "next";
import { AnalysisDashboard } from "@/components/analysis-dashboard";

export const metadata: Metadata = { title: "分析结果 — JobFit AI" };

export default function ChineseAnalyzePage() {
  return <AnalysisDashboard locale="zh" />;
}
