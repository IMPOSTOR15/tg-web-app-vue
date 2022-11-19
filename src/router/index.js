import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import chooseMerchPage from '@/components/Merch/GenerateProductListComponent.vue'
import chooseColectionPage from '@/components/Merch/GenerateColectionsListComponent.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/choose-merch',
    name: 'chooseMerch',
    component: chooseMerchPage
  },
  {
    path: '/choose-colection',
    name: 'chooseColection',
    component: chooseColectionPage
  },
  {
    path: '/nfthome',
    name: 'nfthome',
    component: () => import( '../views/NFTHomeView.vue')
  },
  {
    path: '/tgcolors',
    name: 'tgcolors',
    component: () => import( '../views/ColorsView.vue')
  },
  {
    path: '/ChoseProducteToGenerate',
    name: 'generation',
    component: () => import( '../components/NFTPrj/GenerateProductListComponent.vue')
  },
  {
    path: '/chooseColiction',
    name: 'chooseColiction',
    component: () => import( '../components/NFTPrj/GenerateColectionsListComponent.vue')
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
