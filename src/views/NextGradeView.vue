<template>
    <v-container fluid class="pa-0 ma-0">
        <div ref="box" class="box"></div>
    
        <v-row no-gutters>
            <v-col cols="12">
                <div ref="scrollingWrapper" class="scrolling-wrapper" id="scrollingWrapper">
                  
                    <div class="card">
                        <NextGradeWebsite />
                    </div>
                    <div class="card">
                        <NextGradeDashboard />
                    </div>
                    <div class="card">
                        <NextGradeApp />
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
   
    import NextGradeWebsite from '@/components/Projects/NextGrade/NextGradeWebsite.vue'
    import NextGradeDashboard from '@/components/Projects/NextGrade/NextGradeDashboard.vue'
    import NextGradeApp from '@/components/Projects/NextGrade/NextGradeApp.vue'
   
    
    gsap.registerPlugin(ScrollTrigger);
    
    export default {
        components: {
          
            NextGradeWebsite,
            NextGradeDashboard,
            NextGradeApp,
           
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
                const scrollingWrapper = this.$refs.scrollingWrapper;
                const sections = scrollingWrapper.children;
    
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
                gsap.set(sections, {
                    clearProps: "all"
                });
    
                if (window.innerWidth > 1000) {
                    gsap.to(sections, {
                        xPercent: -100 * (sections.length - 1),
                        ease: "none",
                        scrollTrigger: {
                            trigger: scrollingWrapper,
                            pin: true,
                            scrub: 1,
                            end: () => "+=" + scrollingWrapper.offsetWidth * sections.length,
                        }
                    });
                } else {
                    gsap.set(sections, {
                        xPercent: 0,
                        yPercent: 0
                    });
                }
            },
            scrollToAgewiserWebsite() {
                // Get the element containing agewiserWebsite
                const scrollingWrapper = this.$refs.scrollingWrapper;
                if (scrollingWrapper) {
                    const agewiserWebsiteCard = scrollingWrapper.querySelector('.card:nth-child(5)');
                    console.log('agewiserWebsiteCard', agewiserWebsiteCard)
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
    
            console.log('this.$vuetify.breakpoint', this.$vuetify.breakpoint);
    
            this.emitter.on('scroll-to-websites', () => {
                console.log('home page');
                const section = document.getElementById('ageWiser');
    
                if (section) {
                    const container = document.querySelector('.scrolling-wrapper');
    
                    if (this.$vuetify.breakpoint && this.$vuetify.breakpoint.name) {
                        switch (this.$vuetify.breakpoint.name) {
                            case 'xl':
                            case 'lg':
                                container.scrollTo({
                                    left: section.offsetLeft,
                                    behavior: 'smooth'
                                });
                                break;
                            case 'md':
                            case 'sm':
                            case 'xs':
                                section.scrollIntoView({
                                    behavior: 'smooth'
                                });
                                break;
                            default:
                                section.scrollIntoView({
                                    behavior: 'smooth'
                                });
                        }
                    } else {
                        section.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
    
            this.$nextTick(() => {
                this.initializeScrollAnimation();
            });
    
            window.addEventListener('resize', this.initializeScrollAnimation);
    
            window.addEventListener('beforeunload', () => {
                window.scrollTo(0, 0);
            });
        },
        beforeUnmount() {
            window.removeEventListener('resize', this.initializeScrollAnimation);
            window.removeEventListener('beforeunload', () => {
                window.scrollTo(0, 0);
            });
        },
    };
    </script>
    
    <style>
    html,
    body,
    #app {
        height: 100%;
        margin: 0;
    }
    
    .scrolling-wrapper {
        height: 100vh;
        width: 100vw;
        scroll-behavior: smooth;
        scrollbar-width: none;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
    }
    
    .scrolling-wrapper::-webkit-scrollbar {
        display: none;
    }
    
    .scrolling-wrapper .card {
        flex: 0 0 100vw;
        justify-content: center;
    }
    
    /* Media query to change behavior for screens narrower than 1000px */
    @media (max-width: 1000px) {
        .scrolling-wrapper {
            flex-direction: column;
            height: auto;
            width: 100%;
        }
    
        .scrolling-wrapper .card {
            flex: 0 0 auto;
            width: 100%;
        }
    }
    </style>
    