import { createRouter, createWebHistory } from "vue-router";
import About from '@/components/About.vue';
import Projects from '@/components/Projects.vue';
import Work from '@/components/Work.vue';

declare module 'vue-router' {
  interface RouteMeta {
    title?: string; // Add other meta properties here if needed
  }
}

const routes = [
    { path: '/', 
      component: About,
      meta: { title: 'Home | Sodiq' }, 
    },
    { path: '/about', 
      component: About,
      meta: { title: 'Home | Sodiq' },
    },
    { path: '/projects', 
      component: Projects,
      meta: { title: 'Projects | Sodiq' },
    },
    { path: '/work', 
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