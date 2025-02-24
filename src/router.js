import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import AboutMe from './components/Aboutme.vue';
import Clone from './components/Clone.vue';
import Website from './components/Website.vue';
import Pracical from './components/Pracical.vue';
import MobileHome from './components/mobileHome.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      mobile: MobileHome,
      desktop: Home
    }
  },
  {
    path: '/aboutme',
    name: 'AboutMe',
    component: AboutMe,  // AboutMe 페이지
  },
  {
    path: '/clone',
    name: 'Clone',
    component: Clone // Project(Clone) 페이지
  },
  {
    path: '/website',
    name: 'Website',
    component: Website // Website 페이지
  },
  {
    path: '/pracical',
    name: 'Pracical',
    component: Pracical //Pracical 페이지
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  // 브라우저 히스토리 모드
  routes,
});

export default router;
