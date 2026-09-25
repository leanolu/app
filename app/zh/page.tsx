import type { Metadata } from "next";
import { HomePageContent } from "@/components/home-page-content";

export const metadata: Metadata = {
  title: "JobFit AI — 看懂岗位，找到自己的路径",
  description: "分析职位描述、对比简历、发现技能差距，并获得具体行动计划。",
};

export default function ChineseHome() {
  return <HomePageContent locale="zh" />;
}
