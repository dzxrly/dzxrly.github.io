import { RouteRecordRaw } from 'vue-router'

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
            component: () => import('components/home-card/MainCard.vue')
          },
          {
            path: '/projects',
            component: () => import('components/home-card/ProjectsCard.vue')
          },
          {
            path: '/about',
            component: () => import('components/home-card/AboutMeCard.vue')
          }
        ]
      }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
