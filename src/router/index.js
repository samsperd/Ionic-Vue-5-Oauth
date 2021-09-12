import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import signin from '../views/auth/login.vue'
import { store } from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: signin
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    redirect: '/tabs/tab1',
  },
  {
    path: '/tabs/',
    component: Tabs,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/authenticated']) {
        // console.log(store.getters['auth/authenticated']);
        return next({
          name: 'home'
        })
      }
      next()
    },
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
