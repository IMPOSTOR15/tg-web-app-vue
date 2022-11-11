import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/form',
    name: 'form',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../components/Form/FormComponent.vue')
  },
  {
    path: '/products',
    name: 'products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../components/ProductList/ProductList.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( '../components/ProductList/CartComponent.vue')
  },
  {
    path: '/order-form',
    name: 'order-form',
    component: () => import( '../components/ProductList/OrderConfirmation.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
