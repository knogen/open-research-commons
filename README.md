# Open Research Commons

初期服务数学及相关研究的人机协作科研共同体，接收论文、证明、研究代码与配套材料，并通过社区持续核查逐步扩展。

## 当前版本 v0.3

2026-11-18 依项目维护者指令，全部采纳 [Issue #1–#6](https://github.com/knogen/open-research-commons/issues)，以已采纳提案作为本社区此次修订的第一优先级依据；外部制度保留为比较参考。

- [宪章 v0.3](docs/constitution-v0.3.md)：10 章正文、逐章提案引用，以及宪章底部的全部提案原文。
- [许可制度与参考目录 v0.3](docs/license-system-v0.3.md)：有权授权的原创论文、代码、证明及其他原创材料统一 MIT；保留 CC 六类与各参考系统的完整目录。
- [核验规范 v0.3](docs/verification-labels-v0.3.md)：Lean 可选，接受全部或局部核查以及其他方法，披露方法、范围、完成程度、依据和局限。
- [Issue 原文快照](docs/proposals/2026-11-18-issues.json)：6 个提案原文、作者、链接和采集时状态。
- [版本记录与回退](docs/version-history.md)：逐项变更映射及完整保存分支。
- [制度来源](docs/research-sources.md)与[原文快照](docs/snapshots/2026-11-17-excerpts.md)：保留外部比较依据及已完成的 P1 勘误。

## 页面功能

宪章逐章呈现已采纳提案和外部参考，完整提案原文附在宪章下方。许可、核验与版本页面直接由当前 Markdown 生成，保持正文一致；支持浏览器打印。首页和宪章均有版本记录入口。

## 本地预览与内容维护

纯静态 HTML/CSS/JS，发布时无需构建。运行 `python -m http.server 8080` 后访问 http://localhost:8080。

宪章页面读取 `assets/constitution-data.js`。修改宪章时同步更新对应 Markdown，并核对正文与提案引用一致。

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

v0.1、v0.2 文档原样保留。恢复步骤见[版本记录](docs/version-history.md)。

## 许可与版权

根据 [Issue #4](https://github.com/knogen/open-research-commons/issues/4)，当前有权授权的原创材料统一 MIT，完整文本见 [LICENSE](LICENSE)，当前文档与历史版本边界见 [LICENSE-DOCS.md](LICENSE-DOCS.md)。第三方制度、提案引文及其他第三方材料保持其原有权利和许可，不因本项目的统一许可声明而重新授权。

本版本为提案采纳修订稿，不代表所引用组织的立场。

