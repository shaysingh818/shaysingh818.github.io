import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import BlogPage from '../views/BlogPage.vue'
import ContactPage from '../views/ContactPage.vue'
import BlogDetail from '../components/blog/BlogDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogPage,
    },
    {
      path: '/blog-detail/:prefix',
      name: 'blog-detail',
      component: BlogDetail,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
  ],
})

export default router
