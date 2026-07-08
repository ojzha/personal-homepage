# personal-homepage

这个文件夹用于维护 GCX 的个人学术主页与博客静态站点。

## 用途

- 展示个人研究方向、论文、项目、专利、软著、竞赛、荣誉与技能。
- 作为后续博客入口，用于记录论文阅读、科研笔记、技术实践和阶段性总结。
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

## 发布到 GitHub Pages

项目已经配置 `.github/workflows/deploy.yml`，推送到 GitHub 后可通过 GitHub Actions 自动构建并发布。

建议流程：

1. 在 GitHub 新建一个空仓库，推荐仓库名 `personal-homepage`。
2. 将本地仓库推送到 GitHub：

```powershell
git remote add origin https://github.com/<你的GitHub用户名>/personal-homepage.git
git push -u origin main
```

3. 进入 GitHub 仓库的 `Settings -> Pages`。
4. 将 `Source` 设置为 `GitHub Actions`。
5. 等待 Actions 执行完成后，网站地址通常为：

```text
https://<你的GitHub用户名>.github.io/personal-homepage/
```

项目已处理 GitHub Pages 子路径，发布到项目页时站内链接和图片资源会自动加上仓库名前缀。
