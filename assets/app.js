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
{label:"AI 使用与人类主导要求",quote:"核心学术思想、实验设计、逻辑推演及关键论证须由人主导完成",loc:"科研行为与学术道德规范 · 第七条 · 2026-06-27通过",url:"https://www.ccf.org.cn/About_CCF/CCF_Constitution/2026-07-16/915412.shtml",note:"本版接收由人与智能体或多个智能体协作形成的成果；这里保留与 CCF 人类主导要求的制度差异作为比较说明。"},
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
const REPO = 'https://github.com/knogen/open-research-commons';
const latest = documentContent.latest;
const editions = documentContent.editions;
const archivedHtml = new Map();
function esc(value) {
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function printBar(title) {
  return '<div class="printbar"><span>' + esc(title) + '</span><button class="btn print-btn" onclick="window.print()">打印 / 导出 PDF</button></div>';
}
function editionPicker(entry) {
  const old = editions.filter(e => e.id !== latest).map(e =>
    '<option value="' + esc(e.id) + '"' + (e.id === entry.id ? ' selected' : '') + '>' + esc(e.label) + '</option>').join('');
  return '<div class="edition-tools"><label for="edition-picker">文档版本</label><select id="edition-picker">' +
    '<option value="latest"' + (entry.id === latest ? ' selected' : '') + '>Latest · ' + esc(latest) +
    '</option><optgroup label="历史版本 · Old versions">' + old + '</optgroup></select>' +
    '<a href="#/constitution/' + esc(entry.id) + '">本版固定链接</a><a href="#/versions">版本记录</a></div>';
}
function charterPage(entry) {
  const content = entry.html || archivedHtml.get(entry.id) || '<p role="status">正在载入历史正文…</p>';
  const heading = (entry.id === latest ? '最新讨论稿' : '历史版本') + ' · ' + entry.label;
  return '<section class="section"><div class="wrap reader">' + editionPicker(entry) + printBar(heading) +
    '<div class="prose document-body charter-body" id="edition-content">' + content + '</div>' +
    '<p class="version-links"><a target="_blank" rel="noreferrer" href="' + esc(entry.sourceUrl) + '">查看本版 Markdown 原文 ↗</a></p></div></section>';
}
async function loadArchive(entry, container) {
  try {
    const response = await fetch(entry.asset);
    if (!response.ok) throw Error('HTTP ' + response.status);
    const html = await response.text();
    if (!html.startsWith('<h1>')) throw Error('Missing archived document');
    archivedHtml.set(entry.id, html);
    // The original container is detached if the reader has already switched pages.
    container.innerHTML = html;
  } catch {
    container.innerHTML = '<p role="alert">历史正文加载失败。<button type="button">重新加载</button> 或 <a href="' +
      esc(entry.sourceUrl) + '">打开对应提交的原文</a>。</p>';
    container.querySelector('button').onclick = () => loadArchive(entry, container);
  }
}
function home() {
  return '<section class="hero"><div class="wrap"><h1>开放科研共同体</h1><p>面向各学科的研究者及所有愿意参与研究和知识共享的人，提供成果发表、材料共享和持续协作的空间。</p><div class="actions"><a class="btn primary" href="#/constitution/latest">阅读基本规则 ' +
    esc(latest) + '</a><a class="btn ghost" href="#/versions">浏览历史版本</a></div></div></section>' +
    '<section class="section"><div class="wrap"><h2>制度参考档案</h2><div class="grid">' + sourceCards() + '</div></div></section>';
}
function sourceCards() {
  return sources.map(s => '<article class="card"><span class="tag">' + esc(s.kind) + '</span><h3>' + esc(s.name) + '</h3><p>' + esc(s.desc) + '</p><a href="#/references/' + esc(s.id) + '">查看原文快照与分析 →</a></article>').join('');
}
function references() {
  return '<section class="section"><div class="wrap"><div class="kicker">PRIMARY SOURCE ARCHIVE</div><h1>制度参考档案</h1><p class="section-intro">快照保存原文短摘录与定位，第三方内容保持其原有版权和许可。当前讨论稿为 ' + esc(latest) + '。历史提案与外部制度可按来源查阅。</p><p><a class="textlink" href="#/constitution">查看基本规则与相关提案 →</a></p><div class="grid">' + sourceCards() + '</div></div></section>';
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
function documentPage(key, label) {
  const page = documentContent.pages[key];
  const pageVersion = page.version;
  return '<section class="section"><div class="wrap">' + printBar(label + ' v' + pageVersion) + '<div class="kicker">' + esc(label) + ' · v' + pageVersion + '</div><div class="prose document-body">' + page.html + '</div><p class="source-meta"><a href="' + REPO + '/blob/main/' + esc(page.source) + '" target="_blank" rel="noreferrer">查看本页文档原文 ↗</a></p></div></section>';
}
function versions() {
  const links = editions.map(e => '<li><a href="#/constitution/' + esc(e.id) + '">' + esc(e.label) + '</a></li>').join('');
  return documentPage('versions', '版本记录').replace('</h1>', '</h1><ul class="edition-index">' + links + '</ul>');
}
function about() {
  return '<section class="section wrap"><h1>关于开放科研共同体</h1><p>社区面向各学科，支持研究者与智能体参与成果发表、核查及协作。</p><p class="version-links"><a href="#/constitution/latest">基本规则</a><a href="#/versions">历版宪章</a><a href="' + REPO + '">项目仓库</a></p></section>';
}
function notFound() { return '<section class="section wrap"><h1>页面不存在</h1><a href="#/">返回首页</a></section>'; }
function render() {
  const route = location.hash.replace(/^#\/?/, '').split('/');
  let html, title, entry;
  if (!route[0]) { html = home(); title = '开放科研共同体'; }
  else if (route[0] === 'references') { html = route[1] ? sourcePage(route[1]) : references(); title = '制度参考'; }
  else if (route[0] === 'constitution') {
    const id = !route[1] || route[1] === 'latest' ? latest : route[1];
    entry = route.length <= 2 && editions.find(e => e.id === id);
    html = entry ? charterPage(entry) : notFound();
    title = entry ? entry.label : '版本不存在';
  }
  else if (route[0] === 'licenses' && (!route[1] || route[1] === 'v0.3')) {
    const key = route[1] ? 'licenses/v0.3' : 'licenses';
    html = documentPage(key, route[1] ? '历史许可目录' : '成果许可');
    title = '成果许可 v' + documentContent.pages[key].version;
  }
  else if (route[0] === 'verification') { html = documentPage('verification', '投稿分类与核查记录'); title = '核查记录 ' + latest; }
  else if (route[0] === 'versions') { html = versions(); title = '版本记录与回退'; }
  else if (route[0] === 'about') { html = about(); title = '项目说明'; }
  else { html = notFound(); title = '页面不存在'; }
  document.getElementById('app').innerHTML = html;
  if (entry) {
    document.getElementById('edition-picker').onchange = event => {
      location.hash = '#/constitution/' + event.target.value;
    };
    if (entry.asset && !archivedHtml.has(entry.id)) loadArchive(entry, document.getElementById('edition-content'));
  }
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
