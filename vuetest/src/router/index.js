import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import BmiView from '../views/BmiView.vue'
import ScoreView from '../views/ScoreView.vue'
import DiceView from '../views/DiceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Test',
      name: 'Test',
      component: TestView
    },
    {
      path: '/bmi',
      name: 'bmi',
      component: BmiView
    },
    {
      path: '/score',
      name: 'score',
      component: ScoreView
    },
    {
      path: '/dice',
      name: 'dice',
      component: DiceView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
