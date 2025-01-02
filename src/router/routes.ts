import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        children: [
          {
            path: '',
            component: () => import('components/homeCard/MainCard.vue'),
          },
          {
            path: '/projects',
            component: () => import('components/homeCard/ProjectsCard.vue'),
          },
          {
            path: '/gameMods',
            children: [
              {
                path: '',
                name: 'modsList',
                component: () => import('components/homeCard/GameModCard.vue'),
              },
              {
                path: 'modInfo/:gameName',
                name: 'modInfo',
                component: () => import('components/homeCard/ModInfoCard.vue'),
              },
            ],
          },
          {
            path: '/about',
            component: () => import('components/homeCard/AboutMeCard.vue'),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
