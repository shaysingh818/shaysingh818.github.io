import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import ReadingListPage from '../views/ReadingListPage.vue'
import ContactPage from '../views/ContactPage.vue'

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
      path: '/career',
      name: 'career',
      component: ContactPage,
    },
    {
      path: '/reading-list',
      name: 'reading-list',
      component: ReadingListPage,
    },
  ],
})

export default router
