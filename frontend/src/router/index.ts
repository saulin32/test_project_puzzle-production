import { createRouter, createWebHistory } from 'vue-router'
import FilmsView from '../views/FilmsView.vue'
import FilmView from '../views/FilmView.vue'
import NotFound from '../views/NotFound.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/films'
    },
    {
      path: '/films',
      name: 'films',
      component: FilmsView
    },
    {
      path: '/film/:id(\\d+)',
      name: 'filmCard',
      component: FilmView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
