import type { Locale, LocalizedText } from "./i18n";

export type Project = {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  role: LocalizedText;
  description: LocalizedText;
  methods: Record<Locale, string[]>;
  outputs: Record<Locale, string[]>;
  tags: Record<Locale, string[]>;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "project-apple-spectral-transfer-app",
    title: {
      zh: "基于可见/近红外光谱的苹果内部品质检测模型迁移与传递研究及 App 开发",
      en: "Cross-cultivar transfer of Vis/NIR models for apple internal quality assessment and app development"
    },
    subtitle: {
      zh: "硕士课题；陕西省重点研发计划项目：人工智能驱动的手机穿戴式苹果糖度和硬度无损检测仪的研发（2025CY-YBXM-642）",
      en: "Master's research; Shaanxi Key R&D Program, AI-driven smartphone-mounted system for nondestructive soluble-solids and firmness assessment (2025CY-YBXM-642)"
    },
    role: {
      zh: "核心研究与系统开发",
      en: "Core Researcher and System Developer"
    },
    description: {
      zh: "围绕低成本光谱采集、全光谱重建、跨品种模型迁移与移动端检测系统构建，形成从数据采集到品质预测的完整智能检测流程。",
      en: "Developing an end-to-end sensing workflow that connects low-cost spectral acquisition, full-spectrum reconstruction, cross-cultivar model transfer, and mobile quality prediction."
    },
    methods: {
      zh: [
        "构建基于生成式深度学习的多光谱到全光谱超分辨重建体系。",
        "建立融合域对抗神经网络的跨品种模型迁移框架。",
        "开发移动端检测 App，串联多光谱采集、光谱生成与品质预测。"
      ],
      en: [
        "Built a generative deep-learning pipeline for multispectral-to-hyperspectral super-resolution reconstruction.",
        "Developed a cross-cultivar transfer framework based on domain-adversarial neural networks.",
        "Developed a mobile app integrating multispectral acquisition, spectral generation, and quality prediction."
      ]
    },
    outputs: {
      zh: [
        "支撑陕西省重点研发计划项目（2025CY-YBXM-642）",
        "形成光谱重建、迁移学习和移动端系统开发经验"
      ],
      en: [
        "Supported Shaanxi Key R&D Program project 2025CY-YBXM-642.",
        "Established an integrated workflow for spectral reconstruction, transfer learning, and mobile deployment."
      ]
    },
    tags: {
      zh: ["光谱重建", "域自适应", "移动端检测"],
      en: ["Spectral Reconstruction", "Domain Adaptation", "Mobile Sensing"]
    },
    featured: true
  },
  {
    id: "project-soil-organic-matter-instrument",
    title: {
      zh: "土壤有机质含量原位快速检测关键技术及检测仪研发",
      en: "Rapid in-situ sensing and instrument development for soil organic matter assessment"
    },
    subtitle: {
      zh: "西安市科技计划项目，2024JH-NYYB-0200",
      en: "Xi'an Science and Technology Program, 2024JH-NYYB-0200"
    },
    role: {
      zh: "计划书撰写、模型构建与仪器验证参与",
      en: "Proposal Development, Modeling, and Instrument Validation"
    },
    description: {
      zh: "面向复杂介质成分检测，开展光学特性分析、深度学习建模和便携式原位检测仪方案设计与测试验证。",
      en: "Investigating optical characterization and deep-learning models for complex media, together with the design and validation of a portable in-situ sensing instrument."
    },
    methods: {
      zh: [
        "负责项目计划书撰写，梳理检测方案和技术路线。",
        "分析土壤光学特性与有机质含量之间的关系。",
        "构建基于深度学习的土壤有机质定量预测模型。"
      ],
      en: [
        "Prepared the project proposal and organized the sensing strategy and technical roadmap.",
        "Analyzed relationships between optical properties and organic matter concentration.",
        "Built deep-learning models for quantitative prediction."
      ]
    },
    outputs: {
      zh: ["SCI 论文 1 篇（第一作者，在审）", "EI 论文 1 篇（第二作者）", "授权实用新型专利 2 项"],
      en: [
        "One first-author SCI manuscript under review.",
        "One second-author EI-indexed publication.",
        "Two granted utility model patents."
      ]
    },
    tags: {
      zh: ["复杂介质检测", "光谱建模", "便携式仪器"],
      en: ["Complex-medium Sensing", "Spectral Modeling", "Portable Instrumentation"]
    },
    featured: true
  },
  {
    id: "project-melon-portable-sensing",
    title: {
      zh: "甜瓜糖度和成熟度无损检测关键技术及便携式检测仪研发",
      en: "Portable nondestructive sensing of soluble solids and maturity in melon"
    },
    subtitle: {
      zh: "陕西省重点研发计划项目，2023-YBNY-07",
      en: "Shaanxi Key R&D Program, 2023-YBNY-07"
    },
    role: {
      zh: "数据处理与光谱建模参与",
      en: "Data Processing and Spectral Modeling"
    },
    description: {
      zh: "基于光学特性和可见/近红外光谱，构建成熟等级分类与内部品质预测模型，服务于便携式检测仪研发。",
      en: "Developed maturity classification and internal-quality prediction models from optical properties and Vis/NIR spectra to support a portable sensing instrument."
    },
    methods: {
      zh: [
        "协助完成样本数据采集与处理。",
        "基于光学特性和 Vis/NIR 光谱建立分类与预测模型。",
        "参与成熟度、糖度等指标的模型评估与结果分析。"
      ],
      en: [
        "Supported sample acquisition and data preprocessing.",
        "Built classification and regression models using optical properties and Vis/NIR spectra.",
        "Evaluated model performance for maturity and soluble-solids prediction."
      ]
    },
    outputs: {
      zh: ["SCI 论文 1 篇（第二作者）", "项目已结题"],
      en: ["One second-author SCI publication.", "Project completed."]
    },
    tags: {
      zh: ["光学特性", "Vis/NIR", "分类预测"],
      en: ["Optical Properties", "Vis/NIR", "Classification and Prediction"]
    },
    featured: true
  },
  {
    id: "project-apple-watercore-detection-system",
    title: {
      zh: "基于自由空间法与深度学习的苹果水心程度无损检测系统",
      en: "Nondestructive apple watercore assessment using free-space microwave sensing and deep learning"
    },
    subtitle: {
      zh: "本科毕业课题",
      en: "Undergraduate Thesis"
    },
    role: {
      zh: "独立完成系统设计与开发",
      en: "Independent System Design and Development"
    },
    description: {
      zh: "完成介电谱采集流程、数据集构建、模型对比与 PyQt5 桌面系统开发，体现从实验平台到软件系统的完整实现能力。",
      en: "Implemented the full workflow from dielectric-spectrum acquisition and dataset construction to model comparison and a PyQt5 desktop application."
    },
    methods: {
      zh: [
        "设计自由空间法介电特性测量流程，搭建数据采集平台。",
        "构建水心程度等级数据集，对比 PLS-DA、SVC、随机森林和 1D-CNN。",
        "基于 PyQt5 开发交互式检测系统。"
      ],
      en: [
        "Designed a free-space dielectric measurement workflow and built the acquisition platform.",
        "Constructed a graded watercore dataset and compared PLS-DA, SVC, random forest, and 1D-CNN models.",
        "Developed an interactive detection application with PyQt5."
      ]
    },
    outputs: {
      zh: ["软件著作权 1 项"],
      en: ["One registered software copyright."]
    },
    tags: {
      zh: ["介电谱", "1D-CNN", "PyQt5"],
      en: ["Dielectric Spectroscopy", "1D-CNN", "PyQt5"]
    },
    featured: true
  },
  {
    id: "project-railway-dropper-defect-detection",
    title: {
      zh: "高铁接触网吊弦缺陷检测系统设计与实现",
      en: "Defect detection system for high-speed railway catenary droppers"
    },
    subtitle: {
      zh: "陕西省大学生科创项目",
      en: "Shaanxi Undergraduate Innovation Project"
    },
    role: {
      zh: "独立完成模型训练与软件开发",
      en: "Independent Model Training and Software Development"
    },
    description: {
      zh: "基于 YOLO 系列目标检测模型，实现吊弦正常、扭曲、断裂和异物等类别的自动识别、定位与可视化。",
      en: "Built a YOLO-based computer-vision system to identify, localize, and visualize normal, twisted, broken, and foreign-object conditions in catenary droppers."
    },
    methods: {
      zh: [
        "完成目标检测数据处理、模型训练与性能评估。",
        "开发配套检测软件，实现识别、定位和结果可视化。",
        "将视觉检测方法扩展到工业运维场景。"
      ],
      en: [
        "Completed dataset processing, object-detector training, and performance evaluation.",
        "Developed companion software for recognition, localization, and result visualization.",
        "Extended computer-vision methods to an industrial inspection scenario."
      ]
    },
    outputs: {
      zh: ["软件著作权 1 项", "项目优秀结题"],
      en: ["One registered software copyright.", "Project rated excellent at completion."]
    },
    tags: {
      zh: ["计算机视觉", "YOLO", "工业检测"],
      en: ["Computer Vision", "YOLO", "Industrial Inspection"]
    },
    featured: true
  }
];
