import type { ImageMetadata } from "astro";
import type { LocalizedText } from "./i18n";

import electronicDesign2025 from "../assets/images/certificates/graduate-electronic-design-2025-northwest-second.webp";
import icpc2023 from "../assets/images/certificates/icpc-asia-nanjing-2023-silver.webp";
import mathModeling2024 from "../assets/images/certificates/graduate-math-modeling-2024-third.webp";
import mathModeling2025 from "../assets/images/certificates/graduate-math-modeling-2025-third.webp";
import raicomAi2025 from "../assets/images/certificates/raicom-ai-2025-first.webp";
import raicomProgramming2025 from "../assets/images/certificates/raicom-programming-2025-second.webp";

export type Certificate = {
  id: string;
  title: LocalizedText;
  year: string;
  level: LocalizedText;
  category: LocalizedText;
  image: ImageMetadata;
  alt: LocalizedText;
  note?: LocalizedText;
};

export const certificates: Certificate[] = [
  {
    id: "certificate-raicom-ai-2025-first",
    title: {
      zh: "睿抗机器人开发者大赛智海人工智能算法应用赛项",
      en: "RAICOM AI Algorithm Application Competition"
    },
    year: "2025",
    level: { zh: "全国总决赛一等奖", en: "First Prize, National Final" },
    category: { zh: "人工智能算法应用", en: "AI Algorithm Application" },
    image: raicomAi2025,
    alt: {
      zh: "2025 年睿抗机器人开发者大赛智海人工智能算法应用赛项全国总决赛一等奖证书",
      en: "Certificate for First Prize in the 2025 RAICOM AI Algorithm Application national final"
    }
  },
  {
    id: "certificate-raicom-programming-2025-second",
    title: {
      zh: "睿抗机器人开发者大赛编程技能赛项",
      en: "RAICOM Programming Skills Competition"
    },
    year: "2025",
    level: { zh: "全国总决赛二等奖", en: "Second Prize, National Final" },
    category: { zh: "编程能力", en: "Programming" },
    image: raicomProgramming2025,
    alt: {
      zh: "2025 年睿抗机器人开发者大赛编程技能赛项全国总决赛二等奖证书",
      en: "Certificate for Second Prize in the 2025 RAICOM Programming Skills national final"
    }
  },
  {
    id: "certificate-electronic-design-2025-northwest-second",
    title: {
      zh: "中国研究生电子设计竞赛西北赛区",
      en: "China Graduate Electronics Design Contest, Northwest Division"
    },
    year: "2025",
    level: { zh: "团队二等奖", en: "Team Second Prize" },
    category: { zh: "电子设计与检测仪器", en: "Electronic Design and Instrumentation" },
    image: electronicDesign2025,
    alt: {
      zh: "2025 年中国研究生电子设计竞赛西北赛区团队二等奖证书",
      en: "Certificate for Team Second Prize in the 2025 China Graduate Electronics Design Contest Northwest Division"
    }
  },
  {
    id: "certificate-math-modeling-2025-third",
    title: {
      zh: "中国研究生数学建模竞赛",
      en: "China Graduate Mathematical Contest in Modeling"
    },
    year: "2025",
    level: { zh: "国家级三等奖", en: "National Third Prize" },
    category: { zh: "数学建模", en: "Mathematical Modeling" },
    image: mathModeling2025,
    alt: {
      zh: "2025 年中国研究生数学建模竞赛三等奖证书",
      en: "Certificate for Third Prize in the 2025 China Graduate Mathematical Contest in Modeling"
    }
  },
  {
    id: "certificate-math-modeling-2024-third",
    title: {
      zh: "中国研究生数学建模竞赛",
      en: "China Graduate Mathematical Contest in Modeling"
    },
    year: "2024",
    level: { zh: "国家级三等奖", en: "National Third Prize" },
    category: { zh: "数学建模", en: "Mathematical Modeling" },
    image: mathModeling2024,
    alt: {
      zh: "2024 年中国研究生数学建模竞赛三等奖证书",
      en: "Certificate for Third Prize in the 2024 China Graduate Mathematical Contest in Modeling"
    }
  },
  {
    id: "certificate-icpc-nanjing-2023-silver",
    title: { zh: "ICPC Asia Nanjing Regional Contest", en: "ICPC Asia Nanjing Regional Contest" },
    year: "2023",
    level: { zh: "Silver Medal", en: "Silver Medal" },
    category: { zh: "算法竞赛", en: "Algorithm Competition" },
    image: icpc2023,
    alt: {
      zh: "2023 年 ICPC 亚洲南京区域赛银牌证书",
      en: "Silver Medal certificate from the 2023 ICPC Asia Nanjing Regional Contest"
    }
  }
];
