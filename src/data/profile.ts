import { awards, patents, softwareCopyrights } from "./cv";
import type { Locale } from "./i18n";
import { projects } from "./projects";
import { getPublicationCounts } from "./publications";

const profileFacts = {
  email: "gcx@nwafu.edu.cn",
  researchGate: "https://www.researchgate.net/profile/Chengxu-Gong",
  languageScore: "CET-6（500+）"
};

const profileContent = {
  zh: {
    name: "龚城圩",
    englishName: "Chengxu Gong",
    tagline: "多源感知 · 光谱智能 · 跨域建模 · 智能检测系统",
    focus: "面向复杂样本与复杂场景，开展光谱/介电信号处理、低成本光谱重建、跨域迁移建模与智能检测系统开发。",
    summary:
      "西北农林科技大学硕士研究生，研究经历集中在多源传感数据建模、生成式光谱重建、跨品种/跨设备模型迁移和检测软件系统实现。",
    location: "陕西杨凌",
    affiliation: "西北农林科技大学",
    degree: "硕士研究生",
    languages: profileFacts.languageScore,
    researchKeywords: [
      "多源感知",
      "光谱智能建模",
      "介电/微波检测",
      "跨域迁移学习",
      "生成式光谱重建",
      "智能检测系统"
    ],
    publicInfo: [
      { label: "籍贯", value: "广东东莞" },
      { label: "政治面貌", value: "中共党员" },
      { label: "外语水平", value: profileFacts.languageScore },
      { label: "邮箱", value: profileFacts.email }
    ]
  },
  en: {
    name: "Chengxu Gong",
    englishName: "龚城圩",
    tagline: "Multimodal Sensing · Spectral Intelligence · Cross-domain Modeling · Intelligent Detection Systems",
    focus:
      "My work connects spectral and dielectric signal processing, low-cost spectral reconstruction, cross-domain model transfer, and intelligent sensing system development.",
    summary:
      "I am a master's student at Northwest A&F University. My research focuses on multimodal sensing, generative spectral reconstruction, cross-cultivar and cross-instrument model transfer, and end-to-end intelligent detection systems.",
    location: "Yangling, Shaanxi, China",
    affiliation: "Northwest A&F University",
    degree: "Master's Student",
    languages: "CET-6 (500+)",
    researchKeywords: [
      "Multimodal Sensing",
      "Spectral Intelligence",
      "Dielectric and Microwave Sensing",
      "Cross-domain Transfer Learning",
      "Generative Spectral Reconstruction",
      "Intelligent Detection Systems"
    ],
    publicInfo: [
      { label: "Institution", value: "Northwest A&F University" },
      { label: "Location", value: "Yangling, Shaanxi, China" },
      { label: "English Proficiency", value: "CET-6 (500+)" },
      { label: "Email", value: profileFacts.email }
    ]
  }
} as const;

export function getProfile(locale: Locale) {
  const publicationCounts = getPublicationCounts();
  const labels =
    locale === "zh"
      ? ["论文成果", "第一作者论文", "授权专利", "软件著作权", "科研项目", "竞赛与荣誉"]
      : ["Publications", "First-author Papers", "Granted Patents", "Software Copyrights", "Research Projects", "Awards and Honors"];

  const values = [
    String(publicationCounts.total),
    String(publicationCounts.firstAuthor),
    String(patents.length),
    String(softwareCopyrights.length),
    String(projects.length),
    `${awards.length}+`
  ];

  return {
    ...profileContent[locale],
    email: profileFacts.email,
    links: [{ label: "ResearchGate", href: profileFacts.researchGate }],
    stats: labels.map((label, index) => ({ value: values[index], label }))
  };
}

export const profile = getProfile("zh");
