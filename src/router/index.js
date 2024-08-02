import { createRouter, createWebHistory } from 'vue-router'
import DashBoardView from '../views/DashBoardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoardView
    },
    {
      path: '/users-list',
      name: 'UsersList',
      component: () => import('../views/UsersListView.vue')
    }
  ]
})

export default router
