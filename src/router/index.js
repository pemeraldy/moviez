import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CollectionsPage from '../views/CollectionsPage.vue'
import SingleCollectionPage from '../views/SingleCollectionPage.vue'
import MovieDetails from '../views/MovieDetails.vue'
import Search from '../views/Search.vue'

import  authRoute from '../Auth/routes.auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: MovieDetails
  },
  {
    path: '/collections',
    name: 'collections',
    component: CollectionsPage
  },
  {
    path: '/collection/:id',
    name: 'collection',
    component: SingleCollectionPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  ...authRoute
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
