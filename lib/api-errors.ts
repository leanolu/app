import OpenAI from "openai";
import { ZodError } from "zod";
import { InvalidAiResponseError, MissingApiKeyError } from "@/lib/ai";
import type { Locale } from "@/lib/i18n";

export function errorResponse(error: unknown, locale: Locale = "en") {
  const zh = locale === "zh";
  if (error instanceof ZodError) {
    return Response.json({ error: zh ? "部分信息缺失或内容太短，请检查后重试。" : "Some information is missing or too short. Please review your input and try again." }, { status: 400 });
  }
  if (error instanceof MissingApiKeyError) {
    return Response.json({ error: zh ? "AI 分析尚未配置。请添加 OPENAI_API_KEY 后重新部署。" : "AI analysis is not configured yet. Add OPENAI_API_KEY and redeploy the app." }, { status: 503 });
  }
  if (error instanceof InvalidAiResponseError) {
    return Response.json({ error: zh ? "AI 返回的结果不完整，请重新分析。" : "The AI returned an incomplete result. Please try the analysis again." }, { status: 502 });
  }
  if (error instanceof OpenAI.APIError) {
    const message = error.status === 401
      ? (zh ? "AI 服务密钥无效，请检查 OPENAI_API_KEY。" : "The AI service key is invalid. Please check OPENAI_API_KEY.")
      : error.status === 429
        ? (zh ? "AI 服务繁忙或已达到使用限额，请稍后重试。" : "The AI service is busy or has reached its usage limit. Please try again later.")
        : (zh ? "AI 服务暂时无法完成请求，请重试。" : "The AI service could not complete this request. Please try again.");
    return Response.json({ error: message }, { status: error.status === 401 ? 503 : 502 });
  }
  console.error("Unexpected API error", error);
  return Response.json({ error: zh ? "生成分析时出现问题，请重试。" : "Something went wrong while creating the analysis. Please try again." }, { status: 500 });
}
