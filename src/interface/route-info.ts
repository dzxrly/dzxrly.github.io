export interface RouteInfo {
  path?: string;
  name?: string;
  params?: {
    [key: string]: string;
  };
}
