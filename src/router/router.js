import { createRouter, createWebHistory } from 'vue-router'

// components
import PageMain from '@/pages/PageMain.vue'
import PageProperties from '@/pages/PageProperties.vue'
import PageFavourites from '@/pages/PageFavourites.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/main' },
    { path: '/main', component: PageMain },
    { path: '/properties', component: PageProperties },
    { path: '/favourites/:id', component: PageFavourites },
  ]
})

export default router
