# Open Research Commons

初期服务数学及相关研究的人机协作科研共同体，接收论文、证明、研究代码与配套材料，并通过社区持续核查逐步扩展。

## 当前宪章 v0.4

2026-11-18 依据编辑修订讨论稿更新十章正文。采纳提案、制定原因和外部制度比较继续作为制定记录保留；已不适用的旧说明加删除线，原始提案不作改写。

- [宪章 v0.4](docs/constitution-v0.4.md)：编辑后的正文、逐章制定记录及历史提案原文。
- [编辑修订稿转录](docs/proposals/2026-11-18-edited-draft.md)：源文件原文、括注及 SHA-256。
- [核验规范 v0.4](docs/verification-labels-v0.4.md)：数学定理或证明类投稿须提供支撑主要结论的形式化证明文件，Lean 为主要支持工具，也接受符合社区公布标准的其他形式化证明系统。
- [许可制度与参考目录 v0.3](docs/license-system-v0.3.md)：继续沿用统一 MIT；保留 CC 六类与其他系统的许可比较。
- [Issue 原文快照](docs/proposals/2026-11-18-issues.json)、[制度来源](docs/research-sources.md)和[原文摘录](docs/snapshots/2026-11-17-excerpts.md)：保留历史依据。
- [版本记录与回退](docs/version-history.md)：v0.3 更新前完整分支、历史版本及恢复说明。

## 页面功能

宪章逐章呈现已采纳提案和外部参考，完整提案原文附在宪章下方。许可、核验与版本页面直接由当前 Markdown 生成，保持正文一致；支持浏览器打印。首页和宪章均有版本记录入口。

## 本地预览与内容维护

纯静态 HTML/CSS/JS，发布时无需构建。运行 `python -m http.server 8080` 后访问 http://localhost:8080。

宪章页面读取 `assets/constitution-data.js`。修改后运行 `node scripts/build-constitution.cjs` 生成对应 Markdown，核对正文与提案引用一致。

许可、核验与版本页面由 Markdown 生成已提交的 `assets/document-content.js`。文档更新后执行：

```bash
npm install --no-save --package-lock=false marked@17.0.5
node scripts/build-doc-pages.cjs
```

Marked 只用于本地生成，不在浏览器运行。

## Cloudflare Pages

- Repository: `knogen/open-research-commons`
- Production branch: `main`
- Framework preset: None
- Build command: 留空
- Build output directory: `/`（仓库根目录）

## 升级前完整版本

保存分支：[archive/v0.2-before-issues-20261118-d4c0013](https://github.com/knogen/open-research-commons/tree/archive/v0.2-before-issues-20261118-d4c0013)。精确提交：`d4c0013a7dbc55c48351ccc3530f9eff0f17e518`。

v0.1、v0.2、v0.3 文档原样保留。本次更新前的完整分支为 [archive/v0.3-before-edited-draft-20261118-4b1d110](https://github.com/knogen/open-research-commons/tree/archive/v0.3-before-edited-draft-20261118-4b1d110)。恢复步骤见[版本记录](docs/version-history.md)。

## 许可与版权

根据 [Issue #4](https://github.com/knogen/open-research-commons/issues/4)，当前有权授权的原创材料统一 MIT，完整文本见 [LICENSE](LICENSE)，当前文档与历史版本边界见 [LICENSE-DOCS.md](LICENSE-DOCS.md)。第三方制度、提案引文及其他第三方材料保持其原有权利和许可，不因本项目的统一许可声明而重新授权。

本版本为讨论稿，不代表所引用组织的立场。

