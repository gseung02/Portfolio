import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './components/Home.vue';
import Aboutme from './components/Aboutme.vue';
import Clone from './components/Clone.vue';
import Website from './components/Website.vue';
import Pracical from './components/Pracical.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home //Home 페이지
  },
  {
    path: '/aboutme',
    name: 'Aboutme',
    component: Aboutme  // AboutMe 페이지
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
  history: createWebHashHistory(),  // 브라우저 히스토리 모드
  routes,
});

export default router;
