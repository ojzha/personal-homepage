import type { ImageMetadata } from "astro";

import electronicDesign2025 from "../assets/images/certificates/graduate-electronic-design-2025-northwest-second.webp";
import icpc2023 from "../assets/images/certificates/icpc-asia-nanjing-2023-silver.webp";
import mathModeling2024 from "../assets/images/certificates/graduate-math-modeling-2024-third.webp";
import mathModeling2025 from "../assets/images/certificates/graduate-math-modeling-2025-third.webp";
import raicomAi2025 from "../assets/images/certificates/raicom-ai-2025-first.webp";
import raicomProgramming2025 from "../assets/images/certificates/raicom-programming-2025-second.webp";

export type Certificate = {
  title: string;
  year: string;
  level: string;
  category: string;
  image: ImageMetadata;
  alt: string;
  note?: string;
};

export const certificates: Certificate[] = [
  {
    title: "睿抗机器人开发者大赛智海人工智能算法应用赛项",
    year: "2025",
    level: "全国总决赛一等奖",
    category: "人工智能算法应用",
    image: raicomAi2025,
    alt: "2025 年睿抗机器人开发者大赛智海人工智能算法应用赛项全国总决赛一等奖证书"
  },
  {
    title: "睿抗机器人开发者大赛编程技能赛项",
    year: "2025",
    level: "全国总决赛二等奖",
    category: "编程能力",
    image: raicomProgramming2025,
    alt: "2025 年睿抗机器人开发者大赛编程技能赛项全国总决赛二等奖证书"
  },
  {
    title: "中国研究生电子设计竞赛西北赛区",
    year: "2025",
    level: "团队二等奖",
    category: "电子设计与检测仪器",
    image: electronicDesign2025,
    alt: "2025 年中国研究生电子设计竞赛西北赛区团队二等奖证书"
  },
  {
    title: "中国研究生数学建模竞赛",
    year: "2025",
    level: "国家级三等奖",
    category: "数学建模",
    image: mathModeling2025,
    alt: "2025 年中国研究生数学建模竞赛三等奖证书"
  },
  {
    title: "中国研究生数学建模竞赛",
    year: "2024",
    level: "国家级三等奖",
    category: "数学建模",
    image: mathModeling2024,
    alt: "2024 年中国研究生数学建模竞赛三等奖证书"
  },
  {
    title: "ICPC Asia Nanjing Regional Contest",
    year: "2023",
    level: "Silver Medal",
    category: "算法竞赛",
    image: icpc2023,
    alt: "2023 年 ICPC 亚洲南京区域赛银牌证书"
  }
];
