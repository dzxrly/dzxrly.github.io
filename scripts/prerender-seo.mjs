import { spawnSync } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadSiteModule } from './load-site-module.mjs';

const [navigation, seo, { default: messages }] = await Promise.all([
  loadSiteModule('../src/site/navigation.ts'),
  loadSiteModule('../src/site/seo.ts'),
  loadSiteModule('../src/i18n/index.ts'),
]);
const { defaultLocale, locales, localizedPath, pages, siteLocales, sitePages } = navigation;
const { alternateUrls, pageItems, pageMeta, pageUrl, primaryNavigation, profileContent } = seo;
const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const outDir = fileURLToPath(new URL('../dist/spa/', import.meta.url));
const [template, repos] = await Promise.all([
  readFile(join(outDir, 'index.html'), 'utf8'),
  readFile(new URL('../src/data/github-repos-snapshot.json', import.meta.url), 'utf8').then(
    JSON.parse,
  ),
]);

const appRoot = /<div id=(?:"q-app"|'q-app'|q-app)>\s*<\/div>/;
if (
  !appRoot.test(template) ||
  !/<title>[^<]*<\/title>/.test(template) ||
  !template.includes('</head>')
) {
  throw new Error('The Quasar build is missing the expected title, head, or empty #q-app element.');
}

function escapeHtml(value) {
  const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return String(value).replace(/[&<>"']/g, (character) => entities[character]);
}

function list(values) {
  return `<ul>\n${values.map((value) => `  <li>${value}</li>`).join('\n')}\n</ul>`;
}

function link({ source, url }) {
  return `<a href="${escapeHtml(url)}">${escapeHtml(source)}</a>`;
}

function renderContent(page, locale) {
  const copy = messages[locale];
  if (!page) {
    return `<h1>404 · ${escapeHtml(copy.navigation.notFound)}</h1>
<p>${escapeHtml(copy.navigation.notFoundDescription)}</p>
${link({ source: copy.navigation.home, url: localizedPath(pages.home, locale) })}`;
  }

  const { title, description } = copy.seo[page];
  const languages = siteLocales.map((other) => {
    const { lang, label } = locales[other];
    return `<a lang="${lang}" hreflang="${lang}" href="${localizedPath(pages[page], other)}">${escapeHtml(label)}</a>`;
  });
  const navigation = `<nav aria-label="${escapeHtml(copy.navigation.primary)}">
${list(primaryNavigation(locale).map(link))}
</nav>
<nav aria-label="${escapeHtml(copy.navigation.languages)}">
${list(languages)}
</nav>`;

  const items = pageItems(page, locale, repos);
  let body = '';
  if (page === 'about') {
    const { interests, links } = profileContent(locale);
    body = `<img src="/avatar_s.png" width="460" height="460" alt="Egg Targaryen · Reshiram">
${list(interests.map(escapeHtml))}
${list(links.map(link))}`;
  } else if (items.length) {
    body = list(
      items.map(({ name, description, detail, links }) => {
        const heading = page === 'tools' ? link(links[0]) : escapeHtml(name);
        return [
          `<h2>${heading}</h2>`,
          description && `<p>${escapeHtml(description)}</p>`,
          detail && `<p>${escapeHtml(detail)}</p>`,
          page !== 'tools' && links.map(link).join(' '),
        ]
          .filter(Boolean)
          .join('\n');
      }),
    );
  }

  return `<h1>${escapeHtml(title)}</h1>
<p>${escapeHtml(description)}</p>
${navigation}
${body}`;
}

function renderPage(page, locale) {
  const { title, meta, link, script } = pageMeta(page, locale, repos);
  const head = [];
  for (const [tag, records] of Object.entries({ meta, link, script })) {
    for (const record of Object.values(records ?? {})) {
      const { innerHTML, ...attributes } = record;
      const attrs = Object.entries(attributes)
        .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
        .join(' ');
      head.push(
        `<${tag} data-prerender-seo ${attrs}>${innerHTML === undefined ? '' : `${innerHTML}</${tag}>`}`,
      );
    }
  }

  return template
    .replace(/<html\b[^>]*>/, `<html lang="${locales[locale].lang}">`)
    .replace(/<title>[^<]*<\/title>/, () => `<title>${escapeHtml(title)}</title>`)
    .replace('</head>', () => `\n${head.join('\n')}\n</head>`)
    .replace(
      appRoot,
      () =>
        `<div id="q-app"><main class="prerendered-page">\n${renderContent(page, locale)}\n</main></div>`,
    );
}

const buildDate = new Date().toISOString().slice(0, 10);
const pageContentFile = {
  tools: 'src/data/tools-sites-list.ts',
  projects: 'src/data/github-repos-snapshot.json',
  gamemods: 'src/data/game-mod-list.ts',
  monsterhunterseries: 'src/data/game-mod-list.ts',
  pragmata: 'src/data/game-mod-list.ts',
  opensource: 'src/data/open-source-list.ts',
  pypi: 'src/data/open-source-list.ts',
  about: 'src/data/personal-info.ts',
};

function sourceLastModified(page, locale) {
  const files = [`src/i18n/${locale}/index.ts`, 'src/site/navigation.ts', 'src/site/seo.ts'];
  if (pageContentFile[page]) files.push(pageContentFile[page]);

  const { status, stdout } = spawnSync('git', ['log', '-1', '--format=%cs', '--', ...files], {
    cwd: projectRoot,
    encoding: 'utf8',
    windowsHide: true,
  });
  return status === 0 && stdout.trim() ? stdout.trim() : buildDate;
}

const projectsLastModified = repos.reduce((latest, repo) => {
  const updated = repo.updated_at?.slice(0, 10);
  return updated && updated > latest ? updated : latest;
}, '');

const writes = [];
const sitemap = [];
for (const locale of siteLocales) {
  for (const page of sitePages) {
    const pathname = localizedPath(pages[page], locale);
    const filename = join(outDir, pathname.slice(1), 'index.html');
    const sourceDate = sourceLastModified(page, locale);
    const lastmod =
      page === 'projects' && projectsLastModified > sourceDate ? projectsLastModified : sourceDate;
    const alternates = alternateUrls(page).map(
      ({ hreflang, href }) =>
        `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${escapeHtml(href)}" />`,
    );
    sitemap.push(
      `  <url>\n    <loc>${escapeHtml(pageUrl(page, locale))}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates.join('\n')}\n  </url>`,
    );
    writes.push(
      mkdir(dirname(filename), { recursive: true }).then(() =>
        writeFile(filename, renderPage(page, locale)),
      ),
    );
  }
}

await Promise.all([
  ...writes,
  writeFile(join(outDir, '404.html'), renderPage(undefined, defaultLocale)),
  writeFile(
    join(outDir, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemap.join('\n')}
</urlset>
`,
  ),
]);

console.log(`Prerendered ${sitemap.length} localized pages, 404.html, and sitemap.xml.`);
