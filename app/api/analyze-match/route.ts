import { errorResponse } from "@/lib/api-errors";
import { analyzeResumeMatch } from "@/lib/ai";
import { analyzeMatchRequestSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  let locale: "en" | "zh" = "en";
  try {
    const body = await request.json();
    locale = body?.locale === "zh" ? "zh" : "en";
    const parsed = analyzeMatchRequestSchema.parse(body);
    return Response.json({ data: await analyzeResumeMatch(parsed.jobDescription, parsed.jobAnalysis, parsed.resume, parsed.locale) });
  } catch (error) {
    return errorResponse(error, locale);
  }
}
