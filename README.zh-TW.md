# AI編程助手互動式報告 - 2025

本專案是使用 [Astro](https://astro.build/) 建置的互動式網站，用於展示和比較AI編程助手。網站會自動部署到GitHub Pages。

![demo](.\demo参考\demo-video.gif)

## 🚀 本地開發

1.  **安裝依賴**:
    ```bash
    npm install
    ```

2.  **啟動開發伺服器**:
    ```bash
    npm run dev
    ```
    在瀏覽器中開啟 [http://localhost:4321](http://localhost:4321) 查看網站。

## 🌍 多語言內容

-   **UI文字**: 在 `/public/locales/` 目錄中管理。
-   **README**: 本專案為每種支援的語言維護了獨立的 `README` 檔案。

## 🛠️ 部署

每當有新的提交被推送到 `main` 分支時，本專案會透過 `.github/workflows/deploy.yml` 中定義的GitHub Action自動部署到GitHub Pages。

GitHub Pages的設定資訊位於 `astro.config.mjs` 檔案中。

-   **Site**: `https://yuanyuanyuan.github.io`
-   **Base**: `/AI-Programming-Assistant-Interactive-Report-2025/`

---
*本專案由[Astro](https://astro.build/)和AI結對程式員協助完成初始化。* 