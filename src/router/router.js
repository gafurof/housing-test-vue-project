import { createRouter, createWebHistory } from 'vue-router'

// components
import PageMain from '@/pages/PageMain.vue'
import PageProperties from '@/pages/PageProperties.vue'
import PageFavourites from '@/pages/PageFavourites.vue'
import PageProductView from '@/pages/PageProductView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/main' },
    { path: '/main', component: PageMain },
    { path: '/properties', component: PageProperties, },
    { path: '/favourites/:id', component: PageFavourites },
    {
      path: '/product/:id',
      name: 'product',
      component: PageProductView
    },

  ]
})

export default router
