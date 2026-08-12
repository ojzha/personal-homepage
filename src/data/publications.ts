import type {
  Locale,
  LocalizedText,
  PublicationGroupKey,
  PublicationRoleKey,
  PublicationStatusKey,
  PublicationZoneKey
} from "./i18n";
import { localize, publicationGroupDescriptions, publicationGroupLabels } from "./i18n";

export type Publication = {
  id: string;
  title: LocalizedText;
  authors: string;
  year: string;
  venue: string;
  role: PublicationRoleKey;
  group: PublicationGroupKey;
  status?: PublicationStatusKey;
  impact?: string;
  zone?: PublicationZoneKey;
  doi?: string;
  tags: Record<Locale, string[]>;
  articleLanguage?: "zh";
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    id: "pub-pear-bruise-optical-properties",
    title: {
      zh: "Effects of bruising on the microstructural, physicochemical, and NIR optical properties of pear during storage",
      en: "Effects of bruising on the microstructural, physicochemical, and NIR optical properties of pear during storage"
    },
    authors:
      "Wenchuan Guo*, Chengxu Gong, Shuai Li, Kanghao Zhao, Youhua Bu, Mengjie Gao, and Weidong Pan",
    year: "2026",
    venue: "Postharvest Biology and Technology",
    role: "studentFirstAuthor",
    group: "firstAuthor",
    impact: "IF 7.3",
    zone: "casQ1Top",
    doi: "10.1016/j.postharvbio.2026.114522",
    tags: {
      zh: ["近红外光学", "微观结构", "复杂样本表征"],
      en: ["NIR Optics", "Microstructure", "Complex Sample Characterization"]
    },
    featured: true
  },
  {
    id: "pub-peach-dielectric-gan",
    title: {
      zh: "Peach quality prediction using dielectric spectroscopy and generative adversarial networks",
      en: "Peach quality prediction using dielectric spectroscopy and generative adversarial networks"
    },
    authors: "Chengxu Gong, Shuai Li, Mengke Cao, Youhua Bu, Shanghong Yang, and Wenchuan Guo*",
    year: "2026",
    venue: "Journal of Food Composition and Analysis",
    role: "firstAuthor",
    group: "firstAuthor",
    impact: "IF 5.3",
    zone: "casQ2Top",
    doi: "10.1016/j.jfca.2026.109040",
    tags: {
      zh: ["介电谱", "生成对抗网络", "品质预测"],
      en: ["Dielectric Spectroscopy", "Generative Adversarial Networks", "Quality Prediction"]
    },
    featured: true
  },
  {
    id: "pub-u-msacnet-pear-defect-segmentation",
    title: {
      zh: "U-MSACNet: GAN-augmented multiscale attention network for surface defect segmentation of postharvest 'Korla' fragrant pears",
      en: "U-MSACNet: GAN-augmented multiscale attention network for surface defect segmentation of postharvest 'Korla' fragrant pears"
    },
    authors: "Youhua Bu, Chengxu Gong, Jianing Luo, Shuai Li, Jixiong Zhang, and Wenchuan Guo*",
    year: "2026",
    venue: "Journal of Stored Products Research",
    role: "coFirstAuthor",
    group: "firstAuthor",
    impact: "IF 3.4",
    zone: "casQ2",
    doi: "10.1016/j.jspr.2026.103192",
    tags: {
      zh: ["缺陷分割", "多尺度注意力", "生成式增强"],
      en: ["Defect Segmentation", "Multiscale Attention", "Generative Augmentation"]
    },
    featured: true
  },
  {
    id: "pub-soil-organic-matter-transfer-learning",
    title: {
      zh: "Improving cross-domain spectroscopic measurement of soil organic matter using transfer learning for orchard soils in northern China",
      en: "Improving cross-domain spectroscopic measurement of soil organic matter using transfer learning for orchard soils in northern China"
    },
    authors: "Chengxu Gong, Heng Ma, Youhua Bu, Peng Miao, Bingnian Zhai, and Wenchuan Guo*",
    year: "2026",
    venue: "Engineering Research Express",
    role: "firstAuthor",
    group: "firstAuthor",
    status: "majorRevision",
    impact: "IF 1.8",
    tags: {
      zh: ["迁移学习", "光谱测量", "跨域建模"],
      en: ["Transfer Learning", "Spectroscopic Measurement", "Cross-domain Modeling"]
    },
    featured: true
  },
  {
    id: "pub-kiwifruit-cross-cultivar-instrument-transfer",
    title: {
      zh: "Deep transfer learning for spectral prediction of kiwifruit quality across cultivars and instruments",
      en: "Deep transfer learning for spectral prediction of kiwifruit quality across cultivars and instruments"
    },
    authors: "Youhua Bu, Chengxu Gong, Shuai Li, Yijie Li, and Wenchuan Guo*",
    year: "2026",
    venue: "Computers and Electronics in Agriculture",
    role: "secondAuthor",
    group: "secondAuthor",
    impact: "IF 10.3",
    zone: "casQ1Top",
    doi: "10.1016/j.compag.2026.112186",
    tags: {
      zh: ["深度迁移学习", "跨仪器预测", "光谱泛化"],
      en: ["Deep Transfer Learning", "Cross-instrument Prediction", "Spectral Generalization"]
    },
    featured: true
  },
  {
    id: "pub-melon-optical-quality-evaluation",
    title: {
      zh: "Maturation and cultivar effect on optical properties and qualities of melon tissues: Optical-based quality evaluation",
      en: "Maturation and cultivar effect on optical properties and qualities of melon tissues: Optical-based quality evaluation"
    },
    authors: "Shanghong Yang, Chengxu Gong, Qingji Tian, Youhua Bu, Zhuanwei Wang, and Wenchuan Guo*",
    year: "2025",
    venue: "Journal of Food Composition and Analysis",
    role: "secondAuthor",
    group: "secondAuthor",
    impact: "IF 5.3",
    zone: "casQ2Top",
    doi: "10.1016/j.jfca.2025.108104",
    tags: {
      zh: ["光学特性", "成熟度评价", "光谱感知"],
      en: ["Optical Properties", "Maturity Evaluation", "Spectral Sensing"]
    }
  },
  {
    id: "pub-grape-ssc-characteristic-wavelengths",
    title: {
      zh: "Detection of SSC in 'Shine Muscat' grapes using Vis/NIR and NIR spectra with characteristic wavelengths",
      en: "Detection of SSC in 'Shine Muscat' grapes using Vis/NIR and NIR spectra with characteristic wavelengths"
    },
    authors: "Shuai Li, Chengxu Gong, Youhua Bu, Hongping Liu, Xiangkai Guo, and Wenchuan Guo*",
    year: "2026",
    venue: "Spectrochimica Acta Part A: Molecular and Biomolecular Spectroscopy",
    role: "secondAuthor",
    group: "secondAuthor",
    impact: "IF 4.8",
    zone: "casQ2",
    doi: "10.1016/j.saa.2026.127865",
    tags: {
      zh: ["可见/近红外", "特征波长", "定量建模"],
      en: ["Vis/NIR", "Characteristic Wavelengths", "Quantitative Modeling"]
    }
  },
  {
    id: "pub-peach-storage-nir-properties",
    title: {
      zh: "Impact of internal quality evolution and cultivar differences on the NIR optical properties of peaches during storage",
      en: "Impact of internal quality evolution and cultivar differences on the NIR optical properties of peaches during storage"
    },
    authors: "Wenchuan Guo*, Shuai Li, Chengxu Gong, Youhua Bu, and Jingliang Cheng",
    year: "2026",
    venue: "Journal of Stored Products Research",
    role: "studentSecondAuthor",
    group: "secondAuthor",
    impact: "IF 3.4",
    zone: "casQ2",
    doi: "10.1016/j.jspr.2026.103101",
    tags: {
      zh: ["近红外光学", "储藏变化", "品种差异"],
      en: ["NIR Optics", "Storage Evolution", "Cultivar Differences"]
    }
  },
  {
    id: "pub-orchard-soil-organic-matter-vis-nir",
    title: {
      zh: "基于可见/近红外光谱的中国北方苹果园土壤有机质含量检测方法",
      en: "基于可见/近红外光谱的中国北方苹果园土壤有机质含量检测方法"
    },
    authors: "郭文川*, 马恒, 龚城圩, 林明壮, 补友华, 苗朋, 翟丙年",
    year: "2026",
    venue: "农业机械学报",
    role: "studentSecondAuthor",
    group: "secondAuthor",
    zone: "eiIndexed",
    doi: "10.6041/j.issn.1000-1298.2026.09.033",
    tags: {
      zh: ["可见/近红外", "复杂介质检测", "光谱建模"],
      en: ["Vis/NIR", "Complex-medium Sensing", "Spectral Modeling"]
    },
    articleLanguage: "zh"
  },
  {
    id: "pub-apple-watercore-microwave-fem",
    title: {
      zh: "Diameter-independent determination of apple watercore using microwave free-space and finite element methods",
      en: "Diameter-independent determination of apple watercore using microwave free-space and finite element methods"
    },
    authors: "Mengke Cao, Youhua Bu, Chengxu Gong, Yijie Li, Jiao Guo, and Wenchuan Guo*",
    year: "2025",
    venue: "Food Research International",
    role: "thirdAuthor",
    group: "collaborative",
    impact: "IF 8.8",
    zone: "casQ1Top",
    doi: "10.1016/j.foodres.2025.115868",
    tags: {
      zh: ["微波检测", "有限元方法", "介电测量"],
      en: ["Microwave Sensing", "Finite Element Methods", "Dielectric Measurement"]
    }
  },
  {
    id: "pub-watercore-storage-time-microwave",
    title: {
      zh: "Storage properties and time prediction of watercore apples based on L and S bands microwave data",
      en: "Storage properties and time prediction of watercore apples based on L and S bands microwave data"
    },
    authors: "Mengke Cao, Youhua Bu, Chengxu Gong, and Wenchuan Guo*",
    year: "2025",
    venue: "Postharvest Biology and Technology",
    role: "thirdAuthor",
    group: "collaborative",
    impact: "IF 7.3",
    zone: "casQ1Top",
    doi: "10.1016/j.postharvbio.2025.113748",
    tags: {
      zh: ["微波数据", "时间预测", "信号建模"],
      en: ["Microwave Data", "Storage-time Prediction", "Signal Modeling"]
    }
  },
  {
    id: "pub-kiwifruit-optical-simulation-multi-quality",
    title: {
      zh: "Optical transmission simulation-guided optimization of Vis/NIR detection and simultaneous multi-quality prediction for post-ripening kiwifruit",
      en: "Optical transmission simulation-guided optimization of Vis/NIR detection and simultaneous multi-quality prediction for post-ripening kiwifruit"
    },
    authors: "Youhua Bu, Shuai Li, Chengxu Gong, and Wenchuan Guo*",
    year: "2026",
    venue: "Food Control",
    role: "thirdAuthor",
    group: "collaborative",
    impact: "IF 7",
    zone: "casQ1Top",
    doi: "10.1016/j.foodcont.2026.112487",
    tags: {
      zh: ["光学仿真", "可见/近红外", "多指标预测"],
      en: ["Optical Simulation", "Vis/NIR", "Multi-quality Prediction"]
    }
  },
  {
    id: "pub-pear-self-supervised-multitask",
    title: {
      zh: "Dual-channel self-supervised multi-task learning for spectral detection of soluble solids content and firmness in 'Korla' fragrant pears",
      en: "Dual-channel self-supervised multi-task learning for spectral detection of soluble solids content and firmness in 'Korla' fragrant pears"
    },
    authors: "Youhua Bu, Jianing Luo, Chengxu Gong, Jixiong Zhang, Bin Wu, Dong Wang, and Wenchuan Guo*",
    year: "2026",
    venue: "Spectrochimica Acta Part A: Molecular and Biomolecular Spectroscopy",
    role: "thirdAuthor",
    group: "collaborative",
    impact: "IF 4.8",
    zone: "casQ2",
    doi: "10.1016/j.saa.2026.127684",
    tags: {
      zh: ["自监督学习", "多任务学习", "光谱检测"],
      en: ["Self-supervised Learning", "Multi-task Learning", "Spectral Sensing"]
    }
  },
  {
    id: "pub-kiwifruit-bruise-induced-ripening",
    title: {
      zh: "Physicochemical, microstructural, and Vis/NIR optical properties of kiwifruit during bruise-induced ripening",
      en: "Physicochemical, microstructural, and Vis/NIR optical properties of kiwifruit during bruise-induced ripening"
    },
    authors: "Youhua Bu, Shuai Li, Mingzhuang Lin, Chengxu Gong, Rui Wang, and Wenchuan Guo*",
    year: "2026",
    venue: "Postharvest Biology and Technology",
    role: "fourthAuthor",
    group: "collaborative",
    impact: "IF 7.3",
    zone: "casQ1Top",
    doi: "10.1016/j.postharvbio.2026.114183",
    tags: {
      zh: ["可见/近红外光学", "微观结构", "品质变化"],
      en: ["Vis/NIR Optics", "Microstructure", "Quality Evolution"]
    }
  }
];

const publicationGroupOrder: PublicationGroupKey[] = ["firstAuthor", "secondAuthor", "collaborative"];

export function getPublicationGroups(locale: Locale) {
  return publicationGroupOrder.map((group) => ({
    key: group,
    title: publicationGroupLabels[locale][group],
    description: publicationGroupDescriptions[locale][group],
    items: publications.filter((publication) => publication.group === group)
  }));
}

export function getPublicationCounts() {
  return {
    total: publications.length,
    firstAuthor: publications.filter((publication) => publication.group === "firstAuthor").length,
    secondAuthor: publications.filter((publication) => publication.group === "secondAuthor").length,
    collaborative: publications.filter((publication) => publication.group === "collaborative").length
  };
}

export function getPublicationTitle(publication: Publication, locale: Locale) {
  return localize(publication.title, locale);
}
