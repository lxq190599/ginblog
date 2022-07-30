import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    // eslint-disable-next-line vue/multi-word-component-names
    name:'login',
    component:Login
  },
  {
    path:'/admin',
    // eslint-disable-next-line vue/multi-word-component-names
    name:'admin',
    component:Admin
  },
]

const router = new VueRouter({
  routes,
})

export default router
