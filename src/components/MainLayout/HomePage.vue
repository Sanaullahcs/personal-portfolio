<template>
    <v-container fluid class="pa-0 ma-0">
      <v-row no-gutters>
        <v-col cols="12">
          <div ref="scrollingWrapper" class="scrolling-wrapper">
            <div class="card">
              <VisionToExcellence />
            </div>
            <div v-if="isHorizontalScrolling" class="card">
              <ContactView />
            </div>
            <div v-if="isHorizontalScrolling" class="card">
              <AboutPage />
              
            </div>
            <div v-if="isHorizontalScrolling" class="card">
              <MyProjects />
              
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import VisionToExcellence from './VisionToExcellence.vue';
  import ContactView from '@/views/ContactMainView.vue/ContactView.vue';
  import AboutPage from '../AboutPages/AboutPage.vue';
import MyProjects from '../Projects/MyProjects.vue';
gsap.registerPlugin(ScrollTrigger);

  
  export default {
    components: {
      VisionToExcellence,
      ContactView,
      AboutPage,
      MyProjects,
    },
    data() {
      return {
        drawerVisible: false,
        isHorizontalScrolling: true,
      };
    },
    methods: {
      toggleDrawer() {
        this.drawerVisible = !this.drawerVisible;
      },
      initializeScrollAnimation() {
        const sections = this.$refs.scrollingWrapper.children;
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: this.$refs.scrollingWrapper,
            pin: true,
            scrub: 3, // Increase this value for slower scrolling
            snap: 1 / (sections.length - 1),
            end: "+=1000", // Increase this value for slower scrolling
          }
        });
      },
      handleResize() {
        this.isHorizontalScrolling = window.innerWidth > 1000;
      },
    },
    mounted() {
      this.initializeScrollAnimation();
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.handleResize);
      ScrollTrigger.kill(); // Cleanup ScrollTrigger
    },
  };
  </script>
  
  <style>
  @import "@/assets/styles/style.css";
  
  html,
  body,
  #app {
    height: 100%;
    margin: 0;
  }
  
  .scrolling-wrapper {
    overflow-x: hidden;
    white-space: nowrap;
    height: 100vh;
    width: 100vw;
    scroll-behavior: smooth;
    scrollbar-width: none;
    display: flex;
    flex-wrap: nowrap;
  }
  
  .scrolling-wrapper::-webkit-scrollbar {
    display: none;
  }
  
  .scrolling-wrapper .card {
    flex: 0 0 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
  
  @media (max-width: 1000px) {
    .scrolling-wrapper {
      overflow-x: hidden;
      overflow-y: auto;
      white-space: normal;
      height: 100vh;
      width: 100vw;
    }
  
    .scrolling-wrapper .card {
      display: block;
      width: 100%;
      height: 100vh;
    }
  }
  </style>
  