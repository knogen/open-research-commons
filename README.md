# Open Research Commons

[《开放科研共同体基本规则》v0.6（讨论稿）](docs/constitution-v0.6.md)面向各学科的研究者及所有愿意参与研究和知识共享的人。发布日期为 2026-11-20。投稿材料分类见[核查记录](docs/verification-labels-v0.6.md)，不同成果的授权安排见[成果许可](docs/license-system-v0.6.md)。

## 阅读与引用

[阅读最新版](https://open-research-commons.pages.dev/#/constitution/latest)或[浏览历史版本](https://open-research-commons.pages.dev/#/versions)。版本选择器可切换完整正文。引用某一版时，使用阅读器的“本版固定链接”。v0.2 和 v0.3 的归档分支稿按分支对应提交保存，初稿另列。

## 内容维护

[版本目录](docs/charter-editions.json)指定最新版、各版 Markdown 及历史提交。当前正文以同事提供的《开放科研共同体基本规则v3.docx》为底稿，源文件 SHA-256 为 `b9c6297f9a27b74442f339b99eac98d2c03b7b110bf8feb57e5c029b86f0e62a`。版本日期、提案及外部参考属于编辑资料。

编辑文档后运行以下命令，生成站点可直接使用的静态文件。生成器核对每份历史文本的 Git blob 标识。

```bash
npm install --no-save --package-lock=false marked@17.0.5
node scripts/build-doc-pages.cjs
python -m http.server 8080
```

## Cloudflare Pages

- Repository: `knogen/open-research-commons`
- Production branch: `main`
- Framework preset: None
- Build command: 留空
- Build output directory: `/`（仓库根目录）

## 版本与许可

[历史记录](docs/version-history.md)列有归档分支和回退方式。[仓库 MIT 许可证](LICENSE)及[文档许可说明](LICENSE-DOCS.md)记录本仓库授权。投稿作品和第三方内容分别依其权利人授予的许可使用。
