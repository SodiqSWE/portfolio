import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue';
import Projects from '@/views/Projects.vue';
import Work from '@/views/Work.vue';

declare module 'vue-router' {
  interface RouteMeta {
    title?: string; // Add other meta properties here if needed
  }
}

const routes = [
  {
    path: '/',
    component: Home,
    meta: { title: 'Home | Sodiq' },
  },
  {
    path: '/home',
    component: Home,
    meta: { title: 'Home | Sodiq' },
  },
  {
    path: '/projects',
    component: Projects,
    meta: { title: 'Projects | Sodiq' },
  },
  {
    path: '/work',
    component: Work,
    meta: { title: 'Work | Sodiq' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta?.title;
  }
});

export default router;