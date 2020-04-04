import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Dashboard.vue'
import Search from '../components/Search.vue'
// import Login from '../components/Login.vue'
// import Signup from '../components/Signup.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: Login
  // },
  // {
  //   path: '/signup',
  //   name: 'Signup',
  //   component: Signup
  //
  // }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
// # sourceMappingURL=index.js.map
