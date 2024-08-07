import { createRouter, createWebHistory } from 'vue-router'
import HomeBaseView from '@/views/HomeBaseView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: "/",
      component: HomeBaseView,
      name: 'HomeBase',
      children: [
        {
          path: '',
          name: 'DashBoard',
          component: () =>import('../views/DashBoardView.vue')
        },
        {
          path: '/users-list',
          name: 'UsersList',
          component: () => import('../views/UsersListView.vue')
        }
      ]
    }
  ]
})

export default router
