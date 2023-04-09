import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Home from '../views/Home.vue'
// import User from '../views/User.vue'
const Home = () => import('../views/Home.vue')
const User = () => import('../views/User.vue')
const Login = () => import('../views/Login.vue')
const Classify = () => import('../views/Classify.vue')
const Collect = () => import('../views/Collect.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/user',
        name: 'user',
        component: User
      },
      {
        path: '/classify',
        name: 'classify',
        component: Classify
      },
      {
        path: '/collect',
        name: 'collect',
        component: Collect
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode:'hash',
  routes
})

export default router
