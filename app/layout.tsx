import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JobFit AI — Understand the job. Build your path.",
  description: "Analyze job descriptions, compare your resume, and build a focused career action plan.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
