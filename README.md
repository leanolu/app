# JobFit AI

JobFit AI turns a job description into a clear role summary, compares it with a pasted resume, identifies meaningful skill gaps, and builds a practical learning and interview plan.

## Project Overview

The MVP helps a job seeker move through one simple flow:

1. Paste a job description.
2. Understand the role, requirements, skills, and keywords.
3. Paste resume text.
4. See matched, missing, improvable, and hard-to-fix requirements.
5. Get prioritized skill actions, truthful resume suggestions, and interview questions.

The app does not claim to reproduce an employer's ATS. Any percentage shown is clearly labeled as an AI-based estimate.

## Features

- Plain-language job overview and main goal
- Must-have and nice-to-have requirement extraction
- Hard skills, soft skills, and relevant keyword extraction
- Resume-to-job comparison with evidence-based explanations
- Matched, missing, improvable, and hard-to-fix gap groups
- Prioritized skills with a reason, current gap, and concrete next action
- Resume bullet suggestions that do not invent experience or results
- Step-by-step action plan
- Five common, five role-specific, and five STAR-style interview questions
- Built-in Supply Chain Analyst demo that works without an API key
- Complete English and Simplified Chinese interfaces with language switching
- Localized AI output and localized demo data
- Friendly validation and service error messages
- Responsive desktop, tablet, and mobile layout

## Tech Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- OpenAI Responses API with Structured Outputs
- Zod for request and AI response validation

## Installation

Prerequisites: Node.js 22 or later and npm.

```bash
git clone https://github.com/leanolu/app.git
cd app
npm install
```

## Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Then add your key to `.env.local`:

```env
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-5-mini
```

`OPENAI_MODEL` is optional. The API key has no `NEXT_PUBLIC_` prefix, so it remains server-only. `.env.local` is ignored by Git and must never be committed.

## How to Run

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

- English: [http://localhost:3000](http://localhost:3000)
- 简体中文: [http://localhost:3000/zh](http://localhost:3000/zh)

Quality checks:

```bash
npm run lint
npm run build
```

If no API key is configured, select **Try Demo** to explore the complete product flow with sample data.

## Project Structure

```text
app/
  api/analyze-job/route.ts    Job analysis endpoint
  api/analyze-match/route.ts  Resume comparison endpoint
  analyze/page.tsx            Analysis dashboard route
  page.tsx                    Homepage route
components/                   Reusable interface components
lib/
  ai.ts                       Central OpenAI service
  api-errors.ts               Friendly API error mapping
  demo-data.ts                Built-in demo content
  schemas.ts                  Zod validation schemas
types/analysis.ts             Shared TypeScript types
```

## How It Works

The browser sends text to a Next.js API Route. The route validates the request, then the central AI service calls the OpenAI Responses API. Structured Outputs constrain the response to the expected JSON shape, and Zod validates it again before the UI renders the result.

The API key is read only on the server. This MVP stores the current analysis in the browser's session storage so it survives navigation within the tab without requiring a database.

## Future Features

- PDF and DOCX resume parsing
- User accounts and saved analyses
- Optional database persistence
- Exportable action plans
- Job application tracking
- Additional language and accessibility testing

The MVP intentionally excludes authentication, payments, subscriptions, job scraping, LinkedIn integration, browser extensions, and complex ATS simulation.
