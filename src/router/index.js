import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../pages/home/Home')
const Classify = () => import('../pages/classify/Classify')
const Carts = () => import('../pages/carts/Carts')
const Profile = () => import('../pages/profile/Profile')
const Detail = () => import('../pages/detail/Detail')
const Supermarket = () => import("../pages/supermarket/Supermarket");
const Login = () => import('../pages/Login/Login')
Vue.use(VueRouter)

const routes = [
  {
    // 路径
    path: '/',
    // 重定向到home
    redirect: '/home',
    component: Home
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/carts',
    component: Carts
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
  {
    path: '/supermarket',
    component: Supermarket
  },
  {
    path: '/login',
    component:Login
  }
]

const router = new VueRouter({
  routes,
  mode: "history",
  linkActiveClass: 'active'
})


export default router
