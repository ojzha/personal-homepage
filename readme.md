# personal-homepage

这个文件夹用于维护龚城圩的中英文个人学术主页静态站点。

## 用途

- 展示个人研究方向、论文、项目、专利、软著、竞赛、荣誉与技能。
- 中文版使用现有根路径，英文版使用 `/en/` 路径。
- 主要事实内容来自 `../简历制作/GCX简历草稿.md`，中英文页面共用同一份结构化数据。

## 运行方式

```powershell
npm install
npm run dev
```

构建并校验静态页面：

```powershell
npm run build
npm run check:i18n
npm run preview
```

## 双语路由

| 页面 | 中文 | 英文 |
| --- | --- | --- |
| 首页 | `/` | `/en/` |
| 论文 | `/publications/` | `/en/publications/` |
| 项目 | `/projects/` | `/en/projects/` |
| 荣誉 | `/honors/` | `/en/honors/` |
| CV | `/cv/` | `/en/cv/` |

语言切换会进入当前页面的对应语言版本。中文是默认入口，站点不根据浏览器语言自动跳转。

## 内容维护

- 固定路由、导航和论文术语位于 `src/data/i18n.ts`。
- 论文、项目、证书、专利、软著和奖项位于 `src/data/`，每条记录使用稳定 `id`，中英文文本保存在同一记录中。
- 更新事实信息时不要创建独立的英文成果数组，避免 DOI、年份、状态和数量不一致。
- 中文页面位于 `src/pages/`，对应英文页面位于 `src/pages/en/`。
- 所有站内链接必须使用 `withBase()`，不要手写 `/personal-homepage/` 前缀。
- 当前中英文 CV 按钮都指向 `public/files/GCX_resume_v6.pdf`；英文按钮必须标注 `Download CV (Chinese PDF)`。
- 后续英文 PDF 使用独立文件 `public/files/Chengxu_Gong_CV_EN.pdf`，不要覆盖中文 PDF。

`npm run check:i18n` 会检查 10 个路由、共享数据数量、稳定 ID、GitHub Pages base、canonical/hreflang、sitemap 和英文 CV 下载链接。

## 发布到 GitHub Pages

项目通过 `.github/workflows/deploy.yml` 自动构建、校验并发布。推送到 `main` 后，GitHub Actions 会执行：

1. `npm ci`
2. `npm run build`
3. `npm run check:i18n`
4. 上传并发布 `dist/`

公网地址：

```text
https://ojzha.github.io/personal-homepage/
```

英文入口：

```text
https://ojzha.github.io/personal-homepage/en/
```
