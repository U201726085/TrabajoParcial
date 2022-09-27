import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../public/pages/Home.component.vue'

//const AboutView = () => import('../public/pages/aboutView.vue');
const Destino =() => import('../varuta/pages/destiny-list.component.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/destinos',
      name: 'destinos',
      component: Destino
    }
  ]
})

export default router
