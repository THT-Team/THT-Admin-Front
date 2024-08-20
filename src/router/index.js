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
          path: '/users',
          name: 'UsersList',
          component: () => import('../views/UsersListView.vue')
        },
        {
          path: '/users/manage-accounts',
          name: 'UsersManageAccounts',
          component: () => import('../views/UsersManageAccountView.vue')
        }
      ]
    }
  ]
})

export default router
