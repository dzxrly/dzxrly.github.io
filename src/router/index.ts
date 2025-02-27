import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
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

export default route(function (/* { store, ssrContext } */) {
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

  Router.beforeEach(() => {
    LoadingBar.start();
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
      toDepth < fromDepth ? 'animated fadeInLeft' : 'animated fadeInRight';
    to.meta.leaveActiveClass =
      toDepth < fromDepth ? 'animated fadeOutRight' : 'animated fadeOutLeft';

    // console.log({
    //   'toDepth': toDepth,
    //   'fromDepth': fromDepth,
    //   '<?': toDepth < fromDepth,
    // })
  });

  return Router;
});
