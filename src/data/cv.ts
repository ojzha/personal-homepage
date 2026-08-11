import type { LocalizedText } from "./i18n";

export const education = [
  {
    id: "education-master-nwafu",
    school: { zh: "西北农林科技大学", en: "Northwest A&F University" },
    degree: { zh: "硕士（推免）", en: "M.Eng. Student (recommended admission)" },
    major: { zh: "电子信息工程", en: "Electronic Information Engineering" },
    period: { zh: "2024.09 至今", en: "Sep 2024 - Present" },
    detail: { zh: "GPA：3.86/4；排名：1/63", en: "GPA: 3.86/4; Rank: 1/63" }
  },
  {
    id: "education-bachelor-nwafu",
    school: { zh: "西北农林科技大学", en: "Northwest A&F University" },
    degree: { zh: "本科", en: "B.Eng." },
    major: { zh: "机械电子工程", en: "Mechatronic Engineering" },
    period: { zh: "2020.09 - 2024.06", en: "Sep 2020 - Jun 2024" },
    detail: { zh: "GPA：3.64/4；排名：8/96", en: "GPA: 3.64/4; Rank: 8/96" }
  }
] satisfies Array<{
  id: string;
  school: LocalizedText;
  degree: LocalizedText;
  major: LocalizedText;
  period: LocalizedText;
  detail: LocalizedText;
}>;

export const patents = [
  {
    id: "patent-portable-multispectral-soil-organic-matter",
    title: {
      zh: "一种基于多光谱技术的便携式土壤有机质含量检测装置",
      en: "Portable multispectral device for soil organic matter assessment"
    },
    year: "2026",
    type: { zh: "授权实用新型专利", en: "Granted Utility Model Patent" },
    role: { zh: "学生第二发明人", en: "Student Second Inventor" },
    number: "ZL 2025 2 0726103.X"
  },
  {
    id: "patent-direct-insertion-soil-nutrient-detector",
    title: {
      zh: "一种直插式土壤养分检测仪",
      en: "Direct-insertion instrument for soil nutrient assessment"
    },
    year: "2026",
    type: { zh: "授权实用新型专利", en: "Granted Utility Model Patent" },
    role: { zh: "学生第二发明人", en: "Student Second Inventor" },
    number: "ZL 2025 2 0726102.5"
  }
] satisfies Array<{
  id: string;
  title: LocalizedText;
  year: string;
  type: LocalizedText;
  role: LocalizedText;
  number: string;
}>;

export const softwareCopyrights = [
  {
    id: "copyright-apple-watercore-detection",
    title: {
      zh: "基于自由空间法的苹果水心病程度检测软件 V1.0",
      en: "Free-space Microwave Apple Watercore Assessment Software V1.0"
    },
    year: "2025",
    number: "2025SR1707691"
  },
  {
    id: "copyright-railway-dropper-defect-detection",
    title: {
      zh: "高铁接触网吊弦缺陷检测系统 V1.0",
      en: "High-speed Railway Catenary Dropper Defect Detection System V1.0"
    },
    year: "2024",
    number: "2024SR0406981"
  },
  {
    id: "copyright-leaf-water-content-detection",
    title: {
      zh: "植物叶片含水率无损检测软件 V1.0",
      en: "Nondestructive Plant Leaf Water-content Assessment Software V1.0"
    },
    year: "2026"
  },
  {
    id: "copyright-fu-tea-eurotium-analysis",
    title: {
      zh: "茯茶金花菌分析系统 V1.0",
      en: "Fu Tea Eurotium Cristatum Analysis System V1.0"
    },
    year: "2026"
  }
] satisfies Array<{
  id: string;
  title: LocalizedText;
  year: string;
  number?: string;
}>;

export const awards = [
  {
    id: "award-raicom-ai-2025",
    title: {
      zh: "睿抗机器人开发者大赛人工智能算法应用赛道",
      en: "RAICOM AI Algorithm Application Competition"
    },
    detail: {
      zh: "国家级一等奖（亚军）；队长，位次 1/2",
      en: "National First Prize (runner-up); Team Leader, 1/2"
    },
    year: "2025"
  },
  {
    id: "award-graduate-math-modeling-2024-2025",
    title: {
      zh: "“华为杯”中国研究生数学建模竞赛",
      en: "Huawei Cup China Graduate Mathematical Contest in Modeling"
    },
    detail: {
      zh: "国家级三等奖；队长，位次 1/3",
      en: "National Third Prize; Team Leader, 1/3"
    },
    year: { zh: "2025、2024", en: "2025, 2024" }
  },
  {
    id: "award-lanqiao-cup-2025",
    title: {
      zh: "蓝桥杯全国软件和信息技术专业人才大赛",
      en: "Lanqiao Cup National Software and Information Technology Competition"
    },
    detail: { zh: "国家级三等奖；个人赛", en: "National Third Prize; Individual Competition" },
    year: "2025"
  },
  {
    id: "award-graduate-electronic-design-2025",
    title: {
      zh: "中国研究生电子设计竞赛西北赛区",
      en: "China Graduate Electronics Design Contest, Northwest Division"
    },
    detail: { zh: "二等奖；位次 1/3", en: "Second Prize; Rank 1/3 within the team" },
    year: "2025"
  },
  {
    id: "award-icpc-nanjing-2023",
    title: { zh: "“华为杯”ACM-ICPC 亚洲区域赛", en: "ICPC Asia Nanjing Regional Contest" },
    detail: { zh: "银奖；队员，位次 2/3", en: "Silver Medal; Team Member, 2/3" },
    year: "2023"
  }
] satisfies Array<{
  id: string;
  title: LocalizedText;
  detail: LocalizedText;
  year: string | LocalizedText;
}>;

export const honors = [
  {
    id: "honor-undergraduate-first-class-scholarship",
    text: {
      zh: "本科期间获得专业一等奖学金 3 次",
      en: "First-class Academic Scholarship, three times during undergraduate study"
    }
  },
  {
    id: "honor-national-inspirational-scholarship",
    text: {
      zh: "本科期间获得国家励志奖学金 2 次",
      en: "National Encouragement Scholarship, twice during undergraduate study"
    }
  },
  {
    id: "honor-graduate-first-class-scholarship",
    text: {
      zh: "研究生期间获得专业一等奖学金 2 次",
      en: "First-class Academic Scholarship, twice during graduate study"
    }
  },
  {
    id: "honor-student-and-volunteer-titles",
    text: {
      zh: "曾获优秀大学生、优秀共青团员、校级优秀抗疫志愿者等称号",
      en: "University honors for academic performance, student service, and volunteer work"
    }
  }
] satisfies Array<{ id: string; text: LocalizedText }>;

export const skills = [
  {
    id: "skill-nondestructive-sensing-modeling",
    title: { zh: "无损检测与智能建模", en: "Nondestructive Sensing and Intelligent Modeling" },
    description: {
      zh: "具备光谱/介电数据处理、特征提取、模型构建、性能评估、光谱重建与跨域迁移研究经验。",
      en: "Experience in spectral and dielectric signal processing, feature extraction, model development and evaluation, spectral reconstruction, and cross-domain transfer."
    }
  },
  {
    id: "skill-detection-system-development",
    title: { zh: "检测系统开发", en: "Sensing System Development" },
    description: {
      zh: "参与或独立完成移动端检测 App、PyQt5 桌面系统、目标检测软件和测量到预测闭环流程开发。",
      en: "Developed mobile sensing apps, PyQt5 desktop systems, object-detection software, and end-to-end measurement-to-prediction workflows."
    }
  },
  {
    id: "skill-ai-research-workflow",
    title: { zh: "AI 工具与科研流程", en: "AI-assisted Research Workflows" },
    description: {
      zh: "能够使用 AI 工具辅助文献调研、代码开发、数据分析与科研写作，并持续跟踪智能建模相关前沿进展。",
      en: "Uses AI tools for literature review, software development, data analysis, and scientific writing while tracking advances in intelligent modeling."
    }
  }
] satisfies Array<{ id: string; title: LocalizedText; description: LocalizedText }>;

export const traits = [
  {
    id: "trait-long-term-goal-management",
    title: { zh: "长期目标管理", en: "Long-term Goal Management" },
    description: {
      zh: "长期坚持长跑，多次完成全程马拉松，具备持续投入和目标拆解能力。",
      en: "Long-distance running and multiple marathon finishes reflect sustained commitment and structured goal management."
    }
  },
  {
    id: "trait-discipline-resilience",
    title: { zh: "自律与抗压", en: "Discipline and Resilience" },
    description: {
      zh: "在科研、竞赛和系统开发任务中保持稳定执行，能够在长周期任务中持续推进。",
      en: "Maintains steady execution across research, competitions, and system-development work."
    }
  }
] satisfies Array<{ id: string; title: LocalizedText; description: LocalizedText }>;
