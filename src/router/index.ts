import { createRouter, createWebHistory } from "vue-router";
import About from '@/components/About.vue';
import Projects from '@/components/Projects.vue';
import Work from '@/components/work.vue';

const routes = [
    { path: '/', component: About },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/work', component: Work },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;