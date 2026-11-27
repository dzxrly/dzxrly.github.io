import type { RouteRecordRaw } from 'vue-router';
import { localeFromPath, localizedPath, pages } from 'src/site/navigation';

const routes: RouteRecordRaw[] = [
  {
    path: '/:language(zh-hans|zh-hant)?',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        children: [
          { path: '', component: () => import('components/homeCard/MainCard.vue') },
          {
            path: pages.tools.slice(1),
            component: () => import('components/homeCard/ToolsCard.vue'),
          },
          {
            path: pages.projects.slice(1),
            component: () => import('components/homeCard/ProjectsCard.vue'),
          },
          {
            path: pages.gamemods.slice(1),
            name: 'modsList',
            component: () => import('components/homeCard/GameModCard.vue'),
          },
          {
            path: 'gamemods/modinfo/:gameName(monsterhunterseries|pragmata)/',
            name: 'modInfo',
            component: () => import('components/homeCard/ModInfoCard.vue'),
          },
          {
            path: pages.opensource.slice(1),
            name: 'openSourceList',
            component: () => import('components/homeCard/OpenSourceCard.vue'),
          },
          {
            path: 'opensource/packageinfo/:packageRegistry(pypi)/',
            name: 'openSourceInfo',
            component: () => import('components/homeCard/OpenSourceInfoCard.vue'),
          },
          {
            path: pages.about.slice(1),
            component: () => import('components/homeCard/AboutMeCard.vue'),
          },
        ],
      },
      {
        path: 'modsList',
        redirect: (to) => localizedPath(pages.gamemods, localeFromPath(to.path)),
      },
      {
        path: 'openSourceList',
        redirect: (to) => localizedPath(pages.opensource, localeFromPath(to.path)),
      },
    ],
  },
  {
    path: '/en/:rest(.*)*',
    redirect: (to) => {
      const rest = to.params.rest;
      return Array.isArray(rest) && rest.length ? `/${rest.join('/')}` : '/';
    },
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
