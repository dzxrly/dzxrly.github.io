export enum GameSeries {
  MHS = 'monsterhunterseries',
}

export interface DownloadLink {
  source: string;
  url: string;
}

export interface GameModInfo {
  gameSeries: GameSeries;
  gameName: string;
  modName: string;
  modVersion: string;
  modDescription: string;
  modDownloadLink: DownloadLink[];
}
