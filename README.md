# Open Research Commons

面向人类与 AI 协作科研的开放发表、社区宪章与许可证研究。

## 当前版本 v0.2

- 参考档案：arXiv、OpenI、OpenI PCL、ChinaXiv、CCF、GitHub、Wikipedia/Wikimedia。
- 原文快照：`docs/snapshots/2026-11-17-excerpts.md`，包含制度与许可证短摘录、来源链接、段落定位、采集日期和使用边界。
- 宪章：`docs/constitution-v0.2.md`（段落级来源引用）。
- 许可证制度：`docs/license-system-v0.2.md`（CC 六种许可、arXiv/ChinaXiv/OpenI/Wikimedia/GitHub 逐项目录与适用性评估）。
- 历史许可草案：`docs/license-system-v0.1.md`。
- 历史宪章：`docs/constitution-v0.1.md`。
- 验证：采用文字型核验状态与可并列证据标签，不使用与 arXiv 论文版本号相似的数字编号。

## 页面功能

- 参考站点独立页面：展示原文短摘录、来源定位和原始链接。
- 宪章逐章展示段落级引用、制定原因和可选讨论分支。
- 许可证页面逐项列出 CC 六种标准许可、各参考系统实际列出的许可、GitHub 可识别许可证目录及本社区适用性判断。
- 宪章及许可证页面提供“打印 / 导出 PDF”按钮，使用浏览器打印对话框保存为 PDF。
- 第三方原文链接始终指向原始发布机构。

## 本地预览

纯静态 HTML/CSS/JS，无构建步骤。运行 `python -m http.server 8080` 后访问 http://localhost:8080。

## Cloudflare Pages

- Repository: `knogen/open-research-commons`
- Production branch: `main`
- Framework preset: None
- Build command: 留空
- Build output directory: `/`（仓库根目录）

## 许可与版权

网站源代码见 `LICENSE`（MIT）。本项目原创研究文档拟采用 CC BY 4.0，见 `LICENSE-DOCS.md`。第三方章程、政策、服务条款和百科内容保留原有版权及许可；本仓库仅保存必要短摘录、引用定位与链接，不对第三方原文重新授权。

宪章与许可证制度均为讨论稿，不构成法律意见。正式采用前应核验各来源最新版本、兼容性和适用司法辖区。
