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
  gameName: string;
  modName: string;
  modDescription: string;
  modDownloadLink: DownloadLink[];
}
