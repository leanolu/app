import OpenAI from "openai";
import { ZodError } from "zod";
import { InvalidAiResponseError, MissingApiKeyError } from "@/lib/ai";

export function errorResponse(error: unknown) {
  if (error instanceof ZodError) {
    return Response.json({ error: "Some information is missing or too short. Please review your input and try again." }, { status: 400 });
  }
  if (error instanceof MissingApiKeyError) {
    return Response.json({ error: "AI analysis is not configured yet. Add OPENAI_API_KEY to .env.local and restart the app." }, { status: 503 });
  }
  if (error instanceof InvalidAiResponseError) {
    return Response.json({ error: "The AI returned an incomplete result. Please try the analysis again." }, { status: 502 });
  }
  if (error instanceof OpenAI.APIError) {
    const message = error.status === 401
      ? "The AI service key is invalid. Please check OPENAI_API_KEY."
      : error.status === 429
        ? "The AI service is busy or has reached its usage limit. Please try again later."
        : "The AI service could not complete this request. Please try again.";
    return Response.json({ error: message }, { status: error.status === 401 ? 503 : 502 });
  }
  console.error("Unexpected API error", error);
  return Response.json({ error: "Something went wrong while creating the analysis. Please try again." }, { status: 500 });
}
