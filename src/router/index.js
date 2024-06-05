import AiTitle from '@/components/Projects/AITitle/AiTitle.vue';
import CareerVi from '@/components/Projects/CareerVi/CareerVi.vue';
import ChronosApp from '@/components/Projects/Chronos/ChronosApp.vue';
import ChronosWebsite from '@/components/Projects/Chronos/ChronosWebsite.vue';
import HrmsApp from '@/components/Projects/HRMS/hrmsApp.vue';
import HrmsWebsite from '@/components/Projects/HRMS/hrmsWebsite.vue';
import InteroadsWebsite from '@/components/Projects/Interoads/InteroadsWebsite.vue';
import NextGradeApp from '@/components/Projects/NextGrade/NextGradeApp.vue';
import NextGradeWebsite from '@/components/Projects/NextGrade/NextGradeWebsite.vue';
import Proctor from '@/components/Projects/Proctor8/proctor.vue';
import SafrcareApp from '@/components/Projects/SafrCare/SafrcareApp.vue';
import SafrcareWebsite from '@/components/Projects/SafrCare/SafrcareWebsite.vue';
import SpringBoard from '@/components/Projects/Springboard/SpringBoard.vue';
import TSOB from '@/components/Projects/TSOB/TSOB.vue';
import AgewiserApp from '@/components/Projects/agewiser/agewiserApp.vue';
import AgewiserWebsite from '@/components/Projects/agewiser/agewiserWebsite.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { 
    path: '/',
    name: 'Home',
    component: () => import('@/components/MainLayout/HomePage.vue')
  },
  
  // { path: '/about', component: About },
  { 
    path: '/projects',
    name: 'Projects',
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
        children: [
          { path: 'ageWiserWeb', component: AgewiserWebsite },
          { path: 'SafrCareWeb', component: SafrcareWebsite },
          { path: 'TSOBWeb', component: TSOB },
          { path: 'SpringBoardWeb', component: SpringBoard },
          { path: 'HRMSWeb', component: HrmsWebsite },
          { path: 'InteroadsWeb', component: InteroadsWebsite },
          { path: 'NextGradeWeb', component: NextGradeWebsite },
          { path: 'Proctor8Web', component: Proctor },
          { path: 'CareerViWeb', component: CareerVi },
          { path: 'ChronosWeb', component: ChronosWebsite },

        ]
      },
      { 
        path: 'Mobile_app',
        name: 'MobileApp',
        children: [
          { path: 'ageWiserApp', component: AgewiserApp },
          { path: 'SafrCareApp', component: SafrcareApp },
          { path: 'HRMSApp', component: HrmsApp },
          { path: 'NextGradeApp', component: NextGradeApp },
          { path: 'Proctor8Web', component: Proctor },
          { path: 'CareerViWeb', component: CareerVi },
          { path: 'ChronosApp', component: ChronosApp },
          { path: 'aiApp', component: AiTitle },

        ]
       
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
