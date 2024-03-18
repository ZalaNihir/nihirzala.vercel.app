import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PageNotFound from '../components/PageNotFound.vue';
import ArticlesVue from '../components/ArticlesVue.vue';
import ContactVue from '../components/Contact.vue';
import AboutView from '../views/AboutView.vue';
import SitemapVue from '../views/SitemapVue.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Welcome to my portfolio' }
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticlesVue,
      meta: { title: 'Read, Learn & Discover' }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { title: 'Who Am I & What Am I Doing?' }
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactVue,
      meta: { title: 'Say Hello' }
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: SitemapVue,
      meta: { title: 'Site Map' }
    },
    {
      path: "/:pathMatch(.*)*",
      component: PageNotFound,
      meta: { title: 'What are you trying to find?' }
    }
  ]
})

export default router
