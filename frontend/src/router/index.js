import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
  },
  // {
  //   path: '/routes',
  //   name: 'Routes',
  //   component: () => import('@/views/Routes.vue'),
  // },
  // {
  //   path: '/businesses',
  //   name: "Businesses",
  //   component: () => import('@/views/Businesses.vue'),
  // },
  // {
  //   path: '/people',
  //   name: "People",
  //   component: () => import('@/views/People.vue'),
  // },
  // {
  //   path: '/applynow',
  //   name: "Apply Now",
  //   component: () => import('@/views/ApplyNow.vue'),
  // },
  {
    path: '*',
    name: "NotFound",
    component: () => import('@/views/NotFound.vue'),
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
