# 开放科研共同体宪章 v0.2（讨论稿）

状态：公开讨论稿，尚未通过正式程序。  
适用目标：接纳 AI 辅助、人机协同及 AI 高度自主完成的科研作品，同时建立责任主体、过程透明、证据验证和开放贡献制度。  
参考档案：见 [原始制度文本快照](snapshots/2026-11-17-excerpts.md)。引用标识 S1–S13。

## 第一章 宗旨与范围

建立开放、可复现、可验证的人机协作科研共同体。社区接纳由自然人或组织承担责任的科研作品，包括 AI 辅助、人机协同及 AI 高度自主完成的研究。

**制定原因：** 以开放科研为目标，接纳新的研究生产方式，但不降低科研诚信和证据标准。

**段落级参考：**
- [S3 — OpenI 章程第二条](https://www.openi.org.cn/openi-community-charter/)：多元主体共建共享。
- [CCF 章程第二、三条](https://www.ccf.org.cn/About_CCF/CCF_Constitution/)：学术共同体组织定位。

## 第二章 参与主体与责任

每项发表作品必须指定自然人或依法成立的组织作为责任主体。组织投稿须指定自然人责任代表。AI Agent 可作为工具或贡献实体记录，但不作为承担法律责任的作者。

**制定原因：** 将法律责任、学术贡献和工具参与分离；不因 AI 参与比例而否定成果。

**段落级参考：**
- [S2 — arXiv Submission Agreement，Representations and Warranties](https://info.arxiv.org/help/policies/submission_agreement.html)：投稿者声明有权代表共同作者提交。
- [S6 — ChinaXiv 许可信息声明，提交授权](https://www.chinaxiv.org/user/license.htm)：合作作品需取得作者授权。
- [S3 — OpenI 章程第二条](https://www.openi.org.cn/openi-community-charter/)：允许自然人与组织共同参与。

## 第三章 AI 参与披露

投稿者应声明 AI 参与程度、模型及版本、关键工具、使用目的、人工介入点、主要工作流和验证方式。应公开可复现的研究记录，不强制公开模型隐藏思维链或商业秘密。

**制定原因：** 披露目标是可审计、可复现，而不是把未经验证的 CoT 当作正确性证明。

**段落级参考：**
- [S7 — CCF 科研规范第七条](https://www.ccf.org.cn/About_CCF/CCF_Constitution/2026-07-16/915412.shtml)：AI 工具名称、用途及使用声明。
- [S8 — GitHub ToS D.1/D.3](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service)：用户内容责任与所有权。
- [S13 — Wikipedia LLM 指南 Usage](https://en.wikipedia.org/wiki/Wikipedia:Large_language_models)：仅借鉴 AI 使用披露的透明性，不移植百科编辑限制。

## 第四章 发表与署名

允许 Human-led、Human-AI collaborative、AI-led 三类作品。署名应反映实质贡献；责任主体确认其有权发表并对诚信声明负责。AI Agent 可列入贡献记录，不作为法律作者。

**制定原因：** 本社区与部分传统科研伦理规范存在明确差异：不将人类主导关键推理作为所有成果的准入条件，而要求清楚披露 AI 自主程度并建立独立验证。

**段落级参考：**
- [S7 — CCF 科研规范第七条](https://www.ccf.org.cn/About_CCF/CCF_Constitution/2026-07-16/915412.shtml)：人类主导要求，本社区明确不照搬为普遍准入条件。
- [S7 — CCF 科研规范第十三条](https://www.ccf.org.cn/About_CCF/CCF_Constitution/2026-07-16/915412.shtml)：按实际贡献署名。
- [S13 — Wikipedia LLM 指南 Usage](https://en.wikipedia.org/wiki/Wikipedia:Large_language_models)：百科条目生成限制仅作对照，不作为科研发表禁令。

## 第五章 证据、引用与验证

每项关键主张应尽可能关联来源、数据、推导、实验或形式化证明。必须区分来源直接陈述、作者推论与未验证假设。验证状态不得被表述为超出实际检查范围的正确性保证。

**制定原因：** 借鉴 Wikipedia 的可验证性与来源直接支持原则，但不采纳其禁止百科原创研究的规则。科学研究允许原创推论，要求的是明确标注推论链和证据边界。

**段落级参考：**
- [S11 — Wikipedia:Verifiability，Responsibility for providing citations](https://en.wikipedia.org/wiki/Wikipedia:Verifiability)：事实或主张应可归因于可靠已发表来源。
- [S12 — Wikipedia:No original research，Synthesis of published material](https://en.wikipedia.org/wiki/Wikipedia:No_original_research)：百科政策要求来源不能被拼接成来源未表达的结论；本社区借鉴区分来源事实与原创推论的原则，不禁止原创研究。
- [S7 — CCF 科研规范第八条](https://www.ccf.org.cn/About_CCF/CCF_Constitution/2026-07-16/915412.shtml)：真实记录研究过程，确保可追溯、可验证。
- [S8 — GitHub ToS J.4](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service)：AI 输出可能不准确，使用者须审查、测试和验证。

## 第六章 版本、更正与撤回

作品应保留不可静默覆盖的版本历史。重大错误应发布更正或撤回说明，并关联受影响版本、证明、数据和下游作品。撤回不抹除学术记录，但应清晰标注状态与理由。

**制定原因：** 科研记录需要长期可追溯，错误更正本身也是知识贡献。

**段落级参考：**
- [S2 — arXiv Submission Agreement，Curation of Content](https://info.arxiv.org/help/policies/submission_agreement.html)：保留提交作品的版本记录。
- [S6 — ChinaXiv 许可信息声明，许可不可撤销](https://www.chinaxiv.org/user/license.htm)：说明公开存档与撤回限制。

## 第七章 知识产权与许可

作者或权利人保留其依法享有的权利。平台获得非独占、全球范围、为存档、展示、索引、格式转换和传播所必需的授权。代码、论文、数据、模型和证明工程分别选择适用许可；平台授权不替代作品许可证。

**制定原因：** 吸收 arXiv 与 ChinaXiv 的非独占平台授权、GitHub 的内容所有权与项目许可证分离、Wikimedia 的开放署名与相同方式共享机制。明确是否允许平台将作品用于模型训练，不作默示推定。

**段落级参考：**
- [S2 — arXiv Submission Agreement，Management of Copyright](https://info.arxiv.org/help/policies/submission_agreement.html)：平台非独占授权不转让版权。
- [S6 — ChinaXiv 许可信息声明](https://www.chinaxiv.org/user/license.htm)：作者保留版权，平台取得永久发布许可。
- [S8 — GitHub ToS D.3–D.6](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service)：区分用户所有权、平台授权、公开仓库 fork 和仓库许可证下贡献。
- [S10 — Wikimedia Terms of Use §7](https://foundation.wikimedia.org/wiki/Policy:Terms_of_Use#Licensing_of_Content)：CC BY-SA 4.0/GFDL 与署名要求。

## 第八章 贡献评价

除原创发现外，认可形式化验证、独立复现、发现反例、纠错、数据整理、工具开发、工作流维护和跨领域知识连接。贡献应有可追溯证据，并区分贡献类型与影响程度。

**制定原因：** 从单一的原创论文和引用评价，扩展到可验证知识生产的全生命周期贡献。

**段落级参考：**
- [S3 — OpenI 章程第六至七条](https://www.openi.org.cn/openi-community-charter/)：代码贡献、基础设施与社区贡献。
- [CCF 章程](https://www.ccf.org.cn/About_CCF/CCF_Constitution/)：学术交流、教育、应用与专业发展。

## 第九章 社区治理、审核与申诉

治理规则、审核标准、利益冲突、内容处理和申诉流程应公开。审核决定应给出理由；平台运营、技术审核、学术判断和申诉复核尽量分离。

**制定原因：** 借鉴 CCF 和 OpenI 的委员会治理，但初期不复制复杂组织架构，采用透明维护者治理并保留向会员制演进的空间。

**段落级参考：**
- [S3 — OpenI 章程第九至十三条](https://www.openi.org.cn/openi-community-charter/)：理事会、秘书处、技术委员会、用户委员会与工作组。
- [CCF 章程第四章](https://www.ccf.org.cn/About_CCF/CCF_Constitution/)：组织机构与负责人产生、罢免程序。

## 第十章 宪章修订与生效

宪章通过公开提案、逐条讨论、修订记录和明确批准程序演进。每次修订保留差异、理由、来源、生效日期及过渡安排。

**制定原因：** 采用 Git 版本管理提高透明度，但 Git 合并本身不自动构成合法或充分的社区表决。

**段落级参考：**
- [S3 — OpenI 章程第三十条](https://www.openi.org.cn/openi-community-charter/)：章程修改、提前通知及会员退出机制。
- [CCF 章程第六章](https://www.ccf.org.cn/About_CCF/CCF_Constitution/)：章程修改程序。

## 待讨论事项

1. 组织投稿是否必须指定自然人责任代表？建议必须。
2. AI Agent 是否可列为贡献者实体？建议允许，但不作为法律作者。
3. 是否强制公开完整提示词或原始 Agent 轨迹？建议不强制；公开关键提示词摘要、工作流和可复现工件。
4. 论文默认许可采用 CC BY 4.0 还是 CC BY-SA 4.0？建议 CC BY 4.0。
5. 平台是否允许将投稿内容用于 AI 训练？建议独立、明确、可选择授权。
6. 形式化证明已检查是否作为特定数学成果的投稿要求？建议按主张类型制定，不设全站统一门槛。
7. 是否建立独立申诉人或轮值评议人制度？待讨论。
