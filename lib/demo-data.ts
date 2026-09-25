import type { JobAnalysis, ResumeMatch } from "@/types/analysis";

export const demoJobDescription = `Supply Chain Analyst

We are looking for a Supply Chain Analyst to improve inventory visibility and planning across our regional operations. You will analyze supply and demand data, build recurring reports, partner with procurement and logistics teams, and recommend actions that reduce stockouts and excess inventory.

Responsibilities:
- Analyze inventory, demand, and supplier performance data
- Build dashboards and present insights to cross-functional stakeholders
- Support monthly supply planning and forecasting
- Identify process improvements across procurement and logistics

Requirements:
- Bachelor's degree in Supply Chain, Business, International Trade, or related field
- 2+ years of relevant analytical or operations experience
- Advanced Excel skills, including Pivot Tables and lookup functions
- Strong communication and problem-solving skills
- Professional English

Preferred qualifications:
- SQL or Python experience
- Familiarity with SAP or another ERP system
- Experience in supply chain planning or procurement
- Power BI knowledge is a plus`;

export const demoResume = `Mina Chen
International Trade Coordinator

SUMMARY
International Trade graduate with two years of experience supporting overseas clients, shipment coordination, and operational reporting. Professional working proficiency in English and Korean.

EXPERIENCE
Trade Operations Coordinator — Bright Harbor Trading
- Coordinated shipments and delivery updates with logistics partners
- Helped Korean clients and handled day-to-day communication in English and Korean
- Maintained weekly order trackers in Excel and followed up on delays
- Worked with sales and warehouse teams to resolve order issues

EDUCATION
Bachelor of International Trade

SKILLS
Excel, English, Korean, shipment coordination, client communication, order tracking`;

export const demoJobAnalysis: JobAnalysis = {
  jobTitle: "Supply Chain Analyst",
  jobSummary: "This role turns supply chain data into practical decisions. You would help the business understand what to order, where inventory is at risk, and how suppliers and logistics are performing.",
  mainGoal: "Improve product availability while reducing excess inventory and operational waste.",
  responsibilities: [
    "Analyze inventory, demand, and supplier performance data",
    "Create recurring dashboards and explain findings to stakeholders",
    "Support forecasting and monthly supply planning",
    "Recommend improvements across procurement and logistics",
  ],
  mustHave: [
    { label: "Relevant bachelor's degree", explanation: "Supply Chain, Business, International Trade, or a related subject." },
    { label: "2+ years of relevant experience", explanation: "Analytical or operations work that connects to supply chain decisions." },
    { label: "Advanced Excel", explanation: "Comfort with Pivot Tables, lookup functions, and structured reporting." },
    { label: "Professional English", explanation: "Able to communicate findings and work across teams." },
    { label: "Problem solving", explanation: "Able to move from data to a clear recommendation." },
  ],
  niceToHave: [
    { label: "SQL or Python", explanation: "Helpful for analyzing larger datasets efficiently." },
    { label: "SAP or ERP", explanation: "Useful for accessing operational and inventory data." },
    { label: "Planning or procurement", explanation: "Direct domain experience shortens the learning curve." },
    { label: "Power BI", explanation: "Useful for dashboards and stakeholder reporting." },
  ],
  hardSkills: ["Advanced Excel", "Inventory analysis", "Forecasting", "SQL", "SAP / ERP", "Power BI"],
  softSkills: ["Communication", "Problem solving", "Cross-functional collaboration", "Presentation"],
  keywords: ["supply planning", "inventory", "demand", "supplier performance", "procurement", "logistics", "dashboard", "process improvement"],
};

export const demoResumeMatch: ResumeMatch = {
  coverage: { matchedCount: 8, totalRequirements: 13, estimatePercent: 62, disclaimer: "AI-based estimate only — this is not the employer's real ATS score." },
  matched: [
    { item: "International Trade degree", reason: "Directly matches one of the accepted degree backgrounds." },
    { item: "Two years of operations experience", reason: "Shipment and order coordination are relevant operational experience." },
    { item: "English communication", reason: "The resume shows regular professional English use." },
    { item: "Cross-functional coordination", reason: "Worked with sales, warehouse, clients, and logistics partners." },
  ],
  missing: [
    { item: "SQL", reason: "No database querying experience is shown." },
    { item: "SAP / ERP", reason: "The resume does not mention an enterprise planning system." },
    { item: "Supply planning", reason: "Current work is adjacent, but direct planning ownership is not demonstrated." },
  ],
  hardToFix: [
    { item: "Direct supply planning experience", reason: "Usually requires ownership in a real operating environment and cannot be gained instantly." },
  ],
  improvable: [
    { item: "Advanced Excel", reason: "Can be demonstrated through a focused inventory analysis project." },
    { item: "SQL basics", reason: "Core querying skills can be learned and shown in a small portfolio project." },
    { item: "Supply chain metrics", reason: "Inventory turns, stockout rate, and forecast accuracy are learnable concepts." },
  ],
  prioritySkills: [
    { skill: "Advanced Excel", priority: "High", whyItMatters: "It is a stated must-have and central to recurring analysis.", currentGap: "The resume mentions trackers but not advanced functions.", nextAction: "Build an inventory workbook using Pivot Tables, XLOOKUP, and Power Query." },
    { skill: "Supply Chain Analytics", priority: "High", whyItMatters: "The role is evaluated on inventory and planning decisions.", currentGap: "Relevant coordination exists, but analysis ownership is unclear.", nextAction: "Learn inventory turns, safety stock, stockout rate, and forecast error; calculate them in a sample dataset." },
    { skill: "SQL", priority: "Medium", whyItMatters: "It helps retrieve and analyze operational data at scale.", currentGap: "No SQL evidence appears in the resume.", nextAction: "Complete a beginner SQL course and write 10 supply-chain queries using a public dataset." },
    { skill: "SAP basics", priority: "Medium", whyItMatters: "ERP familiarity reduces onboarding time.", currentGap: "No ERP exposure is listed.", nextAction: "Learn the order-to-delivery and inventory concepts used in SAP; do not claim hands-on access without it." },
  ],
  resumeSuggestions: [
    { original: "Helped Korean clients and handled day-to-day communication in English and Korean.", suggestion: "Supported Korean clients and coordinated cross-cultural business communication in English and Korean.", reason: "Keeps the original fact while making the transferable communication skill clearer." },
    { original: "Maintained weekly order trackers in Excel and followed up on delays.", suggestion: "Maintained weekly Excel order trackers, monitored delivery status, and followed up with partners on shipment delays.", reason: "Shows the operational purpose of the work without inventing results." },
  ],
  actionPlan: [
    { title: "Strengthen advanced Excel", timeframe: "Week 1", actions: ["Practice Pivot Tables and Pivot Charts", "Use XLOOKUP to combine order and inventory tables", "Clean a dataset with Power Query"], outcome: "A reusable inventory analysis workbook." },
    { title: "Learn supply chain fundamentals", timeframe: "Week 2", actions: ["Study inventory turns, safety stock, and stockout rate", "Calculate each metric using sample data"], outcome: "A one-page metric guide with working examples." },
    { title: "Build an inventory project", timeframe: "Weeks 3–4", actions: ["Analyze demand and stock data", "Create a dashboard", "Write three evidence-based recommendations"], outcome: "A portfolio project that demonstrates analytical thinking." },
    { title: "Update the resume", timeframe: "Week 4", actions: ["Strengthen the two relevant experience bullets", "Add only skills demonstrated in the project", "Move languages and Excel into a visible skills section"], outcome: "A truthful, role-focused resume." },
    { title: "Prepare for interviews", timeframe: "Ongoing", actions: ["Write STAR stories for delays and stakeholder issues", "Practice explaining the inventory project in two minutes"], outcome: "Clear examples for behavioral and technical interviews." },
  ],
  interviewQuestions: {
    common: ["Tell me about yourself and how your background connects to supply chain analysis.", "Why are you interested in this Supply Chain Analyst role?", "What is a professional strength you would bring to this team?", "Describe a skill you are currently developing and why.", "What would success look like for you in your first 90 days?"],
    roleSpecific: ["How would you investigate a sudden increase in stockouts?", "Which inventory metrics would you include in a weekly dashboard?", "How would you explain a forecast miss to a non-technical stakeholder?", "What Excel features have you used to analyze operational data?", "How would you prioritize conflicting requests from procurement and logistics?"],
    star: ["Tell me about a time you resolved a delayed shipment.", "Describe a time you coordinated people from different teams or cultures.", "Tell me about a time you found an error in an operational tracker.", "Give an example of using data to support a decision.", "Describe a difficult client communication and how you handled it."],
  },
};
