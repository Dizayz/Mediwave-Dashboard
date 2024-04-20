import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('../views/DashboardViews/HomeView.vue')
        }
        ,
        {
          path: '/home',
          name: 'homedashboard',
          component: () => import('../views/DashboardViews/HomeView.vue')
        }
        ,
        {
          path: 'analyse-module',
          name: 'analyse-module',
          component: () => import('../views/DashboardViews/AnalyseView.vue')
        },
        {
          path: 'mes-quizz',
          name: 'mes-quizz',
          component: () => import('../views/DashboardViews/MyQuizesView.vue')
        },
        {
          path: 'create-quizz',
          name: 'create-quizz',
          component: () => import('../views/DashboardViews/CreateQuizesView.vue')
        }
        , {
          path: 'playlist',
          name: 'playlist',
          component: () => import('../views/DashboardViews/PlaylistView.vue')
        }
        , {
          path: 'videos',
          name: 'videos',
          component: () => import('../views/DashboardViews/VideosView.vue')
        }
        , {
          path: 'exams',
          name: 'exams',
          component: () => import('../views/DashboardViews/ExamsView.vue')
        }
        ,
        {
          path: 'abonnement',
          name: 'abonnement',
          component: () => import('../views/DashboardViews/AbonnementView.vue')
        }
        , {
          path: 'mes-abonnement',
          name: 'mes-abonnement',
          component: () => import('../views/DashboardViews/MyAbonnementView.vue')
        }
        ,
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/DashboardViews/ContactView.vue')
        }
      ]
    },
  ]
})

export default router
