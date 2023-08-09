import { createRouter, createWebHistory } from 'vue-router'
const Home = ()=> import('../views/mainHome.vue');
const Welcome = ()=> import('../views/WelcomePage.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },
  ]
})

export default router
