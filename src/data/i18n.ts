export type Locale = "zh" | "en";

export type LocalizedText = Record<Locale, string>;

export type PageKey = "home" | "publications" | "projects" | "honors" | "cv";

export type PublicationRoleKey =
  | "firstAuthor"
  | "coFirstAuthor"
  | "studentFirstAuthor"
  | "secondAuthor"
  | "studentSecondAuthor"
  | "thirdAuthor"
  | "fourthAuthor";

export type PublicationGroupKey = "firstAuthor" | "secondAuthor" | "collaborative";

export type PublicationStatusKey = "underReview";

export type PublicationZoneKey = "casQ1Top" | "casQ2Top" | "casQ2" | "eiIndexed";

export const routes: Record<PageKey, Record<Locale, string>> = {
  home: { zh: "/", en: "/en/" },
  publications: { zh: "/publications/", en: "/en/publications/" },
  projects: { zh: "/projects/", en: "/en/projects/" },
  honors: { zh: "/honors/", en: "/en/honors/" },
  cv: { zh: "/cv/", en: "/en/cv/" }
};

export const pageOrder: PageKey[] = ["home", "publications", "projects", "honors", "cv"];

export const pageLabels: Record<Locale, Record<PageKey, string>> = {
  zh: {
    home: "首页",
    publications: "论文成果",
    projects: "科研项目",
    honors: "荣誉证书",
    cv: "个人简历"
  },
  en: {
    home: "Home",
    publications: "Publications",
    projects: "Research Projects",
    honors: "Honors",
    cv: "CV"
  }
};

export const publicationRoleLabels: Record<Locale, Record<PublicationRoleKey, string>> = {
  zh: {
    firstAuthor: "第一作者",
    coFirstAuthor: "共同第一作者",
    studentFirstAuthor: "学生第一作者",
    secondAuthor: "第二作者",
    studentSecondAuthor: "学生第二作者",
    thirdAuthor: "第三作者",
    fourthAuthor: "第四作者"
  },
  en: {
    firstAuthor: "First Author",
    coFirstAuthor: "Co-first Author",
    studentFirstAuthor: "Student First Author",
    secondAuthor: "Second Author",
    studentSecondAuthor: "Student Second Author",
    thirdAuthor: "Third Author",
    fourthAuthor: "Fourth Author"
  }
};

export const publicationGroupLabels: Record<Locale, Record<PublicationGroupKey, string>> = {
  zh: {
    firstAuthor: "第一作者论文",
    secondAuthor: "第二作者论文",
    collaborative: "合作论文"
  },
  en: {
    firstAuthor: "First-author Publications",
    secondAuthor: "Second-author Publications",
    collaborative: "Collaborative Publications"
  }
};

export const publicationGroupDescriptions: Record<Locale, Record<PublicationGroupKey, string>> = {
  zh: {
    firstAuthor: "包括第一作者、共同第一作者和学生第一作者论文。",
    secondAuthor: "包含第二作者及导师一作下的学生第二作者论文。",
    collaborative: "围绕光谱检测、介电/微波测量、智能建模等方向的合作成果。"
  },
  en: {
    firstAuthor: "Includes first-author, co-first-author, and student-first-author publications.",
    secondAuthor: "Includes second-author and student-second-author publications.",
    collaborative: "Collaborative work in spectroscopy, dielectric and microwave sensing, and intelligent modeling."
  }
};

export const publicationStatusLabels: Record<Locale, Record<PublicationStatusKey, string>> = {
  zh: { underReview: "在审" },
  en: { underReview: "Under Review" }
};

export const publicationZoneLabels: Record<Locale, Record<PublicationZoneKey, string>> = {
  zh: {
    casQ1Top: "中科院 1 区 TOP",
    casQ2Top: "中科院 2 区 TOP",
    casQ2: "中科院 2 区",
    eiIndexed: "EI 收录"
  },
  en: {
    casQ1Top: "CAS Q1 TOP",
    casQ2Top: "CAS Q2 TOP",
    casQ2: "CAS Q2",
    eiIndexed: "EI Indexed"
  }
};

export function localize<T>(value: Record<Locale, T>, locale: Locale): T {
  return value[locale];
}

export function getRoute(pageKey: PageKey, locale: Locale): string {
  return routes[pageKey][locale];
}

export function getNavigation(locale: Locale) {
  return pageOrder.map((pageKey) => ({
    pageKey,
    href: getRoute(pageKey, locale),
    label: pageLabels[locale][pageKey]
  }));
}
