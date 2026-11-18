// Local authoring tool; the published site needs no build or runtime dependency.
// Install the pinned parser with: npm install --no-save --package-lock=false marked@17.0.5
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const version = '0.4';
const sources = {
  licenses: 'docs/license-system-v0.3.md',
  verification: 'docs/verification-labels-v0.4.md',
  versions: 'docs/version-history.md',
};
const routes = {
  'docs/constitution-v0.4.md': '#/constitution',
  'docs/license-system-v0.3.md': '#/licenses',
  'docs/verification-labels-v0.4.md': '#/verification',
  'docs/version-history.md': '#/versions',
};
const escapeHtml = value => String(value).replace(/[&<>"']/g, ch => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[ch]));

async function main() {
  const { Marked } = await import(require.resolve('marked'));
  const pages = {};
  for (const [key, source] of Object.entries(sources)) {
    const markdown = fs.readFileSync(path.join(root, source), 'utf8');
    const parser = new Marked({ gfm: true, breaks: false });
    parser.use({ renderer: {
      html({ text }) { return escapeHtml(text); },
      link({ href, title, tokens }) {
        const label = this.parser.parseInline(tokens);
        if (/^(?:javascript|data|vbscript):/i.test(href)) return label;
        let target = href;
        if (!/^(?:https?:|mailto:|#)/i.test(href)) {
          const [relative, fragment] = href.split('#', 2);
          const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(source), relative));
          target = routes[resolved] || 'https://github.com/knogen/open-research-commons/blob/main/' + resolved + (fragment ? '#' + fragment : '');
        }
        const external = /^https?:/i.test(target) ? ' target="_blank" rel="noreferrer"' : '';
        return '<a href="' + escapeHtml(target) + '"' + (title ? ' title="' + escapeHtml(title) + '"' : '') + external + '>' + label + '</a>';
      },
    } });
    const html = parser.parse(markdown).replaceAll('<table>', '<div class="tablewrap"><table>').replaceAll('</table>', '</table></div>');
    pages[key] = { source, version: markdown.match(/^# .*?v(\d+\.\d+)/m)?.[1] || version, html };
  }
  fs.writeFileSync(path.join(root, 'assets/document-content.js'),
    '// Generated from the current Markdown documents by scripts/build-doc-pages.cjs.\n' +
    'const documentContent = ' + JSON.stringify({ version, pages }, null, 2) + ';\n');
  console.log('Generated document-content.js from ' + Object.keys(pages).length + ' Markdown documents.');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
