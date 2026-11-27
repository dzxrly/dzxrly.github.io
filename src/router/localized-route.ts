import type { Router } from 'vue-router';
import type { RouteInfo } from 'src/interface/route-info';
import { localizedPath, localeFromPath } from 'src/site/navigation';

export function resolveLocalizedRoute(router: Router, route: RouteInfo) {
  const { path, query, hash } = router.resolve(route);
  return router.resolve({
    path: localizedPath(path, localeFromPath(router.currentRoute.value.path)),
    query,
    hash,
  });
}
