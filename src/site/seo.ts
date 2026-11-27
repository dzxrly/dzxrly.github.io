import type { GitHubRepo } from 'src/api/github-repos';
import gameMods from 'src/data/game-mod-list';
import packages from 'src/data/open-source-list';
import personal from 'src/data/personal-info';
import tools from 'src/data/tools-sites-list';
import messages from 'src/i18n';
import { OpenSourcePackageRegistry } from 'src/interface/open-source-interface';
import { defaultLocale, locales, localizedPath, pages, siteLocales } from './navigation';
import type { SiteLocale, SitePage } from './navigation';

const origin = 'https://eggtargaryen.com';
const siteName = "Egg Targaryen's Dock";
const blogUrl = 'https://blog.eggtargaryen.com';
const image = `${origin}/avatar.png`;

const person = {
  '@type': 'Person',
  '@id': `${origin}/#person`,
  name: 'Egg Targaryen',
  alternateName: 'dzxrly',
  url: `${origin}/about/`,
  image,
  sameAs: [
    blogUrl,
    ...personal.personalWebSiteList
      .map(({ url }) => url)
      .filter((url) => url.startsWith('https://')),
  ],
  knowsAbout: [
    'Deep Learning',
    'Computer Vision',
    'Astronomical Data Analysis',
    'Android Development',
    'Web Frontend Development',
    'Game Modding',
  ],
};

interface PageItem {
  name: string;
  description?: string;
  detail?: string;
  links: { source: string; url: string }[];
}

const navPages = ['home', 'tools', 'projects', 'gamemods', 'opensource', 'about'] as const;

export function primaryNavigation(locale: SiteLocale) {
  const copy = messages[locale];
  const labels = [
    copy.homeTitle,
    copy.toolsBtnTitle,
    copy.homeBtnMyProjects,
    copy.homeBtnGameMods,
    copy.homeBtnOpenSource,
    copy.homeBtnPersonal,
  ];
  return [
    ...navPages.map((page, index) => ({
      source: labels[index]!,
      url: localizedPath(pages[page], locale),
    })),
    { source: copy.blogBtnTitle, url: blogUrl },
  ];
}

export function pageItems(page: SitePage, locale: SiteLocale, repos: GitHubRepo[]): PageItem[] {
  const copy = messages[locale];
  switch (page) {
    case 'tools':
      return tools.toolsSitesList.map(({ siteName, siteDesc, siteUrl }) => ({
        name: siteName[locale],
        description: siteDesc[locale],
        links: [{ source: siteName[locale], url: siteUrl }],
      }));
    case 'projects':
      return repos.map((repo) => ({
        name: repo.name,
        ...(repo.description ? { description: repo.description } : {}),
        detail: `${copy.projectFields.language}: ${repo.language ?? copy.projectFields.unknownLanguage} · ${copy.projectFields.stars}: ${repo.stargazers_count}`,
        links: [{ source: copy.projectRepoOpenButton, url: repo.html_url }],
      }));
    case 'gamemods':
    case 'opensource': {
      const children =
        page === 'gamemods'
          ? ([
              ['monsterhunterseries', copy.gameModBtnGameNameMHSeries],
              ['pragmata', copy.gameModBtnGameNamePragmata],
            ] as const)
          : ([['pypi', copy.openSourceBtnRegistryPypi]] as const);
      return children.map(([child, label]) => ({
        name: copy.seo[child].title,
        description: copy.seo[child].description,
        links: [{ source: label, url: localizedPath(pages[child], locale) }],
      }));
    }
    case 'monsterhunterseries':
    case 'pragmata':
      return gameMods.gameModList
        .filter(({ gameSeries }) => gameSeries === page)
        .reverse()
        .map((mod) => ({
          name: mod.modName[locale],
          description: mod.modDescription[locale],
          detail: mod.gameName[locale],
          links: mod.modDownloadLink,
        }));
    case 'pypi':
      return packages.openSourcePackageList
        .filter(({ packageRegistry }) => packageRegistry === OpenSourcePackageRegistry.PYPI)
        .reverse()
        .map((pkg) => ({
          name: pkg.packageName,
          description: pkg.packageDescription[locale],
          detail: pkg.packageRegistryName,
          links: pkg.packageLink,
        }));
    case 'home':
    case 'about':
      return [];
  }
}

export function profileContent(locale: SiteLocale) {
  const copy = messages[locale];
  return {
    interests: [
      copy.homePersonalInfoChip1,
      copy.homePersonalInfoChip2,
      copy.homePersonalInfoChip3,
      copy.homePersonalInfoChip4,
      copy.homePersonalInfoChip5,
      copy.homePersonalInfoChip6,
      copy.homePersonalInfoChip7,
    ],
    links: personal.personalWebSiteList.map(({ name, url }) => ({ source: name, url })),
  };
}

export function pageUrl(page: SitePage, locale: SiteLocale) {
  return `${origin}${localizedPath(pages[page], locale)}`;
}

export function alternateUrls(page: SitePage) {
  return [
    ...siteLocales.map((locale) => ({
      hreflang: locales[locale].lang,
      href: pageUrl(page, locale),
    })),
    { hreflang: 'x-default', href: pageUrl(page, defaultLocale) },
  ];
}

function structuredData(page: SitePage, locale: SiteLocale, repos: GitHubRepo[]) {
  const { title: name, description } = messages[locale].seo[page];
  const inLanguage = locales[locale].lang;
  const url = pageUrl(page, locale);
  const siteId = `${origin}/#website`;
  if (page === 'home') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': siteId,
          name,
          description,
          url,
          inLanguage,
          author: { '@id': person['@id'] },
        },
        person,
      ],
    };
  }

  const parent = {
    monsterhunterseries: 'gamemods',
    pragmata: 'gamemods',
    pypi: 'opensource',
  } as const;
  const trail: SitePage[] =
    page === 'monsterhunterseries' || page === 'pragmata' || page === 'pypi'
      ? ['home', parent[page], page]
      : ['home', page];

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumbs`,
    itemListElement: trail.map((step, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: messages[locale].seo[step].title,
      item: pageUrl(step, locale),
    })),
  };
  const webpage = {
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage,
    isPartOf: { '@id': siteId },
    breadcrumb: { '@id': breadcrumb['@id'] },
  };

  if (page === 'about') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'ProfilePage', ...webpage, mainEntity: { '@id': person['@id'] } },
        person,
        breadcrumb,
      ],
    };
  }

  const items = pageItems(page, locale, repos);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        ...webpage,
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: items.length,
          itemListElement: items.map(({ name, description, links }, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name,
            description,
            url: new URL(links[0]!.url, origin).href,
          })),
        },
      },
      breadcrumb,
    ],
  };
}

export function pageMeta(page: SitePage | undefined, locale: SiteLocale, repos: GitHubRepo[]) {
  const copy = messages[locale];
  if (!page) {
    return {
      title: `404 · ${copy.navigation.notFound} | ${siteName}`,
      meta: {
        description: { name: 'description', content: copy.navigation.notFoundDescription },
        robots: { name: 'robots', content: 'noindex, nofollow' },
      },
    };
  }

  const { title: pageTitle, description } = copy.seo[page];
  const title = page === 'home' ? pageTitle : `${pageTitle} | ${copy.seo.home.title}`;
  const canonical = pageUrl(page, locale);
  const ogAlternates = Object.fromEntries(
    siteLocales
      .filter((other) => other !== locale)
      .map((other) => [
        `ogAlternate-${other}`,
        { property: 'og:locale:alternate', content: locales[other].og },
      ]),
  );

  return {
    title,
    meta: {
      description: { name: 'description', content: description },
      robots: { name: 'robots', content: 'index, follow' },
      ogSiteName: { property: 'og:site_name', content: copy.seo.home.title },
      ogType: { property: 'og:type', content: page === 'about' ? 'profile' : 'website' },
      ogTitle: { property: 'og:title', content: title },
      ogDescription: { property: 'og:description', content: description },
      ogUrl: { property: 'og:url', content: canonical },
      ogImage: { property: 'og:image', content: image },
      ogLocale: { property: 'og:locale', content: locales[locale].og },
      ...ogAlternates,
      twitterCard: { name: 'twitter:card', content: 'summary' },
      twitterTitle: { name: 'twitter:title', content: title },
      twitterDescription: { name: 'twitter:description', content: description },
      twitterImage: { name: 'twitter:image', content: image },
    },
    link: {
      canonical: { rel: 'canonical', href: canonical },
      ...Object.fromEntries(
        alternateUrls(page).map(({ hreflang, href }) => [
          `alternate-${hreflang}`,
          { rel: 'alternate', hreflang, href },
        ]),
      ),
    },
    script: {
      ldJson: {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(structuredData(page, locale, repos)).replace(/</g, '\\u003c'),
      },
    },
  };
}
