// Generate the Markdown edition from the same source used by the website.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const ctx = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root, 'assets/constitution-data.js'), 'utf8') + '\nthis.data = constitutionData;', ctx);
const d = ctx.data;
const repo = 'https://github.com/knogen/open-research-commons';
const proposal = id => d.proposals.find(p => p.number === id);
const proposalLine = p => '- [Issue #' + p.number + ' · ' + p.title + '](' + p.url + ')：' + p.adoptionSummary + '（v' + p.adoptedVersion + ' 已采纳）' + (p.revisionNote ? '  \n  本版说明：' + p.revisionNote : '');
let md = '# ' + d.title + '\n\n版本日期：' + d.date + '（北京时间）。\n\n**版本状态：** ' + d.status + '\n\n**本次修订依据：** ' + d.issuePriority + '\n\n**修订基线：** [`' + d.baselineCommit.slice(0,7) + '`](' + repo + '/commit/' + d.baselineCommit + ')。  \n**回退分支：** [`' + d.archiveBranch + '`](' + repo + '/tree/' + d.archiveBranch + ')。\n\n编辑稿转录与源文件校验值见[编辑修订稿原文](proposals/2026-11-18-edited-draft.md)。仅将第十章标题中的“宪法”统一为“宪章”；其余正文和括注依源稿保留。\n\n' + d.evidenceNote + '\n\n配套文档：[核验规范 v0.4](verification-labels-v0.4.md)、[许可制度与目录 v0.3](license-system-v0.3.md)。外部来源及原文摘录沿用既有档案。\n\n';
for (const a of d.articles) {
  md += '## ' + a.title + '\n\n' + a.text + '\n\n';
  if (a.proposalIds.length) md += '### 采纳提案\n\n' + a.proposalIds.map(id => proposalLine(proposal(id))).join('\n') + '\n\n';
  md += '### 制定原因\n\n' + a.reason + '\n\n';
  if (a.revisionNote) md += '**本版说明：** ' + a.revisionNote + '\n\n';
  if (a.refs.length) md += '### 外部制度比较参考\n\n' + a.refs.map(c => '- [' + c[0] + '](' + c[3] + ')：' + c[1]).join('\n') + '\n\n';
  if (a.options.length) md += '### 后续实施细则\n\n' + a.options.map((o,i) => (i+1) + '. ' + o).join('\n') + '\n\n';
}
md += '## 附录一 编辑稿中的讨论事项\n\n以下为编辑稿保留的括注，尚不视为已经通过的操作程序。\n\n' + d.discussionNotes.map(x => '- ' + x).join('\n') + '\n\n';
md += '## 附录二 历史采纳提案的完整原文\n\n以下六份提案及其 v0.3 采纳记录继续保留。删除线只用于已调整的落实说明，不改动原始提案文字。Issue 开闭状态与宪章批准、生效状态分别记录。\n\n';
for (const p of d.proposals) {
  md += '### Issue #' + p.number + ' · ' + p.title + '\n\n';
  md += '- 原始链接：[' + p.url + '](' + p.url + ')\n- 作者：`' + p.author + '`\n- 原始创建时间：`' + p.created_at + '`（UTC）\n- 原始更新时间：`' + p.updated_at + '`（UTC）\n- 采集日期：2026-11-18；采集时 Issue 状态：`' + p.state + '`；评论数：' + p.comments_count + '。\n- 历史状态：**已采纳，纳入 v' + p.adoptedVersion + '**。\n- 关联章节：' + p.articleNumbers.join('、') + '。\n- 历史落实摘要：' + p.adoptionSummary + '\n';
  if (p.revisionNote) md += '- 本版说明：' + p.revisionNote + '\n';
  md += '\n**Issue 正文原文：**\n\n```text\n' + p.body + '\n```\n\n';
}
md += '机器可读的原始采集记录见[Issue 快照](proposals/2026-11-18-issues.json)，历史文档见[宪章 v0.3](constitution-v0.3.md)，回退办法见[版本记录](version-history.md)。\n';
fs.writeFileSync(path.join(root, 'docs/constitution-v' + d.version + '.md'), md);
console.log('Generated constitution v' + d.version + '.');
