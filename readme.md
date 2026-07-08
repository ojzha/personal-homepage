# personal-homepage

这个文件夹用于维护 GCX 的个人学术主页与博客静态站点。

## 用途

- 展示个人研究方向、论文、项目、专利、软著、竞赛、荣誉与技能。
- 作为后续博客入口，用于记录论文阅读、科研笔记、博士申请整理和技术实践。
- 第一版内容主要来自 `../简历制作/GCX简历草稿.md`。

## 运行方式

```powershell
npm install
npm run dev
```

构建静态页面：

```powershell
npm run build
npm run preview
```

## 内容维护

- 论文、项目、专利、软著、奖项等结构化内容位于 `src/data/`。
- 页面位于 `src/pages/`。
- 博客文章位于 `src/pages/blog/`，每篇文章使用 Markdown 编写。
- 公开版 PDF 简历后续可放入 `public/`，再在 `src/pages/cv.astro` 中启用下载链接。
