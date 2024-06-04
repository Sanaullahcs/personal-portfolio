import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { 
    path: '/',
    name: 'Home',
    component: () => import('@/components/MainLayout/HomePage.vue')
  },
  { 
    path: '/ageWiser',
    name: 'ageWiser',
    component: () => import('@/components/Projects/agewiser/agewiserWebsite.vue')
  },
  // { path: '/about', component: About },
  { 
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/ProjectsMainView/ProjectsView.vue'),
    children: [
      { 
        path: 'UIUX',
        name: 'UIUX',
        component: () => import('@/views/ProjectsMainView/uiuxViews.vue/UiuxMainView.vue'),
        // children: [
        //   { path: 'child1', component: UIUXChild1 },
        //   { path: 'child2', component: UIUXChild2 } 
        // ]
      },
      { 
        path: 'websites',
        name: 'Websites',
        component: () => import('@/views/ProjectsMainView/WebsitesView.vue/WebsiteMainView.vue'),
        // children: [
        //   { path: 'child1', component: UIUXChild1 },
        //   { path: 'child2', component: UIUXChild2 }
        // ]
      },
      { 
        path: 'Mobile_app',
        name: 'MobileApp',
        component: () => import('@/views/ProjectsMainView/MobileAppView/MobileMainApp.vue'),
        // children: [
        //   { path: 'child1', component: AppChild1 },
        //   { path: 'child2', component: AppChild2 }
        // ]
      },
      { 
        path: 'software',
        name: 'Software',
        component: () => import('@/views/ProjectsMainView/SoftwaresMainView/SoftwareView.vue'),
        // children: [
        //   { path: 'child1', component: SoftwareChild1 },
        //   { path: 'child2', component: SoftwareChild2 }
        // ]
      }
    ]
  },
  { 
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactMainView.vue/ContactView.vue')
  },
  { 
    path: '/about',
    name: 'about',
    component: () => import('@/components/AboutPages/AboutPage.vue')
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
