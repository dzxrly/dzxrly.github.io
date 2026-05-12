import { defineRouter } from '#q-app/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
  type RouteLocationNormalized,
} from 'vue-router';
import routes from './routes';
import { LoadingBar } from 'quasar';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default defineRouter(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  async function preloadRouteComponents(to: RouteLocationNormalized) {
    const loaders = to.matched.flatMap((record) => {
      return Object.values(record.components ?? {}).filter((component) => {
        return typeof component === 'function' && !('render' in component);
      }) as Array<() => Promise<unknown>>;
    });

    await Promise.all(loaders.map((loader) => loader()));
  }

  Router.beforeEach(async (to) => {
    LoadingBar.start();
    try {
      await preloadRouteComponents(to);
      return true;
    } catch (error) {
      LoadingBar.stop();
      throw error;
    }
  });

  Router.afterEach((to, from) => {
    LoadingBar.stop();
    const toDepth = to.path.split('/').filter((i) => {
      return i !== '';
    }).length;
    const fromDepth = from.path.split('/').filter((i) => {
      return i !== '';
    }).length;
    to.meta.enterActiveClass =
      toDepth < fromDepth ? 'route-slide-in-back' : 'route-slide-in-forward';
    to.meta.leaveActiveClass =
      toDepth < fromDepth ? 'route-slide-out-back' : 'route-slide-out-forward';
  });

  return Router;
});
