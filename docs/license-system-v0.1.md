# 许可证系统 v0.1（讨论稿）

## 1. 设计原则

- 作品权利归属、平台存档授权、作品再利用许可分别处理。
- 不要求作者转让版权；平台只取得明确列举的非独占存档、展示、索引、格式转换和传播权限。
- 不将“鼓励回馈”写成许可证强制义务。
- AI 训练与一般存档授权分开选择，不作默示授权。
- 第三方代码、模型、数据、论文及图片须保留其原许可。

## 2. 默认许可建议

| 作品类型 | 默认建议 | 理由 |
|---|---|---|
| 网站代码、工具、脚本 | MIT | 宽松，允许商业使用、修改和分发；保留版权与许可声明 |
| Lean/Coq 证明工程 | MIT | 便于复制、复核、扩展；依赖项另行核验 |
| 论文、研究报告、文档 | CC BY 4.0 | 允许商业再利用和改编，要求署名和标明修改 |
| 数据集、元数据 | CC0 或 CC BY 4.0 | 需先核实数据库权利、个人信息和第三方授权 |
| 模型权重 | 逐模型选择 | 模型权重许可不自动继承论文或代码许可 |
| 平台存档 | 独立非独占授权 | 与作品本身的许可证分离 |

## 3. 许可条款快照

原文短摘录和出处见 [2026-11-17 快照集 S14–S17](snapshots/2026-11-17-excerpts.md)。

- MIT：本仓库根目录 [LICENSE](../LICENSE)；OSI 页面：https://opensource.org/license/mit
- CC BY 4.0：https://creativecommons.org/licenses/by/4.0/legalcode.en
- CC BY-SA 4.0：https://creativecommons.org/licenses/by-sa/4.0/legalcode.en
- CC0 1.0：https://creativecommons.org/publicdomain/zero/1.0/legalcode.en
- GitHub 对“无许可证仓库”的说明：https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository
- Wikimedia 文本许可政策：https://foundation.wikimedia.org/wiki/Policy:Terms_of_Use#Licensing_of_Content

## 4. 可选条款

### 4.1 论文 CC BY 4.0（推荐默认）
允许商业使用和改编；须署名、链接许可并标注修改。最符合宽松开放的社区定位。

### 4.2 论文 CC BY-SA 4.0
衍生作品需采用相同许可要素或兼容许可。能维持共享，但增加许可兼容性约束。

### 4.3 论文 CC BY-NC 4.0
限制商业使用，不建议作为默认。非商业边界会增加再利用判断成本。

### 4.4 代码 Apache 2.0
比 MIT 更明确地处理专利授权与相关终止条款；适合专利风险较重要的项目。

## 5. 平台存档授权的独立选项

投稿者应分别选择：
1. 必需：平台为永久存档、备份、展示、检索和分发所需的非独占授权。
2. 可选：机器可读格式转换、无障碍格式转换和全文索引。
3. 单独选择：是否允许平台使用投稿内容训练或改进自有 AI 模型。
4. 单独选择：是否允许将内容提供给第三方模型提供商。
5. 可撤回未来的可选训练授权，但不影响已经依法完成的历史处理；具体规则需进一步法律审查。

## 6. 重要边界

- GitHub 的公共仓库查看/Fork 权利属于平台服务条款，不自动替代仓库 LICENSE。
- Wikimedia 的 CC BY-SA/GFDL 是其文本贡献制度，不意味着本社区所有论文必须采用相同许可。
- MIT 和 CC BY 不要求贡献者回馈修改；社区可以鼓励提交上游改进，但不得将其伪装成许可证义务。
- 公开数据不等于无权利限制；数据库权利、隐私、保密、合同和第三方许可仍须核查。
- 本文是讨论草案，不构成法律意见。
