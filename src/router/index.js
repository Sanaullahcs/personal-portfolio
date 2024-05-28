// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
const routes = [


  //****************************************************************** //
  //                 //   landing pages
  //****************************************************************** //
  {
    path: '/',
    name: 'MainLayout',
    component: () => import(/* webpackChunkName: "about" */ '@/components/MainLayout/HomePage.vue'),
    
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   // Update dynamic text based on route
//   const dynamicText = to.name === 'resumebuilder' ? 'Resume Wizard' : to.name === 'jobagent' ? 'Not OK' :  to.name === 'jobagent' ? 'Job Agent' : to.name === 'competitor' ? 'Competitor' :  to.name === 'competitor' ? 'Competitor' :  to.name === 'competitor' ? 'AI Interviewer' : '';
//   document.getElementById('dynamicText').innerText = dynamicText;
//   next()
// })

export default router
