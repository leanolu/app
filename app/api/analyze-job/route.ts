import { errorResponse } from "@/lib/api-errors";
import { analyzeJob } from "@/lib/ai";
import { analyzeJobRequestSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  let locale: "en" | "zh" = "en";
  try {
    const body = await request.json();
    locale = body?.locale === "zh" ? "zh" : "en";
    const parsed = analyzeJobRequestSchema.parse(body);
    return Response.json({ data: await analyzeJob(parsed.jobDescription, parsed.locale) });
  } catch (error) {
    return errorResponse(error, locale);
  }
}
