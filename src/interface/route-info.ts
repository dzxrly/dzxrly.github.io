export type RouteInfo =
  | { path: string; name?: never }
  | { name: string; params?: Record<string, string>; path?: never };
