import AiTitle from '@/components/Projects/AITitle/AiTitle.vue';
import CareerVi from '@/components/Projects/CareerVi/CareerVi.vue';
import ChronosApp from '@/components/Projects/Chronos/ChronosApp.vue';
import ChronosDashboard from '@/components/Projects/Chronos/ChronosDashboard.vue';
import ChronosWebsite from '@/components/Projects/Chronos/ChronosWebsite.vue';
import HrmsApp from '@/components/Projects/HRMS/hrmsApp.vue';
import HrmsDashboard from '@/components/Projects/HRMS/hrmsDashboard.vue';
import HrmsWebsite from '@/components/Projects/HRMS/hrmsWebsite.vue';
import InteroadsDashBoard from '@/components/Projects/Interoads/InteroadsDashBoard.vue';
import InteroadsWebsite from '@/components/Projects/Interoads/InteroadsWebsite.vue';
import NextGradeApp from '@/components/Projects/NextGrade/NextGradeApp.vue';
import NextGradeDashboard from '@/components/Projects/NextGrade/NextGradeDashboard.vue';
import NextGradeWebsite from '@/components/Projects/NextGrade/NextGradeWebsite.vue';
import Proctor from '@/components/Projects/Proctor8/proctor.vue';
import SafrDashBoard from '@/components/Projects/SafrCare/SafrDashBoard.vue';
import SafrcareApp from '@/components/Projects/SafrCare/SafrcareApp.vue';
import SafrcareWebsite from '@/components/Projects/SafrCare/SafrcareWebsite.vue';
import SpringBoard from '@/components/Projects/Springboard/SpringBoard.vue';
import TSOB from '@/components/Projects/TSOB/TSOB.vue';
import AgewiserApp from '@/components/Projects/agewiser/agewiserApp.vue';
import AgewiserDashboard from '@/components/Projects/agewiser/agewiserDashboard.vue';
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
      // { 
      //   path: 'UIUX',
      //   name: 'UIUX',
      //   component: () => import('@/views/ProjectsMainView/uiuxViews.vue/UiuxMainView.vue'),
      //   children: [
      //     { path: 'child1', component: UIUXChild1 },
      //     { path: 'child2', component: UIUXChild2 } 
      //   ]
      // },
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
        path: 'Softwares',
        name: 'Softwares',
        children: [
          { path: 'ageWiserDashboard', component: AgewiserDashboard },
          { path: 'SafrCareDashboard', component: SafrDashBoard },
          { path: 'HRMSDashboard', component: HrmsDashboard   },
          { path: 'NextGradeDashboard', component: NextGradeDashboard },
          { path: 'InteroadsDashboard', component: InteroadsDashBoard  }, 
          { path: 'ChronosDashboard', component: ChronosDashboard  },

        ]
      }
    ]
  },
  { 
    path: '/contact',
    name: 'Contact',
    component: () => import('@/components/ContactPages/ContactUs.vue')
  },
  { 
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutPageView.vue')
  },
  { 
    path: '/practice',
    name: 'practice',
    component: () => import('@/components/PracticeComp.vue')
  },

  { 
    path: '/AgeWiser',
    name: 'AgeWiser',
    component: () => import('@/views/AgeWiserView.vue')
  },
  { 
    path: '/SpringBoard',
    name: 'SpringBoard',
    component: () => import('@/components/Projects/Springboard/SpringBoard.vue')
  },
  { 
    path: '/ai-title',
    name: 'AiTitle',
    component: () => import('@/components/Projects/AITitle/AiTitle.vue')
  },
  { 
    path: '/Safr-care',
    name: 'SafrCare',
    component: () => import('@/views/SafrCareView.vue')
  },
  { 
    path: '/NinjaHR',
    name: 'NinjaHR',
    component: () => import('@/views/NinjaHRView.vue')
  },
  { 
    path: '/Interoads',
    name: 'Interoads',
    component: () => import('@/views/InteroadsView.vue')
  },
  { 
    path: '/NextGrade',
    name: 'NextGrade',
    component: () => import('@/views/NextGradeView.vue')
  },
  { 
    path: '/Proctor8',
    name: 'Proctor',
    component: () => import('@/components/Projects/Proctor8/proctor.vue')
  },
  { 
    path: '/CareerVi',
    name: 'CareerVi',
    component: () => import('@/components/Projects/CareerVi/CareerVi.vue')
  },

  { 
    path: '/Chronos',
    name: 'Chronos',
    component: () => import('@/views/ChronosView.vue')
  },

  { 
    path: '/Tsob',
    name: 'Tsob',
    component: () => import('@/components/Projects/TSOB/TSOB.vue')
  },
  { 
    path: '/animations',
    name: 'animations',
    component: () => import('@/components/animationsCmp.vue')
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
