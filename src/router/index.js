import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import chooseMerchPage from '@/components/Merch/GenerateProductListComponent.vue'
import chooseColectionPage from '@/components/Merch/GenerateColectionsListComponent.vue'
import generatedMerch from '@/components/Merch/GeneratedMerch.vue'
import AiGeneratedMerch from '@/components/AITestDir/AiGeneratedMerch.vue'
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
    path: '/generatedMerch',
    name: 'generatedMerch',
    component: generatedMerch
  },
  {
    path: '/generatedAiMerch',
    name: 'generatedAiMerch',
    component: AiGeneratedMerch
  },
  {
    path: '/dalleGenerator',
    name: 'dalle',
    // component: () => import( '../components/AITestDir/DalleComponent.vue')
    component: () => import( '../views/AiGeneratorPageView.vue')
  },
  {
    path: '/tgcolors',
    name: 'tgcolors',
    component: () => import( '../views/ColorsView.vue')
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
    path: '/order-confirmation',
    name: 'order-confirmation',
    component: () => import( '../components/Form/OrderFormComponent.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
