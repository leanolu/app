import { errorResponse } from "@/lib/api-errors";
import { analyzeJob } from "@/lib/ai";
import { analyzeJobRequestSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { jobDescription } = analyzeJobRequestSchema.parse(body);
    return Response.json({ data: await analyzeJob(jobDescription) });
  } catch (error) {
    return errorResponse(error);
  }
}
