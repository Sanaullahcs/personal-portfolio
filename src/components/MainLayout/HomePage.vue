<template>
<div id="app">
    <v-container fluid class="pa-0 ma-0">
        <v-row no-gutters>
            <v-col cols="1">
                <ToolBar />
            </v-col>
            <v-col cols="9">
                <div ref="scrollingWrapper" class="scrolling-wrapper">
                    <div class="card">
                        <VisionToExcellence />
                    </div>
                    <div v-if="isHorizontalScrolling" class="card">
                        <ContactView />
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import ToolBar from './ToolBar.vue';
import VisionToExcellence from './VisionToExcellence.vue';
import ContactView from '@/views/ContactMainView.vue/ContactView.vue';

export default {
    components: {
        VisionToExcellence,
        ToolBar,
        ContactView,
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
        handleScroll(event) {
            if (this.isHorizontalScrolling && event.deltaY !== 0) {
                const scrollSpeedFactor = 8;
                this.$refs.scrollingWrapper.scrollLeft += event.deltaY * scrollSpeedFactor;
                event.preventDefault();
            }
        },

        handleResize() {
            this.isHorizontalScrolling = window.innerWidth > 1000;
        },
    },
    mounted() {
        this.$refs.scrollingWrapper.addEventListener('wheel', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
        // Initial check for viewport width
        this.handleResize();
    },
    beforeUnmount() {
        this.$refs.scrollingWrapper.removeEventListener('wheel', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
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
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    height: 100vh;
    scroll-behavior: smooth;

    scrollbar-width: none;
}

.scrolling-wrapper::-webkit-scrollbar {
    display: none;
    /* For Chrome, Safari, and Opera */
}

.scrolling-wrapper .card {
    display: inline-block;
    width: 100vw;
    transition: transform 10s ease;
    /* Faster transition */
    animation: slideIn 2s ease forwards;
    transform: translateZ(0)
}

@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.scrolling-wrapper {
    overflow-x: auto;
    /* Enable horizontal scrolling */
    overflow-y: hidden;
    /* Disable vertical scrolling */
    white-space: nowrap;
    height: 100vh;
    /* Full viewport height */
    scrollbar-width: none;
    /* For Firefox */
}

.scrolling-wrapper::-webkit-scrollbar {
    display: none;
    /* For Chrome, Safari, and Opera */
}

.scrolling-wrapper .card {
    display: inline-block;
    width: 78vw;
    /* Full viewport width */
    height: 100%;
    /* Full viewport height */
}

@media (max-width: 1000px) {
    .scrolling-wrapper {
        overflow-x: hidden;
        overflow-y: auto;
        white-space: normal;
        height: 100vh;
    }

    .scrolling-wrapper .card {
        display: block;
        width: 100%;
        height: 100%;
    }
    .scrolling-wrapper .card {
    display: inline-block;
    width: 90vw;
    /* Full viewport width */
    height: 100%;
    /* Full viewport height */
}
    
}
</style>
