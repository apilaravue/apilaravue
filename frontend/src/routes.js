import Vue from 'vue'
import VueRouter from 'vue-router'

import Landing from './pages/Landing.vue'
import Login from './pages/auth/Login.vue'
import Home from './pages/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Landing,
      meta: {
        forVisitors: false,
        title: 'App'
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        forVisitors: true,
        title: 'Login | App'
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        forAuth: true,
        title: 'Home | App'
      }
    },
    {
      path: '/logout',
      meta: {
        logout: true
      }
    }
  ],
  linkActiveClass: 'active',
})

export default router
