import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/IndexView.vue'
import UnknownView from '@/views/UnknownView.vue'
import PlanetView from '@/views/PlanetView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
    },
    {
      path: '/:planet',
      name: 'planet',
      component: PlanetView,
    },
    {
      path: '/unknown',
      name: 'unknown',
      component: UnknownView,
    },
  ],
})

export default router
