import { createRouter, createWebHistory } from 'vue-router'
import Products from '@/components/Products.vue'
import Details from '@/components/Details.vue'
import Home from '@/components/Home.vue'
import Author from '@/components/MyAuthors.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home

  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'MyDetails',
    component: Details,
    props: true
  },
  {
    path: '/author',
    name: 'MyAuthor',
    component: Author
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
