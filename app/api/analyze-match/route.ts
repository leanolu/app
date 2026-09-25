import { errorResponse } from "@/lib/api-errors";
import { analyzeResumeMatch } from "@/lib/ai";
import { analyzeMatchRequestSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { jobDescription, jobAnalysis, resume } = analyzeMatchRequestSchema.parse(body);
    return Response.json({ data: await analyzeResumeMatch(jobDescription, jobAnalysis, resume) });
  } catch (error) {
    return errorResponse(error);
  }
}
