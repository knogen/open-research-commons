const sources=[
{id:"arxiv",name:"arXiv",kind:"学术预印本与版本存档",desc:"研究投稿授权、永久版本记录、作者权利及作品许可选择。",urls:[["License information","https://info.arxiv.org/help/license/index.html"],["Submittal agreement","https://info.arxiv.org/help/policies/submission_agreement.html"]],snapshots:[
{label:"永久记录与许可责任",quote:"arXiv keeps a permanent record of every article and version posted.",loc:"License Information · opening statement · lines 176–179",url:"https://info.arxiv.org/help/license/index.html",note:"平台保留版本记录；投稿者负责确认有权授予所选许可。"},
{label:"不同版本许可与不可撤销",quote:"different versions of the work can have different licenses.",loc:"License Information · How to choose a license · lines 182–190",url:"https://info.arxiv.org/help/license/index.html",note:"版本许可可不同；选择后不可撤销。"},
{label:"非独占授权与版权归属",quote:"This grant to arXiv is a non-exclusive license and is not a grant of exclusive rights or a transfer of the copyright.",loc:"Submittal Agreement · Management of Copyright · lines 210–223",url:"https://info.arxiv.org/help/policies/submission_agreement.html",note:"平台传播许可不等于版权转让。"}],borrow:"永久版本记录、作者授权确认、非独占平台存档授权、逐版本许可。",caution:"arXiv 的许可不可撤销，且不同版本可选择不同许可；不能简单概括为统一 MIT/CC BY。"},
{id:"openi",name:"OpenI 启智社区",kind:"社区宪章与开源许可",desc:"正式社区章程、会员制度、理事会/技术委员会治理、知识产权归属和贡献者许可。",urls:[["OpenI Community Charter v3.0","https://www.openi.org.cn/openi-community-charter/"],["启智开源许可证 1.1","https://www.openi.org.cn/opensource-license/"],["启智许可证汇总","https://www.openi.org.cn/openi-permit/"]],snapshots:[
{label:"社区参与主体",quote:"由相关商业实体、学术机构、自然人或任何其他法人等共建共享。",loc:"OpenI 社区章程 v3.0 · 第二条 · lines 48–52",url:"https://www.openi.org.cn/openi-community-charter/",note:"主体类型包括自然人、机构和法人。"},
{label:"组织治理",quote:"OpenI 理事平台最高权力机构为理事会",loc:"OpenI 社区章程 v3.0 · 第九条 · lines 81–89",url:"https://www.openi.org.cn/openi-community-charter/",note:"章程明确理事会及下设委员会的权责。"},
{label:"知识产权与贡献协议",quote:"会员加入前所拥有的知识产权，其全部权利仍归原权利人所有",loc:"OpenI 社区章程 v3.0 · 第二十七条 · lines 240–248",url:"https://www.openi.org.cn/openi-community-charter/",note:"区分加入前、加入后独立完成及共同完成的知识产权。"},
{label:"启智许可证商业条件",quote:"对于商业目的的使用或再发布，需要满足第五款的要求",loc:"启智开源许可证 1.1 · 第二部分第2条 · lines 48–53",url:"https://www.openi.org.cn/opensource-license/",note:"含额外商业使用条件，与 MIT 式无差别宽松许可不同。"}],borrow:"组织治理结构、贡献协议、背景知识产权与共同成果的区分。",caution:"启智开源许可证不是 MIT 的等价替代；其中商业使用附加条件需特别识别。"},
{id:"pcl",name:"OpenI PCL",kind:"AI 协同研发平台",desc:"研究代码、数据集、模型、算力任务和协同研发工作流。平台托管项目的许可证需逐项确认。",urls:[["OpenI PCL 平台","https://openi.pcl.ac.cn/"]],snapshots:[
{label:"平台快照说明",quote:"OpenI - 启智AI开源社区提供普惠算力！",loc:"OpenI PCL 平台首页页面标题 · 页面级快照；未发现可统一适用所有项目的独立社区宪章或平台总许可证",url:"https://openi.pcl.ac.cn/",note:"这是平台观察记录，不是平台原文法律条款。每个仓库、数据集和模型仍须查看自己的 LICENSE/模型许可。"}],borrow:"把代码、模型、数据集、运行任务与研发产物建立关联，形成可复现工作流。",caution:"没有证据支持将平台上所有项目推定为同一许可证。平台服务条款、仓库 LICENSE、模型和数据许可必须分别审查。"},
{id:"chinaxiv",name:"ChinaXiv",kind:"预印本发表与版权授权",desc:"预印本投稿者承诺、版权保留、平台永久传播授权、CC 许可选项及版本管理。",urls:[["许可信息声明（中文）","https://www.chinaxiv.org/user/license.htm"],["License Information（English）","https://cgg.chinaxiv.org/user/license.htm?locale=en"],["平台使用帮助","https://www.chinaxiv.org/user/help.htm"]],snapshots:[
{label:"版权保留与永久许可",quote:"平台不要求提交者转让版权，但需获得发布论文的永久许可。",loc:"许可信息声明 · 第1段 · lines 11–15",url:"https://www.chinaxiv.org/user/license.htm",note:"作者保留版权，但需授予平台非排他、不可撤销的发布许可。"},
{label:"可选 CC 许可",quote:"CC BY 4.0；CC BY-SA 4.0；CC BY-NC-SA 4.0；CC0 1.0",loc:"许可信息声明 · 许可选项 · lines 15–21",url:"https://www.chinaxiv.org/user/license.htm",note:"不同许可对应不同商业使用和衍生作品条件。"},
{label:"合作作者授权",quote:"合作作品需要取得所有作者的授权才可以提交",loc:"许可信息声明 · 提交授权 · lines 22–25",url:"https://www.chinaxiv.org/user/license.htm",note:"投稿权限与共同作者授权是独立的提交前置条件。"}],borrow:"作者保留版权、平台非独占永久授权、许可选项明示、共同作者授权。",caution:"CC BY/CC BY-SA 允许商业再利用，可能与期刊协议冲突；投稿者须先核实第三方出版合同。"},
{id:"ccf",name:"中国计算机学会 CCF",kind:"组织章程与科研伦理",desc:"学术共同体治理、科研诚信、AI 使用声明、研究过程记录、署名和评价规范。",urls:[["CCF 章程","https://www.ccf.org.cn/About_CCF/CCF_Constitution/"],["科研行为与学术道德规范（2026）","https://www.ccf.org.cn/About_CCF/CCF_Constitution/2026-07-16/915412.shtml"]],snapshots:[
{label:"AI 使用与人类主导要求",quote:"核心学术思想、实验设计、逻辑推演及关键论证须由人主导完成",loc:"科研行为与学术道德规范 · 第七条 · 2026-06-27通过",url:"https://www.ccf.org.cn/About_CCF/CCF_Constitution/2026-07-16/915412.shtml",note:"本社区已按 Issue #3 接纳相应 AI-led 成果；这里保留与 CCF 人类主导要求的制度差异作为比较说明。"},
{label:"过程可追溯",quote:"应当真实记录研究过程和结果，妥善留存原始资料，确保可追溯、可验证",loc:"科研行为与学术道德规范 · 第八条",url:"https://www.ccf.org.cn/About_CCF/CCF_Constitution/2026-07-16/915412.shtml",note:"可转化为研究日志、数据、工具版本和验证记录要求。"},
{label:"按贡献署名",quote:"成果署名应当按照对科研成果的贡献大小据实署名和排序",loc:"科研行为与学术道德规范 · 第十三条",url:"https://www.ccf.org.cn/About_CCF/CCF_Constitution/2026-07-16/915412.shtml",note:"支持以实际贡献而非身份或职位决定署名。"}],borrow:"责任与诚信、AI 使用声明、可追溯研究记录、据实署名和评价公正。",caution:"CCF 规范要求核心研究环节由人主导；本社区已采纳允许相应 AI-led 研究的规则，因此只能借鉴诚信和披露原则，不能原样移植准入要求。"},
{id:"github",name:"GitHub",kind:"代码托管、贡献协议与平台条款",desc:"研究仓库许可证、用户内容所有权、平台授权、贡献者许可及 AI 输出责任。GitHub 是协作基础设施，不是单一开源许可证。",urls:[["GitHub Terms of Service（2026-04-27生效）","https://docs.github.com/en/site-policy/github-terms/github-terms-of-service"],["Licensing a repository","https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository"],["Adding a license to a repository","https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository"]],snapshots:[
{label:"用户内容所有权",quote:"You own Your Content.",loc:"GitHub Terms of Service · D.3 Ownership and License Grants · lines 159–162",url:"https://docs.github.com/en/site-policy/github-terms/github-terms-of-service",note:"用户保留其内容所有权，同时授予平台提供服务所需许可。"},
{label:"公开仓库与 Fork",quote:"By making a repository public, you grant other Users a nonexclusive, worldwide license",loc:"GitHub Terms of Service · D.5 License Grant to Other Users · lines 167–170",url:"https://docs.github.com/en/site-policy/github-terms/github-terms-of-service",note:"GitHub ToS 的平台内查看与 fork 权利，不等于项目采用 MIT 等开源许可。"},
{label:"贡献入站/出站许可",quote:"Whenever you add Content to a repository containing notice of a license, you license that Content under the same terms",loc:"GitHub Terms of Service · D.6 Contributions Under Repository License · lines 171–174",url:"https://docs.github.com/en/site-policy/github-terms/github-terms-of-service",note:"默认 inbound=outbound；CLA 等独立协议可另行约定。"},
{label:"AI 输出核验责任",quote:"You are responsible for reviewing, testing, and validating any Output before use.",loc:"GitHub Terms of Service · J.4 Disclaimers · lines 259–263",url:"https://docs.github.com/en/site-policy/github-terms/github-terms-of-service",note:"AI 输出可能不准确、不完整或包含第三方代码；使用者应审查验证。"},
{label:"没有许可证的后果",quote:"without a license, the default copyright laws apply",loc:"GitHub Docs · Licensing a repository · Choosing the right license · lines 38–44",url:"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository",note:"公开仓库不自动等于开源；GitHub 平台内 fork 权限不替代仓库许可证。"}],borrow:"清楚分离平台服务授权与项目许可证；采用 inbound=outbound 的贡献原则；贡献者可用 CLA 明确例外；要求 AI 输出审查。",caution:"GitHub ToS 允许平台为服务提供所需的广泛内容处理许可。新社区应将自身存档许可限定到必要范围，并明确 AI 训练是否包含在内，避免默示授权。"},
{id:"wikipedia",name:"Wikipedia / Wikimedia",kind:"知识治理、可验证性与知识共享",desc:"研究可验证性、可靠来源、禁止无来源综合、AI 辅助编辑风险及 CC BY-SA 4.0/GFDL 内容许可。",urls:[["Wikimedia Foundation Terms of Use · Licensing of Content","https://foundation.wikimedia.org/wiki/Policy:Terms_of_Use#Licensing_of_Content"],["Wikipedia:Verifiability","https://en.wikipedia.org/wiki/Wikipedia:Verifiability"],["Wikipedia:No original research","https://en.wikipedia.org/wiki/Wikipedia:No_original_research"],["Wikipedia:Large language models","https://en.wikipedia.org/wiki/Wikipedia:Large_language_models"]],snapshots:[
{label:"知识内容许可",quote:"Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)",loc:"Wikimedia Foundation Terms of Use · §7 Licensing of Content · lines 390–394",url:"https://foundation.wikimedia.org/wiki/Policy:Terms_of_Use#Licensing_of_Content",note:"Wikimedia 用户贡献文本采用 CC BY-SA 4.0 与 GFDL 双许可机制；重用时应履行署名与相同方式共享要求。"},
{label:"可验证性",quote:"each fact or claim must be attributable to reliable, published sources.",loc:"Wikipedia:Verifiability · opening nutshell / Responsibility for providing citations · lines 235 onward",url:"https://en.wikipedia.org/wiki/Wikipedia:Verifiability",note:"每项事实或主张应能追溯到可靠已发表来源；可借鉴为主张级证据映射。"},
{label:"禁止无来源综合",quote:"Do not synthesize meaning from multiple sources to state or imply a conclusion not explicitly stated by any of the sources.",loc:"Wikipedia:No original research · §Synthesis of published material · lines 259–264",url:"https://en.wikipedia.org/wiki/Wikipedia:No_original_research",note:"这条是百科编辑政策，科研社区不能禁止原创综合；但可借鉴要求区分来源事实与作者自己的推论。"},
{label:"LLM 编辑风险",quote:"LLMs can make things up",loc:"Wikipedia:Large language models · §Risks / Original research and hallucinations · lines 147–153",url:"https://en.wikipedia.org/wiki/Wikipedia:Large_language_models",note:"Wikipedia 对百科条目使用 LLM 有特定限制，不应作为科研发表的普遍禁令；可借鉴其幻觉、未核实引用和透明披露风险分析。"}],borrow:"主张级来源映射、可靠来源分层、区分来源陈述与新推论、知识再利用署名与相同方式共享。",caution:"Wikipedia 的 NOR/LLM 编辑规则属于百科知识治理，不是科研论文规范。不能据此禁止科研原创发现或将其 AI 编辑禁令泛化到本社区。"}
];
const articles = constitutionData.articles;
const VERSION = constitutionData.version;
const REPO = 'https://github.com/knogen/open-research-commons';
function esc(value) {
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function evidenceText(text) {
  return esc(text).replace(/~~([\s\S]+?)~~/g, '<del>$1</del>');
}
function paragraphs(text, className) {
  return String(text).split(/\n\n+/).map(p => '<p' + (className ? ' class="' + className + '"' : '') + '>' + evidenceText(p).replace(/\n/g, '<br>') + '</p>').join('');
}
function cite(c) {
  return '<span class="ref"><a href="' + esc(c[3]) + '" target="_blank" rel="noreferrer">[' + esc(c[0]) + '] ↗</a><span>' + evidenceText(c[1]) + '</span></span>';
}
function printBar(title) {
  return '<div class="printbar"><span>DOCUMENT VIEW · ' + esc(title) + '</span><button class="btn print-btn" onclick="window.print()">打印 / 导出 PDF ↗</button></div>';
}
function sourceCards() {
  return sources.map(s => '<article class="card"><span class="tag">' + esc(s.kind) + '</span><h3>' + esc(s.name) + '</h3><p>' + esc(s.desc) + '</p><a href="#/references/' + esc(s.id) + '">查看原文快照与分析 →</a></article>').join('');
}
function home() {
  return '<section class="hero"><div class="wrap"><div class="eyebrow">OPEN RESEARCH · HUMAN–AI COLLABORATION</div><h1>数学起步，<br>开放核查与协作。</h1><p>面向人类研究者与 AI Agent，初期服务数学及相关研究。接收论文、证明、代码和配套材料，按成果类别公开材料、记录核查，并支持持续讨论与协作。</p><div class="actions"><a class="btn primary" href="#/constitution">阅读宪章 v' + VERSION + ' →</a><a class="btn ghost" href="#/verification">查看核查与参与方式</a></div><div class="stats"><div class="stat"><strong>06</strong><span>历史采纳提案</span></div><div class="stat"><strong>10</strong><span>宪章章节</span></div><div class="stat"><strong>v' + VERSION + '</strong><span>讨论稿</span></div></div></div></section><section class="section"><div class="wrap"><div class="kicker">COMMUNITY DECISIONS</div><h2>从社区提案，到当前规则</h2><div class="callout">v0.4 依编辑修订稿更新十章正文。数学定理或证明类投稿须提供支撑主要结论的形式化证明文件；Lean 为主要支持工具，也接受符合公布标准的其他系统。既有提案及制定记录继续保留。</div><p><a class="textlink" href="#/constitution">阅读条款与完整提案原文 →</a>　<a class="textlink" href="#/versions">查看版本记录与回退点 →</a></p></div></section><section class="section white"><div class="wrap"><div class="section-head"><div><div class="kicker">REFERENCE LIBRARY</div><h2>制度原文与来源快照</h2><p class="section-intro">社区提案与编辑修订稿保留为制定记录。以下外部制度用于比较，并链接到原始条文。</p></div></div><div class="grid">' + sourceCards() + '</div></div></section>';
}
function references() {
  return '<section class="section"><div class="wrap"><div class="kicker">PRIMARY SOURCE ARCHIVE</div><h1>制度参考档案</h1><p class="section-intro">快照保存原文短摘录与定位，第三方内容保持其原有版权和许可。当前宪章以编辑修订稿为准；历史提案与外部制度继续用于追溯和比较。</p><p><a class="textlink" href="#/constitution">查看已采纳提案与宪章 →</a></p><div class="grid">' + sourceCards() + '</div></div></section>';
}
function sourcePage(id) {
  const s = sources.find(x => x.id === id);
  if (!s) return notFound();
  return '<section class="section"><div class="wrap"><div class="kicker">PRIMARY SOURCE SNAPSHOT / CAPTURED 2026-11-17</div><h1>' + esc(s.name) + '</h1><p class="section-intro">' + esc(s.desc) + '</p><div class="prose"><h2>原始文件</h2>' + s.urls.map(u => '<div class="source"><h3>' + esc(u[0]) + '</h3><a href="' + esc(u[1]) + '" target="_blank" rel="noreferrer">' + esc(u[1]) + ' ↗</a></div>').join('') + '<h2>原文快照</h2><p class="section-intro">以下为关键原文短摘录，保留原始语言；定位信息用于回到原文核验。</p>' + s.snapshots.map((q,i) => {
    const url = new URL(q.url);
    url.hash = url.hash.replace(/^#/, '').split(':~:')[0] + ':~:text=' + encodeURIComponent(q.quote);
    return '<article class="snapshot"><div class="source-meta">SNAPSHOT ' + String(i+1).padStart(2,'0') + ' · ' + esc(q.loc) + '</div><blockquote>' + esc(q.quote) + '</blockquote><p>' + esc(q.note) + '</p><a href="' + esc(url.href) + '" target="_blank" rel="noreferrer">定位原文段落 ↗</a></article>';
  }).join('') + '<h2>借鉴与边界</h2><div class="callout">' + esc(s.borrow) + '</div><div class="callout warning">' + esc(s.caution) + '</div><p class="source-meta">采集日期：2026-11-17。第三方比较资料不替代本社区已采纳的 Issue 提案。</p></div></div></section>';
}
function proposalReference(id) {
  const proposal = constitutionData.proposals.find(p => p.number === id);
  if (!proposal) throw new Error('Unknown proposal #' + id);
  return '<div class="ref proposal-ref"><a href="' + esc(proposal.url) + '" target="_blank" rel="noreferrer">Issue #' + proposal.number + ' · ' + esc(proposal.title) + ' ↗</a><span>' + evidenceText(proposal.adoptionSummary) + '</span><small>已采纳 · v' + esc(proposal.adoptedVersion) + '</small>' + (proposal.revisionNote ? '<p class="revision-note">' + esc(proposal.revisionNote) + '</p>' : '') + '</div>';
}
function proposalAppendix() {
  return '<section class="proposal-appendix"><h2>附录二：历史采纳提案原文</h2><p>以下完整保留六份提案及其 v0.3 采纳记录。删除线仅标记本版已调整的落实说明；原始提案文字不作改写。</p>' + constitutionData.proposals.map(p => {
    const updated = new Intl.DateTimeFormat('zh-CN', {timeZone:'Asia/Shanghai', dateStyle:'medium', timeStyle:'short'}).format(new Date(p.updated_at));
    return '<article class="proposal-quote" id="proposal-' + p.number + '"><div class="proposal-heading"><span class="tag">已采纳 · v' + esc(p.adoptedVersion) + '</span><h3><a href="' + esc(p.url) + '" target="_blank" rel="noreferrer">Issue #' + p.number + ' · ' + esc(p.title) + ' ↗</a></h3></div><p class="source-meta">提案作者 @' + esc(p.author) + ' · 原提案更新于 ' + esc(updated) + '（北京时间） · 采集时状态 ' + esc(p.state) + '</p><blockquote class="proposal-body">' + esc(p.body) + '</blockquote><p><b>历史采纳落实：</b>' + evidenceText(p.adoptionSummary) + '</p>' + (p.revisionNote ? '<p class="revision-note"><b>本版说明：</b>' + esc(p.revisionNote) + '</p>' : '') + '<p class="source-meta">关联章节：' + p.articleNumbers.map(n => '第 ' + n + ' 章').join('、') + '</p></article>';
  }).join('') + '<p><a class="textlink" href="' + REPO + '/blob/main/docs/proposals/2026-11-18-issues.json" target="_blank" rel="noreferrer">查看提案原文与采集记录 ↗</a></p></section>';
}
function constitution() {
  return '<section class="section"><div class="wrap">' + printBar('CONSTITUTION v' + VERSION) + '<div class="kicker">COMMUNITY CONSTITUTION · v' + VERSION + '</div><h1>' + esc(constitutionData.title) + '</h1><p class="section-intro">正文依编辑修订稿更新。采纳提案、制定原因和外部参考作为制定记录保留于各章下方。</p><div class="callout"><b>本次修订依据：</b>' + esc(constitutionData.issuePriority) + '</div><p class="version-status">' + esc(constitutionData.status) + '</p><div class="version-links"><a href="#/versions">版本记录与回退点 →</a><a href="' + REPO + '/blob/main/docs/constitution-v0.4.md" target="_blank" rel="noreferrer">查看 Markdown 原文 ↗</a><a href="#/verification">配套核验规范 →</a><a href="' + REPO + '/blob/main/docs/proposals/2026-11-18-edited-draft.md" target="_blank" rel="noreferrer">编辑修订稿原文 ↗</a></div><p class="evidence-note">' + esc(constitutionData.evidenceNote) + '</p><div class="prose">' + articles.map((a,i) => '<article class="article-doc"><div class="source-meta">ARTICLE ' + String(i+1).padStart(2,'0') + '</div><h2>' + esc(a.title) + '</h2>' + paragraphs(a.text, 'article-text') + (a.proposalIds.length ? '<h3>采纳提案</h3><div class="refs">' + a.proposalIds.map(proposalReference).join('') + '</div>' : '') + '<h3>制定原因</h3>' + paragraphs(a.reason) + (a.revisionNote ? '<p class="revision-note"><b>本版说明：</b>' + esc(a.revisionNote) + '</p>' : '') + (a.refs.length ? '<h3>外部制度比较参考</h3><div class="refs">' + a.refs.map(cite).join('') + '</div>' : '') + (a.options.length ? '<h3>后续实施细则</h3><ol>' + a.options.map(o => '<li>' + evidenceText(o) + '</li>').join('') + '</ol>' : '') + '<a class="textlink issue-link" href="' + REPO + '/issues/new?title=' + encodeURIComponent('宪章讨论：' + a.title) + '&body=' + encodeURIComponent('版本：v' + VERSION + '\n条款：' + a.title + '\n\n建议修改：\n\n理由及来源：') + '" target="_blank" rel="noreferrer">针对本章提出后续讨论 ↗</a></article>').join('') + '<section class="discussion-appendix"><h2>附录一：编辑稿中的讨论事项</h2><p>以下为稿中保留的括注，尚不视为已经通过的操作程序。</p><ul>' + constitutionData.discussionNotes.map(n => '<li>' + esc(n) + '</li>').join('') + '</ul></section>' + proposalAppendix() + '</div><p class="source-meta">v' + VERSION + ' · ' + esc(constitutionData.date) + ' · 升级前版本已保存在独立分支。</p></div></section>';
}
function documentPage(key, label) {
  const page = documentContent.pages[key];
  const pageVersion = page.version || VERSION;
  return '<section class="section"><div class="wrap">' + printBar(label + ' v' + pageVersion) + '<div class="kicker">' + esc(label) + ' · v' + pageVersion + '</div><div class="prose document-body">' + page.html + '</div><p class="source-meta"><a href="' + REPO + '/blob/main/' + esc(page.source) + '" target="_blank" rel="noreferrer">查看本页文档原文 ↗</a></p></div></section>';
}
function licenses() { return documentPage('licenses', 'LICENSE SYSTEM'); }
function verification() { return documentPage('verification', 'EVIDENCE & COLLABORATION'); }
function versions() { return documentPage('versions', 'VERSION HISTORY'); }
function about() {
  return '<section class="section"><div class="wrap"><div class="kicker">ABOUT</div><h1>项目说明</h1><div class="prose"><p>Open Research Commons 初期服务数学及相关研究，探索人类与 AI 协作的发表、核查和开放贡献制度。当前版本为 v' + VERSION + ' 讨论稿。</p><h2>提案、引用与版本</h2><ul><li>本次正文依据编辑修订稿；历史提案原文和采纳说明附在宪章下方，已调整的解释加删除线。</li><li>外部制度保存短摘录、来源 URL 与条款定位，用于比较参考；第三方材料保留原有权利和许可。</li><li>当前有权授权的原创材料统一采用 MIT，并注明实际版权人、覆盖范围和第三方例外。</li><li>旧版本文件及完整保存分支保留，历史已授许可不会因版本更新而撤销。</li></ul><p><a class="textlink" href="#/constitution">阅读当前宪章 →</a>　<a class="textlink" href="#/versions">版本记录与回退 →</a></p><h2>项目仓库</h2><p><a class="textlink" href="' + REPO + '" target="_blank" rel="noreferrer">knogen/open-research-commons ↗</a></p></div></div></section>';
}
function notFound() { return '<section class="section wrap"><h1>页面不存在</h1><a href="#/">返回首页</a></section>'; }
function render() {
  const route = location.hash.replace(/^#\/?/, '').split('/');
  let html, title;
  if (!route[0]) { html = home(); title = '开放科研共同体'; }
  else if (route[0] === 'references') { html = route[1] ? sourcePage(route[1]) : references(); title = '制度参考'; }
  else if (route[0] === 'constitution') { html = constitution(); title = '社区宪章 v' + VERSION; }
  else if (route[0] === 'licenses') { html = licenses(); title = '许可制度 v' + documentContent.pages.licenses.version; }
  else if (route[0] === 'verification') { html = verification(); title = '核验与开放协作 v' + VERSION; }
  else if (route[0] === 'versions') { html = versions(); title = '版本记录与回退'; }
  else if (route[0] === 'about') { html = about(); title = '项目说明'; }
  else { html = notFound(); title = '页面不存在'; }
  document.getElementById('app').innerHTML = html;
  document.title = title + ' · Open Research Commons';
  document.querySelector('#nav')?.classList.remove('open');
  document.getElementById('menu').setAttribute('aria-expanded', 'false');
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', render);
document.getElementById('menu').addEventListener('click', () => {
  const open = document.getElementById('nav').classList.toggle('open');
  document.getElementById('menu').setAttribute('aria-expanded', String(open));
});
render();
