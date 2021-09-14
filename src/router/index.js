import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import signin from '../views/auth/login.vue'
import { store }  from '../store'

async function redirectIfNotAuth(to, from, next) {
  await store.dispatch('auth/attempt', localStorage.getItem('token'));
  if (store.getters['auth/check'] === false) {
    next({ name: 'home'})
  } else {
    next();
  }
}
async function guest(to, from, next) {
  await store.dispatch('auth/attempt', localStorage.getItem('token'));
  if (store.getters['auth/check'] === true) {
    return router.go(-1);
  } else {
    next();
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: signin,
    beforeEnter: guest
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    redirect: '/tabs/tab1',
  },
  {
    path: '/tabs/',
    component: Tabs,
    beforeEnter: redirectIfNotAuth,
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
