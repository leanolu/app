import type { JobAnalysis, ResumeMatch } from "@/types/analysis";

export const demoJobDescriptionZh = `供应链分析师

我们正在招聘一名供应链分析师，帮助提升区域业务的库存可见性与计划能力。你需要分析供需数据，制作定期报告，与采购和物流团队合作，并提出减少缺货和库存积压的建议。

工作职责：
- 分析库存、需求和供应商表现数据
- 制作数据看板，并向跨部门同事解释分析结果
- 支持月度供应计划与预测
- 发现采购与物流流程中的改进机会

岗位要求：
- 供应链、商业、国际贸易或相关专业本科学历
- 两年以上相关分析或运营经验
- 熟练使用 Excel，包括数据透视表和查找函数
- 良好的沟通与问题解决能力
- 能够使用英语工作

加分项：
- SQL 或 Python 经验
- 熟悉 SAP 或其他 ERP 系统
- 有供应链计划或采购经验
- 会使用 Power BI`;

export const demoResumeZh = `陈敏
国际贸易运营协调员

个人简介
国际贸易专业毕业，拥有两年海外客户支持、货运协调和运营报告经验。能够使用英语和韩语进行工作沟通。

工作经历
贸易运营协调员 — 海湾贸易有限公司
- 与物流合作伙伴协调发货和交付进度
- 支持韩国客户，并使用英语和韩语进行日常沟通
- 使用 Excel 维护每周订单跟踪表，并跟进延迟订单
- 与销售和仓库团队合作解决订单问题

教育背景
国际贸易学士

技能
Excel、英语、韩语、货运协调、客户沟通、订单跟踪`;

export const demoJobAnalysisZh: JobAnalysis = {
  jobTitle: "供应链分析师",
  jobSummary: "这个岗位需要把供应链数据转化成实际业务决策。你要帮助公司判断应该订购什么、哪些库存有风险，以及供应商和物流环节表现如何。",
  mainGoal: "在减少库存积压和运营浪费的同时，提高产品供应能力。",
  responsibilities: ["分析库存、需求和供应商表现数据", "制作定期数据看板，并向相关团队解释结果", "支持预测和月度供应计划", "提出采购与物流流程改进建议"],
  mustHave: [
    { label: "相关专业本科学历", explanation: "供应链、商业、国际贸易或相关专业。" },
    { label: "两年以上相关经验", explanation: "与供应链决策相关的分析或运营工作。" },
    { label: "熟练使用 Excel", explanation: "能够使用数据透视表、查找函数和结构化报告。" },
    { label: "工作英语能力", explanation: "能够跨团队沟通并解释分析结果。" },
    { label: "问题解决能力", explanation: "能够从数据中得出明确、可执行的建议。" },
  ],
  niceToHave: [
    { label: "SQL 或 Python", explanation: "有助于高效处理较大的数据集。" },
    { label: "SAP 或 ERP", explanation: "方便获取运营和库存数据。" },
    { label: "供应计划或采购经验", explanation: "直接业务经验可以缩短上手时间。" },
    { label: "Power BI", explanation: "适合制作看板和汇报分析结果。" },
  ],
  hardSkills: ["高级 Excel", "库存分析", "需求预测", "SQL", "SAP / ERP", "Power BI"],
  softSkills: ["沟通", "问题解决", "跨部门协作", "汇报表达"],
  keywords: ["供应计划", "库存", "需求", "供应商表现", "采购", "物流", "数据看板", "流程改进"],
};

export const demoResumeMatchZh: ResumeMatch = {
  coverage: { matchedCount: 8, totalRequirements: 13, estimatePercent: 62, disclaimer: "这只是 AI 估算，并不是招聘公司的真实 ATS 分数。" },
  matched: [
    { item: "国际贸易本科学历", reason: "与岗位接受的专业背景直接匹配。" },
    { item: "两年运营经验", reason: "货运和订单协调属于相关运营经验。" },
    { item: "英语沟通", reason: "简历显示了日常工作中的英语使用经验。" },
    { item: "跨部门协调", reason: "曾与销售、仓库、客户和物流合作伙伴协作。" },
  ],
  missing: [
    { item: "SQL", reason: "简历中没有数据库查询经验。" },
    { item: "SAP / ERP", reason: "简历中没有企业资源计划系统经验。" },
    { item: "供应计划", reason: "目前经验与供应链相关，但没有直接负责计划工作的证据。" },
  ],
  hardToFix: [{ item: "直接供应计划经验", reason: "通常需要在真实业务环境中承担职责，无法在短期内完全补齐。" }],
  improvable: [
    { item: "高级 Excel", reason: "可以通过一个库存分析项目展示。" },
    { item: "SQL 基础", reason: "可以学习核心查询能力，并在小型作品中展示。" },
    { item: "供应链指标", reason: "库存周转率、缺货率和预测准确率都可以系统学习。" },
  ],
  prioritySkills: [
    { skill: "高级 Excel", priority: "High", whyItMatters: "这是明确的必须条件，也是日常分析的核心工具。", currentGap: "简历提到订单表，但没有展示高级功能。", nextAction: "使用数据透视表、XLOOKUP 和 Power Query 制作库存分析表。" },
    { skill: "供应链分析", priority: "High", whyItMatters: "岗位的价值来自库存与计划决策。", currentGap: "有协调经验，但没有体现独立分析能力。", nextAction: "学习库存周转、安全库存、缺货率和预测误差，并用样例数据计算。" },
    { skill: "SQL", priority: "Medium", whyItMatters: "可以高效提取并分析大量运营数据。", currentGap: "简历中没有 SQL 证据。", nextAction: "完成入门课程，并使用公开数据写 10 条供应链相关查询。" },
    { skill: "SAP 基础", priority: "Medium", whyItMatters: "ERP 基础可以减少入职后的学习成本。", currentGap: "目前没有 ERP 使用经历。", nextAction: "学习 SAP 中订单、交付与库存的基础概念；没有实际操作前不要声称熟练使用。" },
  ],
  resumeSuggestions: [
    { original: "支持韩国客户，并使用英语和韩语进行日常沟通。", suggestion: "支持韩国客户，并使用英语和韩语协调跨文化业务沟通。", reason: "保留原有事实，同时更清楚地体现可迁移的沟通能力。" },
    { original: "使用 Excel 维护每周订单跟踪表，并跟进延迟订单。", suggestion: "使用 Excel 维护每周订单跟踪表，监控交付状态，并与合作伙伴跟进货运延迟。", reason: "说明工作的业务目的，没有虚构成果。" },
  ],
  actionPlan: [
    { title: "提升高级 Excel", timeframe: "第 1 周", actions: ["练习数据透视表和透视图", "使用 XLOOKUP 合并订单与库存表", "用 Power Query 清洗数据"], outcome: "完成一个可重复使用的库存分析工作簿。" },
    { title: "学习供应链基础", timeframe: "第 2 周", actions: ["学习库存周转、安全库存和缺货率", "使用样例数据计算每项指标"], outcome: "完成一页带实际计算的指标说明。" },
    { title: "完成库存分析项目", timeframe: "第 3–4 周", actions: ["分析需求和库存数据", "制作数据看板", "写出三条有数据依据的建议"], outcome: "获得一个能展示分析思维的作品集项目。" },
    { title: "更新简历", timeframe: "第 4 周", actions: ["优化两条最相关的工作经历", "只加入项目中真正展示过的技能", "突出语言和 Excel 能力"], outcome: "得到一份真实且更符合岗位的简历。" },
    { title: "准备面试", timeframe: "持续进行", actions: ["为延迟订单和协作问题准备 STAR 案例", "练习用两分钟介绍库存分析项目"], outcome: "能够清楚回答行为和专业面试问题。" },
  ],
  interviewQuestions: {
    common: ["请介绍一下你自己，以及你的背景与供应链分析有什么关系。", "你为什么对供应链分析师岗位感兴趣？", "你能为团队带来什么优势？", "你目前正在提升哪项能力？为什么？", "入职前 90 天，你希望取得什么成果？"],
    roleSpecific: ["如果缺货率突然上升，你会如何调查原因？", "每周库存看板应该包含哪些指标？", "你会如何向非技术同事解释预测偏差？", "你使用过哪些 Excel 功能分析运营数据？", "采购和物流同时提出紧急需求时，你会如何安排优先级？"],
    star: ["请讲述一次你解决货运延迟问题的经历。", "请描述一次你协调不同团队或不同文化背景人员的经历。", "请讲述一次你发现运营表格错误的经历。", "请举例说明你如何使用数据支持决策。", "请描述一次困难的客户沟通，以及你是如何处理的。"],
  },
};
