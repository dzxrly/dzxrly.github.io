export const locales = {
  'en-US': { lang: 'en', prefix: '', label: 'English', og: 'en_US' },
  'zh-Hans': { lang: 'zh-Hans', prefix: '/zh-hans', label: '简体中文', og: 'zh_CN' },
  'zh-Hant': { lang: 'zh-Hant', prefix: '/zh-hant', label: '繁體中文', og: 'zh_TW' },
} as const;

export type SiteLocale = keyof typeof locales;
export const defaultLocale: SiteLocale = 'en-US';
export const siteLocales = Object.keys(locales) as SiteLocale[];

export const pages = {
  home: '/',
  tools: '/tools/',
  projects: '/projects/',
  gamemods: '/gamemods/',
  monsterhunterseries: '/gamemods/modinfo/monsterhunterseries/',
  pragmata: '/gamemods/modinfo/pragmata/',
  opensource: '/opensource/',
  pypi: '/opensource/packageinfo/pypi/',
  about: '/about/',
} as const;

export type SitePage = keyof typeof pages;
export const sitePages = Object.keys(pages) as SitePage[];

const languagePrefix = /^\/(en|zh-hans|zh-hant)(?=\/|$)/i;

export function localeFromPath(path: string): SiteLocale {
  const prefix = path.match(languagePrefix)?.[0].toLowerCase();
  return siteLocales.find((locale) => locales[locale].prefix === prefix) ?? defaultLocale;
}

export function unprefixedPath(path: string): string {
  return path.replace(languagePrefix, '') || '/';
}

export function localizedPath(path: string, locale: SiteLocale): string {
  return `${locales[locale].prefix}${unprefixedPath(path).replace(/\/*$/, '/')}`;
}

export function pageFromPath(path: string): SitePage | undefined {
  const normalized = localizedPath(path.toLowerCase(), defaultLocale);
  return sitePages.find((page) => pages[page] === normalized);
}

const localeStorageKey = 'site-locale';
const crawlerUserAgent =
  /bot|crawler|spider|slurp|bingpreview|lighthouse|facebookexternalhit|twitterbot|discordbot|telegrambot|whatsapp|applebot|petalbot|bytespider|yandex|sogou|yisouspider/i;

export function resolveBrowserLocale(languages: readonly string[]): SiteLocale {
  for (const rawTag of languages) {
    const tag = rawTag.trim().toLowerCase();
    if (!tag) continue;
    if (tag === 'en' || tag.startsWith('en-')) return 'en-US';
    if (tag === 'zh' || tag.startsWith('zh-')) {
      return /(?:^|-)hant(?:$|-)|(?:^|-)(?:tw|hk|mo)(?:$|-)/.test(tag) ? 'zh-Hant' : 'zh-Hans';
    }
  }
  return defaultLocale;
}

export function savePreferredLocale(locale: SiteLocale): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(localeStorageKey, locale);
  } catch {
    // Ignore storage quota / privacy mode failures.
  }
}

export function getSavedLocale(): SiteLocale | undefined {
  if (typeof localStorage === 'undefined') return undefined;
  try {
    const value = localStorage.getItem(localeStorageKey);
    return value && siteLocales.includes(value as SiteLocale) ? (value as SiteLocale) : undefined;
  } catch {
    return undefined;
  }
}

export function detectInitialLocale(): SiteLocale {
  if (typeof navigator === 'undefined') return defaultLocale;
  if (crawlerUserAgent.test(navigator.userAgent)) return defaultLocale;

  const saved = getSavedLocale();
  if (saved) return saved;

  const preferred = navigator.languages?.length
    ? navigator.languages
    : navigator.language
      ? [navigator.language]
      : [];
  return resolveBrowserLocale(preferred);
}
