# Open Research Commons

开放科研共同体：面向人类与 AI 协作科研的发表制度、社区宪章与许可证研究。

## 当前阶段

- 制度参考库：arXiv、OpenI 启智社区、OpenI PCL、ChinaXiv、CCF。
- 社区宪章：v0.1 公开讨论稿。
- 许可证建议：代码/证明工程 MIT；论文/文档 CC BY 4.0；数据按权利状态选择 CC0 或 CC BY；平台存档授权与作品许可分离。
- 验证规范：V0–V4 证据与验证层级。

## 本地预览

本项目为纯静态网站，无构建步骤。直接打开 `index.html`，或运行：

```bash
python -m http.server 8080
```

访问 http://localhost:8080 。

## Cloudflare Pages

推荐通过 Cloudflare Pages 的 Git 集成部署：

1. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. 选择 `ider-zh/open-research-commons`。
3. Production branch: `main`。
4. Framework preset: None。
5. Build command 留空。
6. Build output directory: `/`（仓库根目录）。
7. 保存并部署。

本项目是纯静态 HTML/CSS/JS，不需要 Node 构建、环境变量或 Functions。后续每次 push 到 main 会触发自动部署。

## 目录

- `index.html`：入口
- `assets/styles.css`：样式
- `assets/app.js`：页面与内容
- `docs/constitution-v0.1.md`：宪章草案
- `docs/research-sources.md`：参考来源与核验说明

## 内容与法律边界

本仓库中的宪章是讨论草案，不是正式组织章程或法律意见。外部来源链接指向第三方原始材料；第三方文本版权及许可仍由其权利人决定。不要把网站本身的代码许可误认为网站所链接的论文、制度原文或第三方材料的许可。

网站代码拟采用 MIT License；研究文档拟采用 CC BY 4.0，详见 LICENSE 与 LICENSE-DOCS.md。
