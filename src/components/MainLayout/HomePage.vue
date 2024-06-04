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
                <div v-if="isHorizontalScrolling" class="card">
                    <agewiserWebsite />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <agewiserDashboard />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <agewiserApp />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <SafrcareWebsite />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <SafrDashBoard />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <SafrcareApp />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <TSOB />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <SpringBoard />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <hrmsWebsite />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <hrmsDashboard />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <hrmsApp />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <InteroadsWebsite />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <InteroadsDashBoard />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <NextGradeWebsite />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <NextGradeDashboard />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <NextGradeApp />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <proctor />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <CareerVi />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <ChronosWebsite />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <ChronosDashboard />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <ChronosApp />

                </div>
                <div v-if="isHorizontalScrolling" class="card">
                    <AiTitle />

                </div>
            </div>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";
import VisionToExcellence from './VisionToExcellence.vue';
import ContactView from '@/views/ContactMainView.vue/ContactView.vue';
import AboutPage from '../AboutPages/AboutPage.vue';
import MyProjects from '../Projects/MyProjects.vue';
import agewiserWebsite from '@/components/Projects/agewiser/agewiserWebsite.vue';
import agewiserDashboard from '@/components/Projects/agewiser/agewiserDashboard.vue'
import agewiserApp from '@/components/Projects/agewiser/agewiserApp.vue';
import SafrcareWebsite from '@/components/Projects/SafrCare/SafrcareWebsite.vue'
import SafrDashBoard from '@/components/Projects/SafrCare/SafrDashBoard.vue'
import SafrcareApp from '@/components/Projects/SafrCare/SafrcareApp.vue'
import TSOB from '@/components/Projects/TSOB/TSOB.vue'
import SpringBoard from '@/components/Projects/Springboard/SpringBoard.vue'
import hrmsWebsite from '@/components/Projects/HRMS/hrmsWebsite.vue'
import hrmsDashboard from '@/components/Projects/HRMS/hrmsDashboard.vue'
import hrmsApp from '@/components/Projects/HRMS/hrmsApp.vue'
import InteroadsWebsite from '@/components/Projects/Interoads/InteroadsWebsite.vue'
import InteroadsDashBoard from '@/components/Projects/Interoads/InteroadsDashBoard.vue'
import NextGradeWebsite from '@/components/Projects/NextGrade/NextGradeWebsite.vue'
import NextGradeDashboard from '@/components/Projects/NextGrade/NextGradeDashboard.vue'
import NextGradeApp from '@/components/Projects/NextGrade/NextGradeApp.vue'
import proctor from '@/components/Projects/Proctor8/proctor.vue'
import CareerVi from '@/components/Projects/CareerVi/CareerVi.vue'
import ChronosWebsite from "@/components/Projects/Chronos/ChronosWebsite.vue"
import ChronosDashboard from "@/components/Projects/Chronos/ChronosDashboard.vue"
import ChronosApp from "@/components/Projects/Chronos/ChronosApp.vue"
import AiTitle from "@/components/Projects/AITitle/AiTitle.vue"

gsap.registerPlugin(ScrollTrigger);

export default {
    components: {
        VisionToExcellence,
        ContactView,
        AboutPage,
        MyProjects,
        agewiserWebsite,
        agewiserDashboard,
        agewiserApp,
        SafrcareWebsite,
        SafrDashBoard,
        SafrcareApp,
        TSOB,
        SpringBoard,
        hrmsWebsite,
        hrmsDashboard,
        hrmsApp,
        InteroadsWebsite,
        InteroadsDashBoard,
        NextGradeWebsite,
        NextGradeDashboard,
        NextGradeApp,
        proctor,
        CareerVi,
        ChronosWebsite,
        ChronosDashboard,
        ChronosApp,
        AiTitle,
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
