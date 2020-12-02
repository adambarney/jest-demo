import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Contacts',
    component: () => import('../views/ContactView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
