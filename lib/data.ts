/* =========================================================================
 * 全站唯一内容数据源
 * 上线前只需修改本文件：把所有【占位 / 示例】内容替换为真实信息
 * ========================================================================= */

export type Accent = "yellow" | "blue" | "green" | "pink" | "purple";

export const profile = {
  // 【占位】替换为真实姓名 / 英文名
  name: "Pan",
  enName: "PAN",
  roleLine:
    "多年互联网产品及运营经验，擅长在复杂业务中找到关键问题，再用数据与产品化方式推进落地。",
  tagline: "擅长在复杂业务中找到关键问题，再用数据与产品化方式推进落地。",
  signals: ["硕士", "大厂数据平台", "AI Agent 实践"],
  email: "your.name@example.com", // 【占位】
  resumeUrl: "/resume.pdf",
  socials: [
    { label: "LinkedIn", href: "#" }, // 【占位】替换为真实链接
    { label: "即刻", href: "#" },
    { label: "GitHub", href: "#" },
  ],
  wechat: "微信 ID（占位）",
};

export const marqueeWords = [
  "PRODUCT MANAGER",
  "DATA PLATFORM",
  "AI AGENT",
  "BI & ANALYTICS",
  "REQUIREMENT RESEARCH",
  "WORKFLOW DESIGN",
];

/* ----------------------------------------------------------------------- */

export interface Project {
  slug: string;
  index: string;
  category: string;
  title: string;
  imagePrompt: string;
  outcome: string;
  problem: string;
  role: string;
  aiPoints: string[];
  tools: string[];
  accent: Accent;
  overview: string;
  approach: { heading: string; body: string }[];
  evals: { heading: string; body: string }[];
  outcomeDetail: string[];
  learnings: string[];
  artifacts: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "industry-data-assets",
    index: "01",
    category: "数据资产",
    title: "行业数据资产",
    imagePrompt:
      "neo brutalism editorial poster, data asset platform dashboard, layered charts and industry taxonomy cards, bright yellow background, bold black outlines, flat vector illustration, product website cover, realistic interface composition",
    outcome: "建设多垂类领域高复用性数据资产",
    problem:
      "围绕多个垂类业务场景，建设可复用的数据资产底座，支持更高效的数据洞察与产品解决方案输出。",
    role: "产品经理：负责数据资产规划、场景抽象与平台化能力设计",
    aiPoints: ["垂类抽象", "资产复用", "平台能力建设"],
    tools: ["BI 工具", "数据分析"],
    accent: "yellow",
    overview:
      "围绕行业和垂类需求，建设可沉淀、可复用、可扩展的数据资产体系，支撑后续洞察与解决方案产品化。",
    approach: [
      {
        heading: "场景拆解",
        body: "先按行业与业务场景拆解核心数据需求，提炼可复用的数据主题、标签与指标结构。",
      },
      {
        heading: "资产化设计",
        body: "把一次性的数据加工能力沉淀为可重复复用的数据资产，提升多垂类业务复用效率。",
      },
      {
        heading: "平台落地",
        body: "通过平台化方式统一供给数据能力，兼顾标准化和业务灵活性。",
      },
    ],
    evals: [
      {
        heading: "复用效果",
        body: "关注资产复用率、场景覆盖度与方案输出效率，验证数据资产建设的实际价值。",
      },
      {
        heading: "平台稳定性",
        body: "持续观察资产供给一致性、指标口径统一性与下游使用反馈。",
      },
    ],
    outcomeDetail: [
      "形成多垂类可复用的数据资产体系",
      "支持数据洞察产品及解决方案建设",
      "沉淀资产规划与平台化建设方法",
    ],
    learnings: [
      "数据资产的价值不在于数量，而在于场景可复用性和供给效率。",
      "平台化能力建设要同时兼顾统一标准和业务灵活度。",
    ],
    artifacts: ["资产规划方案", "平台能力框架"],
  },
  {
    slug: "public-opinion-platform",
    index: "02",
    category: "平台产品",
    title: "舆情平台",
    imagePrompt:
      "neo brutalism product cover, public opinion monitoring platform, news signals, alerts, analysis panels, bold black borders, electric blue and yellow palette, flat illustration, modern product interface poster",
    outcome: "建设舆情信息发现、分析研判、处置平台产品",
    problem:
      "面向舆情管理与分析场景，需要把信息发现、研判分析与后续处置流程统一到一个平台里，提升响应效率。",
    role: "产品经理：负责平台流程设计、信息分析能力与处置链路建设",
    aiPoints: ["信息发现", "分析研判", "处置协同"],
    tools: ["产品设计", "数据分析"],
    accent: "blue",
    overview:
      "围绕舆情工作流，建设从信息发现、分析研判到处置跟进的一体化平台产品，强化信息协同与处置效率。",
    approach: [
      {
        heading: "流程梳理",
        body: "围绕舆情业务流程梳理关键节点，把发现、分析、处置串成统一闭环。",
      },
      {
        heading: "能力整合",
        body: "把信息检索、分析研判、风险标注与协同处置能力整合到一个产品框架中。",
      },
      {
        heading: "协同设计",
        body: "强调平台协同能力，让信息流和处理流统一沉淀，而不是分散在多个工具里。",
      },
    ],
    evals: [
      {
        heading: "流程效率",
        body: "关注舆情发现到处置的链路效率、信息完整性与协同响应效果。",
      },
      {
        heading: "使用反馈",
        body: "通过平台使用反馈不断调整研判与处置模块的设计重点。",
      },
    ],
    outcomeDetail: [
      "形成信息发现、分析研判、处置跟进一体化平台",
      "提升舆情业务流程协同性和产品承载能力",
      "沉淀舆情场景下的平台产品设计经验",
    ],
    learnings: [
      "复杂业务平台的重点在于流程承载，而不只是功能堆叠。",
      "把信息链路和处置链路打通，比单点能力更能体现平台价值。",
    ],
    artifacts: ["平台流程图", "产品方案文档"],
  },
  {
    slug: "market-insight-agent",
    index: "03",
    category: "AI Agent",
    title: "市场洞察 Agent",
    imagePrompt:
      "neo brutalism AI agent workspace, market insight report generation, monitoring tasks, cards, charts and report panel, bright green and yellow colors, black outlines, clean flat illustration, website project cover",
    outcome: "建设市场信息洞察 agent，智能理解监测任务需求，智能生成洞察报告",
    problem:
      "市场洞察工作中，监测任务定义、信息收集、分析整理和报告生成往往依赖人工串联，效率与标准化都有提升空间。",
    role: "产品经理：负责任务理解链路、Agent 工作流与报告生成体验设计",
    aiPoints: ["任务理解", "智能监测", "洞察报告生成"],
    tools: ["Trae Codex", "Claude", "墨刀"],
    accent: "green",
    overview:
      "围绕市场信息洞察场景，建设能够理解监测任务、组织信息采集并生成结构化洞察报告的 agent 产品原型。",
    approach: [
      {
        heading: "任务理解",
        body: "先把用户输入的监测目标和分析要求结构化，避免 agent 在模糊任务里直接发散执行。",
      },
      {
        heading: "工作流编排",
        body: "通过信息搜集、归类分析、要点提炼和报告生成的分步骤设计，保证结果更稳定、更可控。",
      },
      {
        heading: "报告交付",
        body: "把最终输出收敛为结构化洞察报告，强调结论清晰、信息来源可追溯。",
      },
    ],
    evals: [
      {
        heading: "结果可用性",
        body: "重点关注任务理解准确度、报告结构完整性和洞察结论可用性。",
      },
      {
        heading: "工作流稳定性",
        body: "持续优化提示、工作流和输出模板，减少结论跳跃和信息噪音。",
      },
    ],
    outcomeDetail: [
      "形成市场洞察 Agent 原型与任务理解机制",
      "支持从监测需求到洞察报告的智能化流程",
      "沉淀 AI 工作流产品设计与报告生成经验",
    ],
    learnings: [
      "Agent 产品的关键不是“能做很多事”，而是能否把任务理解和结果交付做稳。",
      "结构化报告是智能洞察产品落地中最关键的用户感知界面之一。",
    ],
    artifacts: ["Agent 流程设计", "洞察报告示例"],
  },
];

/* ----------------------------------------------------------------------- */

export interface ApproachItem {
  key: string;
  title: string;
  summary: string;
  points: string[];
  evidence: string; // 证据指针：指向作品 slug
  tools: string[];
}

export const approaches: ApproachItem[] = [
  {
    key: "A",
    title: "选对问题",
    summary: "先定义值得解决的问题，再谈方案——用调研与数据排除伪需求。",
    points: ["需求调研", "用户访谈", "场景与竞品拆解"],
    evidence: "agent-research-workflow",
    tools: ["墨刀"],
  },
  {
    key: "B",
    title: "数据驱动",
    summary: "把模糊目标拆成可度量指标，用数据验证判断，而不是支撑立场。",
    points: ["指标体系", "数据分析", "BI 看板"],
    evidence: "bi-copilot",
    tools: ["BI 工具"],
  },
  {
    key: "C",
    title: "AI 产品化",
    summary: "像设计功能一样设计 AI 行为：定义边界、评估质量、接受 trade-off。",
    points: ["Agent 工作流", "Prompt 与评测", "人机协同"],
    evidence: "agent-research-workflow",
    tools: ["Trae Codex", "Claude"],
  },
];

/* ----------------------------------------------------------------------- */

// 【占位】所有数字均为示例，替换为真实数据；若无可靠数字请改为成果短句
export const metrics = [
  { value: "3+", label: "AI 产品实践项目（示例）" },
  { value: "60%", label: "日常取数自助完成（示例）" },
  { value: "30+", label: "Agent 评测样本（示例）" },
  { value: "100+", label: "需求稿自查（示例）" },
];

export const artifacts = [
  { title: "脱敏 PRD / 方案文档", type: "文档", href: "/path#artifacts" },
  { title: "AI 评测集样例", type: "评测", href: "/path#artifacts" },
  { title: "BI 看板截图", type: "数据", href: "/path#artifacts" },
  { title: "产品拆解笔记", type: "分析", href: "/path#artifacts" },
];

/* ----------------------------------------------------------------------- */

export interface Experience {
  period: string;
  company: string;
  role: string;
  achievement: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    period: "2021-至今",
    company: "某互联网大厂",
    role: "产品经理",
    achievement: "负责数据产品相关平台建设，提供数据洞察产品及解决方案",
    tags: ["数据产品", "平台建设", "数据洞察"],
  },
  {
    period: "2019-2021",
    company: "某互联网大厂",
    role: "产品经理",
    achievement: "负责数据产品相关平台建设，提供数据洞察产品及解决方案",
    tags: ["数据产品", "平台建设", "数据洞察"],
  },
  {
    period: "2017-2019",
    company: "某明星创业公司（C 轮）",
    role: "产品运营",
    achievement: "负责平台用户增长留存、产品使用体验流程优化",
    tags: ["用户增长", "留存", "体验优化"],
  },
];

export const education = {
  degree: "硕士",
  school: "英国曼彻斯特大学 · 企业传播",
  highlights: "学士 · 华南师范大学 · 传播学",
};

/* ----------------------------------------------------------------------- */

export const aboutLong = [
  {
    heading: "从数据平台走到 AI 产品",
    body: "我的产品生涯从数据平台开始：和口径、看板、指标体系打交道，让我习惯先问“这个判断的数据依据是什么”。后来开始做 AI Agent 与智能化产品，我发现数据背景在 AI 时代反而更有用——模型能力越强，越需要有人定义问题、设计边界、评估结果。",
  },
  {
    heading: "我相信什么",
    body: "我相信产品经理的价值在于定义正确的问题，并把复杂能力翻译成可交付、可评估的体验。对 AI 产品尤其如此：边界、评测和人机交接点，比“多智能”的演示更重要。",
  },
  {
    heading: "当下关注",
    body: "持续关注 Agent 工作流设计、人机协同模式与数据智能化，也在坚持用 side project 验证想法，让自己始终保持“亲手构建”的手感。",
  },
  {
    heading: "工作之外",
    body: "摄影训练审美与观察，Lightroom / Photoshop 是我的常备工具；篮球提供体力和对抗心；影视则持续训练我的叙事感——如何在有限篇幅里讲清一件事。",
  },
];

export const interests = [
  { title: "摄影", desc: "Lightroom / Photoshop 常备，喜欢街头与光影", accent: "pink" as Accent },
  { title: "篮球", desc: "周末球场补给能量，相信团队配合", accent: "purple" as Accent },
  { title: "影视", desc: "用影视审美训练叙事与节奏", accent: "yellow" as Accent },
];

// 原型阶段以色块贴纸代替照片；上线前替换为真实压缩后的摄影作品
export const photoSlots = Array.from({ length: 6 }, (_, i) => `PHOTO 0${i + 1}`);

export const homeWorks = [
  { title: "摄影图片 1", type: "个人兴趣", accent: "pink" as Accent },
  { title: "摄影图片 2", type: "个人兴趣", accent: "purple" as Accent },
  { title: "摄影图片 3", type: "个人兴趣", accent: "yellow" as Accent },
  { title: "vibecoding 案例", type: "AI 实践", accent: "green" as Accent },
  { title: "AI 评测工作台", type: "AI 实践", accent: "blue" as Accent },
  { title: "AI 时光相册", type: "AI 实践", accent: "pink" as Accent },
];
