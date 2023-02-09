import { createRouter, createWebHistory } from 'vue-router'
import ShoppingCart from '../views/ShoppingCart.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'shoppingcart',
      component: ShoppingCart
    },
   
  ]
})

export default router
