# 许可证目录与适用性评估 v0.2

状态：公开研究稿。采集日期：2026-11-17。  
原则：逐一记录参考平台明确提供或列明的许可证；即使不适合本社区，也保留并说明原因。  
原文快照：见 [2026-11-17 快照集 S18–S33](snapshots/2026-11-17-excerpts.md)。

## 1. 先区分五类法律工具

1. 作品许可证：决定第三方可如何复制、修改、分发某个作品。
2. 平台存档授权：作者向预印本平台授予存储、展示和分发权。
3. 模型许可证：处理模型权重、衍生模型、补充材料等特定资产。
4. 贡献者协议（CLA/DCO）：处理贡献者向项目提交代码/内容时的权利确认和授权。
5. 公共领域工具：CC0 尽可能放弃版权及相关权利；Public Domain Mark 仅标识已经处于公共领域的作品。

平台列出或接受某许可，不代表所有托管内容都自动采用该许可。

## 2. Creative Commons 六种标准许可

CC 的四个要素：
- BY：署名；
- SA：相同方式共享；
- NC：非商业性使用；
- ND：禁止演绎。

| 许可 | 商业使用 | 改编/翻译 | 衍生作品许可 | 本社区判断 |
|---|---|---|---|---|
| CC BY 4.0 | 允许 | 允许 | 不强制同许可 | 推荐默认 |
| CC BY-SA 4.0 | 允许 | 允许 | 相同许可要素/兼容许可 | 可选 |
| CC BY-ND 4.0 | 允许 | 不允许分享改编作品 | 无改编分享 | 不适合默认 |
| CC BY-NC 4.0 | 不允许 | 允许非商业改编 | 不强制同许可 | 不适合默认 |
| CC BY-NC-SA 4.0 | 不允许 | 允许非商业改编 | 相同许可要素/兼容许可 | 不适合默认 |
| CC BY-NC-ND 4.0 | 不允许 | 不允许分享改编作品 | 无改编分享 | 最不适合 |

### 2.1 CC BY 4.0 详细条款

**允许的行为**
- 在任何媒介和格式复制、发行、展示和传播。
- 翻译、改写、节选、注释、汇编、改编和再创作。
- 商业与非商业使用，包括商业出版、企业研发和商业数据库。
- 在遵守许可条件时，全球范围、免版税、非独占、不可撤销地使用作品。

**使用者义务**
1. 保留合理可行的作者署名、版权声明、许可声明和来源标识。
2. 提供 CC BY 4.0 许可链接或许可文本。
3. 标明是否修改原作品；翻译、改编、节选等应清楚说明。
4. 不得暗示原作者或许可方认可使用者或其使用方式。
5. 不得施加额外法律条款或有效技术措施，阻止后续用户行使许可权利。

**权利边界**
- 不自动授予专利权、商标权、隐私权、肖像权或其他独立权利。
- 不保证上传者拥有所有第三方图像、数据、字体、代码和引文材料的授权。
- CC BY 4.0 的授权范围包括许可方有权授权的著作权及类似权利，在适用地区可包括数据库特殊权利；但不授予许可方无权授权的第三方数据库权利，也不替代隐私、个人信息、保密、合同、专利和商标等其他权利。
- CC BY 不要求改编作品继续采用 CC BY；相同方式共享是 CC BY-SA 的要求。

**不可撤销性**
对遵守许可条款的用户，已授予许可不可任意撤销。作者可以停止未来传播，但不能通过删除网页使既有合规授权自动失效。

**AI 训练**
CC BY 允许的复制、改编和商业使用范围可能覆盖部分机器学习训练或数据处理活动，但不能把它理解为对所有 AI 训练场景的无条件授权。仍须判断版权范围、第三方权利、隐私、数据库、合同及适用的文本数据挖掘规则。平台如需将投稿内容用于自有模型训练或提供给第三方，应设置独立、明确授权。

**推荐标识**
`Creative Commons Attribution 4.0 International (CC BY 4.0)`，不要只写“CC BY”。

### 2.2 其他五种 CC 许可的适用性

- CC BY-SA：适合希望衍生作品继续开放的作者；但许可兼容性和下游出版协议需要评估。
- CC BY-ND：允许传播未改编作品，但不允许分享改编材料；限制翻译、改编和衍生研究，不适合作为默认。
- CC BY-NC：允许非商业改编，但限制商业研究和商业再利用；NC 边界可能产生争议。
- CC BY-NC-SA：同时限制商业使用并要求相同方式共享，进一步缩小再利用范围。
- CC BY-NC-ND：只允许非商业分享未改编原作，是六种标准 CC 许可中限制最多的一种。

### 2.3 CC0 与 Public Domain Mark

- CC0 1.0：公共领域奉献工具，尽可能放弃版权及相关权利；适合权利清晰的元数据和数据集，但仍须检查隐私、肖像、专利、商标及第三方权利。
- Public Domain Mark：仅标识已处于公共领域的作品，不是许可，也不能代替权利人作放弃声明。

### 2.4 CC 不推荐用于软件

Creative Commons 明确不推荐将其版权许可用于计算机软件或硬件。软件代码和形式化证明工程应优先采用 MIT、Apache 2.0、BSD、MulanPSL 等软件许可证；论文、图表、说明文档等可分别采用 CC 许可。

## 3. arXiv 当前列出的论文许可

arXiv 官方页面列出：
1. CC BY 4.0；
2. CC BY-SA 4.0；
3. CC BY-NC-SA 4.0；
4. CC BY-NC-ND 4.0；
5. arXiv.org perpetual, non-exclusive license 1.0；
6. CC0。

arXiv 另规定全部元数据适用 CC0 1.0。元数据许可不等于论文全文许可。arXiv 允许不同论文版本使用不同许可，但每个版本的许可选择不可撤销。

判断：
- CC BY：推荐；
- CC BY-SA：可选；
- CC BY-NC-SA / CC BY-NC-ND：不适合默认；
- arXiv perpetual non-exclusive：属于平台分发授权，适合存档授权模型，不是通用开放再利用许可；
- CC0：适合元数据或权利清晰的数据，不建议将论文版权默认放弃。

来源：https://info.arxiv.org/help/license/index.html

## 4. ChinaXiv 实际列出的许可与授权

ChinaXiv 要求投稿者选择：
- 授予 ChinaXiv 非独占、不可撤销的永久分发许可；或
- 声明作品采用 CC BY 4.0、CC BY-SA 4.0、CC BY-NC-SA 4.0、CC0 1.0 之一；
- 如需其他 CC 许可，可在投稿流程选择 other 并在论文中注明。

判断：
- 平台非独占分发授权：可借鉴，但本社区应进一步明确存档、展示、索引、格式转换和 AI 训练的权限边界。
- CC BY：推荐。
- CC BY-SA：可选。
- CC BY-NC-SA：不适合默认。
- CC0：数据/元数据可选。
- 其他 CC 许可：逐项审查。

来源：https://cgg.chinaxiv.org/user/license.htm?locale=en

## 5. OpenI 启智社区许可证

### 5.1 启智开源许可证 1.1（2019）

适用软件源代码和可执行代码。再分发需保留许可证条件、声明和免责声明；商业目的使用/再发布前需登记相关信息；另设自愿专利声明与商业专利许可选项。

判断：不适合作为本社区默认软件许可。商业登记和专利条件增加使用者义务，不符合低摩擦商业再利用原则。可作为中国开源许可案例。

来源：https://www.openi.org.cn/opensource-license/

### 5.2 木兰-启智模型许可证（2023-12）

适用模型、衍生模型及补充材料，如模型结构、参数、权重、部署代码等。不得自动扩展到训练数据资源和算法源代码。

主要特点：版权与专利许可、专利诉讼触发的专利授权终止机制、无商标许可、再分发声明和归属建议。

判断：模型权重的专门许可候选；不适用于论文或一般代码。模型衍生定义、专利条款和责任边界应专项法律审查。

来源：https://openi.org.cn/html/2023/licence_1215/687.html

## 6. 木兰许可证族（OpenI 合作生态相关，不等同于 OpenI 平台统一许可）

- MulanPSL v1：宽松软件许可旧版本；仅遗留项目考虑。
- MulanPSL v2：宽松软件许可，含版权与专利授权，OSI 已批准；可作为 MIT/Apache 的备选。
- MulanPubL v1：强互惠软件许可旧版本；不作为默认。
- MulanPubL v2：强互惠软件许可，分发衍生作品需履行相应源码和同许可义务；不作为默认。
- MBODL v1：木兰-白玉兰开放数据许可协议，面向开放数据集；数据专用，需逐项审查。
- Mulan OWL：木兰开放作品许可证；正式文本和适用范围需核验后再采用。

来源：https://www.openi.org.cn/html/2023/dongtai_0814/690.html  
MulanPSL v2 OSI 记录：https://opensource.org/license/MulanPSL-2.0

## 7. Wikipedia / Wikimedia

维基百科贡献文本采用 CC BY-SA 4.0 与 GFDL（无固定章节、封面文字或封底文字）双许可；再利用者可遵守其中一种或两种许可。商业使用允许，但需满足署名和相同方式共享要求。

媒体文件可能采用不同许可或公共领域状态，不能将所有 Wikipedia 内容一概视为 CC BY-SA。

判断：CC BY-SA 可作为论文许可的可选项；GFDL 面向自由文档，条款和署名要求较复杂，不建议作为科研论文默认许可。

来源：https://foundation.wikimedia.org/wiki/Terms_of_Use#7._Licensing_of_Content

## 8. GitHub 识别的许可证目录

GitHub 不规定仓库必须采用哪种许可证。GitHub Docs 列出的搜索/识别目录包括：
AFL-3.0、Apache-2.0、Artistic-2.0、BSL-1.0、BSD-2-Clause、BSD-3-Clause、BSD-3-Clause-Clear、BSD-4-Clause、0BSD、CC、CC0-1.0、CC-BY-4.0、CC-BY-SA-4.0、WTFPL、ECL-2.0、EPL-1.0、EPL-2.0、EUPL-1.1、AGPL-3.0、GPL family、GPL-2.0、GPL-3.0、LGPL family、LGPL-2.1、LGPL-3.0、ISC、LPPL-1.3c、MS-PL、MIT、MPL-2.0、OSL-3.0、PostgreSQL、OFL-1.1、NCSA、Unlicense、zlib。

此列表是 GitHub 的识别/搜索目录，不是 GitHub 采用或背书的许可清单，也不等于 OSI 批准目录。CC 许可适合内容而非软件；OFL 适用于字体；LPPL 适用于 TeX 生态；其余软件许可证应按宽松、弱互惠、强互惠、专用许可逐一判断。

来源：https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository#searching-github-by-license-type

## 8.1 GitHub Docs 识别的许可证逐项目录

GitHub Docs 的许可证筛选目录逐项列出如下标识。链接可通过 SPDX 官方标识页核对；家族项链接回 GitHub Docs，因为它们不是单一版本。

| 标识 | 名称 | 资产类型 | 初步适用性 |
|---|---|---|---|
| AFL-3.0 | Academic Free License 3.0 | 软件 | 特殊宽松许可，条款较复杂；不作为默认 |
| Apache-2.0 | Apache License 2.0 | 软件 | 可选；明确专利授权 |
| Artistic-2.0 | Artistic License 2.0 | 软件 | 特定生态；不作为默认 |
| BSL-1.0 | Boost Software License 1.0 | 软件 | 宽松，可选 |
| BSD-2-Clause | BSD 2-Clause | 软件 | 宽松，可选 |
| BSD-3-Clause | BSD 3-Clause | 软件 | 宽松，可选 |
| BSD-3-Clause-Clear | BSD 3-Clause Clear | 软件 | 需核对专利条款 |
| BSD-4-Clause | BSD 4-Clause | 软件 | 旧式广告条款，不推荐新项目 |
| 0BSD | Zero-Clause BSD | 软件 | 极宽松，须评估免责声明 |
| CC | Creative Commons family | 内容 | 家族标识，不是单一许可证 |
| CC0-1.0 | CC0 1.0 | 数据/内容 | 公共领域工具，不是许可证 |
| CC-BY-4.0 | CC BY 4.0 | 内容 | 研究论文/文档推荐，不用于软件 |
| CC-BY-SA-4.0 | CC BY-SA 4.0 | 内容 | 文档可选，衍生作品需相同方式共享 |
| WTFPL | Do What The F*ck You Want To Public License | 软件 | 法律表达有争议，不推荐 |
| ECL-2.0 | Educational Community License 2.0 | 软件 | 教育场景专用，非默认 |
| EPL-1.0 | Eclipse Public License 1.0 | 软件 | 弱 copyleft 旧版本 |
| EPL-2.0 | Eclipse Public License 2.0 | 软件 | 弱 copyleft，可按软件项目评估 |
| EUPL-1.1 | European Union Public Licence 1.1 | 软件 | 旧版本，注意兼容性 |
| AGPL-3.0 | GNU AGPL v3 | 软件 | 网络服务场景强 copyleft，不作宽松默认 |
| GPL | GNU GPL family | 软件 | 家族标识，须选定具体版本 |
| GPL-2.0 | GNU GPL v2 | 软件 | 强 copyleft |
| GPL-3.0 | GNU GPL v3 | 软件 | 强 copyleft，含专利/反锁定条款 |
| LGPL | GNU LGPL family | 软件 | 家族标识，须选定具体版本 |
| LGPL-2.1 | GNU LGPL v2.1 | 软件 | 弱 copyleft，主要面向库 |
| LGPL-3.0 | GNU LGPL v3 | 软件 | 弱 copyleft，需核对链接/再分发义务 |
| ISC | ISC License | 软件 | 简洁宽松，可选 |
| LPPL-1.3c | LaTeX Project Public License 1.3c | TeX 软件 | 面向 LaTeX 宏包，不是论文 PDF 许可 |
| MS-PL | Microsoft Public License | 软件 | 需核对具体专利和分发条款 |
| MIT | MIT License | 软件 | 本社区代码/证明工程首选 |
| MPL-2.0 | Mozilla Public License 2.0 | 软件 | 文件级 copyleft，可选 |
| OSL-3.0 | Open Software License 3.0 | 软件 | 强 copyleft，不作默认 |
| PostgreSQL | PostgreSQL License | 软件 | 宽松，可选 |
| OFL-1.1 | SIL Open Font License 1.1 | 字体 | 仅用于字体软件/字体文件 |
| NCSA | University of Illinois/NCSA | 软件 | 宽松，可选 |
| Unlicense | The Unlicense | 软件 | 公共领域式许可，跨司法辖区效果需评估 |
| zlib | zlib License | 软件 | 宽松，可选 |

来源：[GitHub Docs license type catalog](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository#searching-github-by-license-type)。这份列表是 GitHub 搜索和识别目录，不等于 GitHub 采用或背书全部条目，也不是 OSI 批准目录。

## 9. CCF 与 OpenI PCL 的许可证边界

- **CCF：**本次未发现对所有 CCF 期刊、会议论文、报告和网站内容统一适用的一份开放许可证。章程与科研伦理规范不是作品许可证。每篇论文应按具体出版物、会议/期刊作者协议、出版商合同和论文页面版权声明判断。
- **OpenI PCL：**平台承载代码仓库、模型、数据集和协同任务，但不能推定全部项目采用启智开源许可证或木兰-启智模型许可证。每个仓库 LICENSE、模型卡许可、数据集许可和平台服务条款必须分别核对。

## 9. 其他工具与平台授权（不是作品许可证）

- CC0：公共领域奉献工具。
- Public Domain Mark：公共领域标记。
- arXiv perpetual non-exclusive license：平台分发授权。
- ChinaXiv non-exclusive irrevocable license：平台存档/分发授权。
- GitHub Terms of Service：平台服务条款。
- CLA/DCO：贡献者权利确认/贡献流程，不等同项目作品许可证。

## 10. 本社区建议

| 资产 | 默认建议 | 可选/边界 |
|---|---|---|
| 论文、研究报告、知识文档 | CC BY 4.0 | CC BY-SA 4.0 |
| 代码、脚本、工具 | MIT | Apache 2.0、MulanPSL v2 |
| Lean/Coq 证明工程 | MIT | Apache 2.0；核查依赖许可证 |
| 数据集、元数据 | CC0 或 CC BY | 需核实数据库权利、隐私和第三方授权 |
| 模型权重 | 逐模型选择 | Mulan-OpenI Model License 等专用模型许可需单独审查 |
| 平台存档 | 独立非独占授权 | AI 训练授权单独选择 |

不建议默认采用 NC、ND、启智商业登记许可或强互惠许可。它们可作为特定权利人选择或特殊资产的许可，但必须明确说明限制。

本文件为制度研究草案，不构成法律意见。正式采用前应核对完整法律文本、兼容性、第三方权利和适用司法辖区。
