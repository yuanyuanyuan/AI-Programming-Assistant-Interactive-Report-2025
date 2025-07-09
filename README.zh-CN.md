# AI编程助手交互式报告 - 2025

本项目是一个使用 [Astro](https://astro.build/) 构建的交互式网站，用于展示和比较AI编程助手。网站会自动部署到GitHub Pages。

![demo](.\demo参考\demo-video.gif)

## 🚀 本地开发

1.  **安装依赖**:
    ```bash
    npm install
    ```

2.  **启动开发服务器**:
    ```bash
    npm run dev
    ```
    在浏览器中打开 [http://localhost:4321](http://localhost:4321) 查看网站。

## 🌍 多语言内容

-   **UI文本**: 在 `/public/locales/` 目录中管理。
-   **README**: 本项目为每种支持的语言维护了独立的 `README` 文件。

## 🛠️ 部署

每当有新的提交被推送到 `main` 分支时，本项目会通过 `.github/workflows/deploy.yml` 中定义的GitHub Action自动部署到GitHub Pages。

GitHub Pages的配置信息位于 `astro.config.mjs` 文件中。

-   **Site**: `https://yuanyuanyuan.github.io`
-   **Base**: `/AI-Programming-Assistant-Interactive-Report-2025/`

---
*本项目由[Astro](https://astro.build/)和AI结对程序员协助完成初始化。* 