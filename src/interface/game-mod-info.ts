import type { SiteLocale } from 'src/site/navigation';

export enum GameSeries {
  MHS = 'monsterhunterseries',
  PRAGMATA = 'pragmata',
}

export interface DownloadLink {
  source: string;
  url: string;
}

export interface GameModInfo {
  gameSeries: GameSeries;
  gameName: Record<SiteLocale, string>;
  modName: Record<SiteLocale, string>;
  modDescription: Record<SiteLocale, string>;
  modDownloadLink: DownloadLink[];
}
