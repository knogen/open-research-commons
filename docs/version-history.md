# 版本记录与回退

## v0.4 — 2026-11-18：依编辑修订讨论稿更新

十章正文依据提交的《开放科研共同体宪章.docx》更新，保留全部段落和讨论括注，仅把第十章标题中的“宪法”统一为“宪章”。[编辑稿转录](proposals/2026-11-18-edited-draft.md)保存原文字句及源文件 SHA-256。

- [宪章 v0.4](constitution-v0.4.md)采用编辑稿正文；采纳提案、制定原因、外部制度比较及六份 Issue 原文继续保留。
- 与新稿不符的旧说明加删除线，附本版说明，尤其区分数学定理或证明类投稿的形式化证明要求与其他核查记录。
- [核验规范 v0.4](verification-labels-v0.4.md)同步上述要求；许可目录继续沿用 v0.3，统一 MIT 的制度选择未变。
- 原 v0.3 文档及 Issue 原始快照保持原样；本次更新不声称完成宪章正式批准或生效程序。

更新前完整分支：[archive/v0.3-before-edited-draft-20261118-4b1d110](https://github.com/knogen/open-research-commons/tree/archive/v0.3-before-edited-draft-20261118-4b1d110)。基线提交：[4b1d110](https://github.com/knogen/open-research-commons/commit/4b1d110351b27edc2df29aef9a58f46d3304f9a4)。需要回退时撤销本次 v0.4 提交，保留后续历史；重新部署历史版本时使用保存分支的完整静态资源。

以下 v0.3 记录按当时状态保留，不作为 v0.4 规则的解释。

## v0.3 — 2026-11-18：全部采纳 Issue #1–#6

依项目维护者明确指令，已采纳提案是本次社区制度修订的第一优先级依据；第三方制度保留为比较参考。提案是否已采纳与 GitHub Issue 是否已关闭分别记录。

| 提案 | 落实内容 | 主要章节 |
|---|---|---|
| [#1](https://github.com/knogen/open-research-commons/issues/1) | 初期服务数学及相关研究，逐步扩展 | 第一章 |
| [#2](https://github.com/knogen/open-research-commons/issues/2) | 明确投稿材料、公开条件；支持全部或局部证明 | 第四章 |
| [#3](https://github.com/knogen/open-research-commons/issues/3) | 接受 Agent 完成核心思路、人类核查并回应质疑的成果 | 第二至四章 |
| [#4](https://github.com/knogen/open-research-commons/issues/4) | 原创材料统一 MIT，明确许可范围、版权人和第三方例外 | 第七章 |
| [#5](https://github.com/knogen/open-research-commons/issues/5) | 社区成员参与、作者回应、平台记录与协调 | 第五章 |
| [#6](https://github.com/knogen/open-research-commons/issues/6) | Lean 可选，记录其他核查方法、范围、完成程度和依据 | 第四、五章 |

当前文件：[宪章 v0.3](constitution-v0.3.md)、[许可制度与目录 v0.3](license-system-v0.3.md)、[核验规范 v0.3](verification-labels-v0.3.md)。

完整提案原文附在宪章下方；[机器可读 Issue 快照](proposals/2026-11-18-issues.json)保留原文和元数据。读取时 6 个提案均为 open、评论数均为 0；此记录不冒充社区投票结果。

## 升级前的完整回退点

- 保存分支：[archive/v0.2-before-issues-20261118-d4c0013](https://github.com/knogen/open-research-commons/tree/archive/v0.2-before-issues-20261118-d4c0013)
- 精确提交：[d4c0013a7dbc55c48351ccc3530f9eff0f17e518](https://github.com/knogen/open-research-commons/commit/d4c0013a7dbc55c48351ccc3530f9eff0f17e518)
- 保存范围：升级前全部网站代码、宪章、许可说明、来源快照，以及已完成的 P1 勘误。
- 原有 v0.1、v0.2 文档原样保留；保存分支包含整站可运行版本。

## 查看与恢复

打开保存分支可查阅旧版全部文件，也可建立独立本地工作区：

```bash
git fetch origin
git worktree add ../open-research-commons-v0.2 origin/archive/v0.2-before-issues-20261118-d4c0013
```

需要撤回本次升级时，优先在 main 上对本次 v0.3 升级提交执行 `git revert`，用新提交保留完整历史。先在 Git 日志中确认本次升级提交，并检查后续更改是否产生冲突；不要强制重写 main 历史。

如基于保存分支重新部署，应恢复对应版本的全部静态资源与文档，不能只替换宪章正文。

## 历史文档与授权

- [宪章 v0.2](constitution-v0.2.md)
- [许可研究 v0.2](license-system-v0.2.md)
- [核验规范 v0.2](verification-labels-v0.2.md)
- [宪章 v0.1](constitution-v0.1.md)
- [许可研究 v0.1](license-system-v0.1.md)

v0.3 采纳统一 MIT。历史版本已有效授予的 CC BY 或其他许可不会因升级或回退而撤销；第三方材料继续遵守各自原许可。详见[文档许可与版本边界](../LICENSE-DOCS.md)。
