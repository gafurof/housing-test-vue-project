import { createRouter, createWebHistory } from 'vue-router'

// components
import PageMain from '@/pages/PageMain.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/main'},
    {path: '/main', component: PageMain}
  ]
})

export default router