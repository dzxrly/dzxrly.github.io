import type { SiteLocale } from 'src/site/navigation';

export interface ToolsSites {
  siteName: Record<SiteLocale, string>;
  siteDesc: Record<SiteLocale, string>;
  siteUrl: string;
}
