<template>
<v-container fluid class="pa-0 ma-0">
    <v-row no-gutters>
        <v-col cols="12">
            <div ref="scrollingWrapper" class="scrolling-wrapper">
                <div class="card">
                    <VisionToExcellence />
                </div>
                <div class="card">
                    <ContactUs />
                </div>
                <div class="card">
                    <AboutPage />
                </div>
                <div class="card">
                    <MyProjects />
                </div>
                <div class="card">
                    <agewiserWebsite />
                </div>
                <div class="card">
                    <agewiserDashboard />
                </div>
                <div class="card">
                    <agewiserApp />
                </div>
                <div class="card">
                    <SafrcareWebsite />
                </div>
                <div class="card">
                    <SafrDashBoard />
                </div>
                <div class="card">
                    <SafrcareApp />
                </div>
                <div class="card">
                    <TSOB />
                </div>
                <div class="card">
                    <SpringBoard />
                </div>
                <div class="card">
                    <hrmsWebsite />
                </div>
                <div class="card">
                    <hrmsDashboard />
                </div>
                <div class="card">
                    <hrmsApp />
                </div>
                <div class="card">
                    <InteroadsWebsite />
                </div>
                <div class="card">
                    <InteroadsDashBoard />
                </div>
                <div class="card">
                    <NextGradeWebsite />
                </div>
                <div class="card">
                    <NextGradeDashboard />
                </div>
                <div class="card">
                    <NextGradeApp />
                </div>
                <div class="card">
                    <proctor />
                </div>
                <div class="card">
                    <CareerVi />
                </div>
                <div class="card">
                    <ChronosWebsite />
                </div>
                <div class="card">
                    <ChronosDashboard />
                </div>
                <div class="card">
                    <ChronosApp />
                </div>
                <div class="card">
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
import ContactUs from '@/components/ContactPages/ContactUs.vue';
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
        ContactUs,
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
                    scrub: 1, // Decrease this value for slower scrolling
                    end: "+=40000", // Increase this value for slower scrolling
                }
            });
        },
        scrollToAgewiserWebsite() {
            // Get the element containing agewiserWebsite
            const scrollingWrapper = this.$refs.scrollingWrapper;
            if (scrollingWrapper) {
                const agewiserWebsiteCard = scrollingWrapper.querySelector('.card:nth-child(5)'); // Adjust the index if needed

                // Scroll to the element
                if (agewiserWebsiteCard) {
                    agewiserWebsiteCard.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'start'
                    });
                }
            }
        },

    },
    mounted() {
        this.emitter.on('scroll-to-websites', () => {
            this.scrollToAgewiserWebsite();
        })
        this.initializeScrollAnimation();

        // Add event listener for page refresh
        window.addEventListener('beforeunload', () => {
            // Scroll back to the start
            window.scrollTo(0, 0);
        });

        // setTimeout(() => {
        //     this.scrollToAgewiserWebsite();
        // }, 500); 
    },

    beforeUnmount() {
        window.removeEventListener('beforeunload', () => {
            window.scrollTo(0, 0);
        });
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
    justify-content: center;
}
</style>
