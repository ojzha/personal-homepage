export type Publication = {
  title: string;
  authors: string;
  year: string;
  venue: string;
  role: "第一作者" | "共同第一作者" | "学生第一作者" | "第二作者" | "学生第二作者" | "第三作者" | "第四作者";
  group: "第一作者论文" | "第二作者论文" | "合作论文";
  status?: string;
  impact?: string;
  zone?: string;
  doi?: string;
  tags: string[];
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    title:
      "Effects of bruising on the microstructural, physicochemical, and NIR optical properties of pear during storage",
    authors:
      "Wenchuan Guo*, Chengxu Gong, Shuai Li, Kanghao Zhao, Youhua Bu, Mengjie Gao, and Weidong Pan",
    year: "2026",
    venue: "Postharvest Biology and Technology",
    role: "学生第一作者",
    group: "第一作者论文",
    impact: "IF 7.3",
    zone: "中科院 1 区 TOP",
    doi: "10.1016/j.postharvbio.2026.114522",
    tags: ["近红外光学", "微观结构", "复杂样本表征"],
    featured: true
  },
  {
    title:
      "Peach quality prediction using dielectric spectroscopy and generative adversarial networks",
    authors:
      "Chengxu Gong, Shuai Li, Mengke Cao, Youhua Bu, Shanghong Yang, and Wenchuan Guo*",
    year: "2026",
    venue: "Journal of Food Composition and Analysis",
    role: "第一作者",
    group: "第一作者论文",
    impact: "IF 5.3",
    zone: "中科院 2 区 TOP",
    doi: "10.1016/j.jfca.2026.109040",
    tags: ["介电谱", "生成对抗网络", "品质预测"],
    featured: true
  },
  {
    title:
      "U-MSACNet: GAN-augmented multiscale attention network for surface defect segmentation of postharvest 'Korla' fragrant pears",
    authors:
      "Youhua Bu, Chengxu Gong, Jianing Luo, Shuai Li, Jixiong Zhang, and Wenchuan Guo*",
    year: "2026",
    venue: "Journal of Stored Products Research",
    role: "共同第一作者",
    group: "第一作者论文",
    status: "已录用",
    impact: "IF 3.4",
    zone: "中科院 2 区",
    tags: ["缺陷分割", "多尺度注意力", "生成式增强"],
    featured: true
  },
  {
    title:
      "Improving cross-domain spectroscopic measurement of soil organic matter using transfer learning for orchard soils in northern China",
    authors:
      "Chengxu Gong, Heng Ma, Youhua Bu, Peng Miao, Bingnian Zhai, and Wenchuan Guo*",
    year: "2026",
    venue: "Engineering Research Express",
    role: "第一作者",
    group: "第一作者论文",
    status: "在审",
    impact: "IF 1.8",
    tags: ["迁移学习", "光谱测量", "跨域建模"],
    featured: true
  },
  {
    title:
      "Deep transfer learning for spectral prediction of kiwifruit quality across cultivars and instruments",
    authors: "Youhua Bu, Chengxu Gong, Shuai Li, Yijie Li, and Wenchuan Guo*",
    year: "2026",
    venue: "Computers and Electronics in Agriculture",
    role: "第二作者",
    group: "第二作者论文",
    impact: "IF 10.3",
    zone: "中科院 1 区 TOP",
    doi: "10.1016/j.compag.2026.112186",
    tags: ["深度迁移学习", "跨仪器预测", "光谱泛化"],
    featured: true
  },
  {
    title:
      "Maturation and cultivar effect on optical properties and qualities of melon tissues: Optical-based quality evaluation",
    authors:
      "Shanghong Yang, Chengxu Gong, Qingji Tian, Youhua Bu, Zhuanwei Wang, and Wenchuan Guo*",
    year: "2025",
    venue: "Journal of Food Composition and Analysis",
    role: "第二作者",
    group: "第二作者论文",
    impact: "IF 5.3",
    zone: "中科院 2 区 TOP",
    doi: "10.1016/j.jfca.2025.108104",
    tags: ["光学特性", "成熟度评价", "光谱感知"]
  },
  {
    title:
      "Detection of SSC in 'Shine Muscat' grapes using Vis/NIR and NIR spectra with characteristic wavelengths",
    authors:
      "Shuai Li, Chengxu Gong, Youhua Bu, Hongping Liu, Xiangkai Guo, and Wenchuan Guo*",
    year: "2026",
    venue: "Spectrochimica Acta Part A: Molecular and Biomolecular Spectroscopy",
    role: "第二作者",
    group: "第二作者论文",
    impact: "IF 4.8",
    zone: "中科院 2 区",
    doi: "10.1016/j.saa.2026.127865",
    tags: ["可见/近红外", "特征波长", "定量建模"]
  },
  {
    title:
      "Impact of internal quality evolution and cultivar differences on the NIR optical properties of peaches during storage",
    authors: "Wenchuan Guo*, Shuai Li, Chengxu Gong, Youhua Bu, and Jingliang Cheng",
    year: "2026",
    venue: "Journal of Stored Products Research",
    role: "学生第二作者",
    group: "第二作者论文",
    impact: "IF 3.4",
    zone: "中科院 2 区",
    doi: "10.1016/j.jspr.2026.103101",
    tags: ["近红外光学", "储藏变化", "品种差异"]
  },
  {
    title:
      "基于可见/近红外光谱的中国北方苹果园土壤有机质含量检测方法",
    authors: "郭文川*, 马恒, 龚城圩, 林明壮, 补友华, 苗朋, 翟丙年",
    year: "2026",
    venue: "农业机械学报",
    role: "学生第二作者",
    group: "第二作者论文",
    zone: "EI 收录",
    doi: "10.6041/j.issn.1000-1298.2026.09.033",
    tags: ["可见/近红外", "复杂介质检测", "光谱建模"]
  },
  {
    title:
      "Diameter-independent determination of apple watercore using microwave free-space and finite element methods",
    authors:
      "Mengke Cao, Youhua Bu, Chengxu Gong, Yijie Li, Jiao Guo, and Wenchuan Guo*",
    year: "2025",
    venue: "Food Research International",
    role: "第三作者",
    group: "合作论文",
    impact: "IF 8.8",
    zone: "中科院 1 区 TOP",
    doi: "10.1016/j.foodres.2025.115868",
    tags: ["微波检测", "有限元方法", "介电测量"]
  },
  {
    title:
      "Storage properties and time prediction of watercore apples based on L and S bands microwave data",
    authors: "Mengke Cao, Youhua Bu, Chengxu Gong, and Wenchuan Guo*",
    year: "2025",
    venue: "Postharvest Biology and Technology",
    role: "第三作者",
    group: "合作论文",
    impact: "IF 7.3",
    zone: "中科院 1 区 TOP",
    doi: "10.1016/j.postharvbio.2025.113748",
    tags: ["微波数据", "时间预测", "信号建模"]
  },
  {
    title:
      "Optical transmission simulation-guided optimization of Vis/NIR detection and simultaneous multi-quality prediction for post-ripening kiwifruit",
    authors: "Youhua Bu, Shuai Li, Chengxu Gong, and Wenchuan Guo*",
    year: "2026",
    venue: "Food Control",
    role: "第三作者",
    group: "合作论文",
    impact: "IF 7",
    zone: "中科院 1 区 TOP",
    doi: "10.1016/j.foodcont.2026.112487",
    tags: ["光学仿真", "可见/近红外", "多指标预测"]
  },
  {
    title:
      "Dual-channel self-supervised multi-task learning for spectral detection of soluble solids content and firmness in 'Korla' fragrant pears",
    authors:
      "Youhua Bu, Jianing Luo, Chengxu Gong, Jixiong Zhang, Bin Wu, Dong Wang, and Wenchuan Guo*",
    year: "2026",
    venue: "Spectrochimica Acta Part A: Molecular and Biomolecular Spectroscopy",
    role: "第三作者",
    group: "合作论文",
    impact: "IF 4.8",
    zone: "中科院 2 区",
    doi: "10.1016/j.saa.2026.127684",
    tags: ["自监督学习", "多任务学习", "光谱检测"]
  },
  {
    title:
      "Physicochemical, microstructural, and Vis/NIR optical properties of kiwifruit during bruise-induced ripening",
    authors: "Youhua Bu, Shuai Li, Mingzhuang Lin, Chengxu Gong, Rui Wang, and Wenchuan Guo*",
    year: "2026",
    venue: "Postharvest Biology and Technology",
    role: "第四作者",
    group: "合作论文",
    impact: "IF 7.3",
    zone: "中科院 1 区 TOP",
    doi: "10.1016/j.postharvbio.2026.114183",
    tags: ["可见/近红外光学", "微观结构", "品质变化"]
  }
];

export const publicationGroups = [
  {
    title: "第一作者论文",
    description: "包括第一作者、共同第一作者和学生第一作者论文。",
    items: publications.filter((publication) => publication.group === "第一作者论文")
  },
  {
    title: "第二作者论文",
    description: "包含第二作者及导师一作下的学生第二作者论文。",
    items: publications.filter((publication) => publication.group === "第二作者论文")
  },
  {
    title: "合作论文",
    description: "围绕光谱检测、介电/微波测量、智能建模等方向的合作成果。",
    items: publications.filter((publication) => publication.group === "合作论文")
  }
];
