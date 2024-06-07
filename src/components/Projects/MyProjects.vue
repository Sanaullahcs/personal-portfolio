<template>
<div class="contact-page mt-16">
    <v-container>
        <v-row>
            <v-col cols="12">
                <p class="project-text ml-16">My <br>projects</p>
                <p class="personalized-pro-text text-center">Personalized service with perfection is our mantra. We go above and beyond to cater to your requirements and <br>deliver products and services that surpass your expectations. We understand that you can go anywhere for<br> your technology needs, what stands us apart is our extensive experience and diversified team that offer a<br> perfect recipe for your success.

                    Psst! We have the secret sauce for your business.</p>
            </v-col>
        </v-row>
        <div class="switch-container-projects ">
            <div class="switch-container ml-10" @click="toggle">
                <div :class="['switch-dot', { 'switch-dot-on': isOn }] " />
            </div>
            <p class="creative-text-four">Scroll to see more</p>
        </div>
    </v-container>

    <router-view></router-view>

</div>
</template>

<script>
export default {
    name: 'HorizontalScroll',
    data() {
        return {
            isOn: false,
            toggleInterval: null,
        };
    },
    mounted() {
        this.startAutoToggle();
    },
    beforeUnmount() {
        this.stopAutoToggle();
    },
    methods: {
        startAutoToggle() {
            this.toggleInterval = setInterval(() => {
                this.isOn = !this.isOn;
            }, 2000); // Change state every 2 seconds (adjust as needed)
        },
        stopAutoToggle() {
            clearInterval(this.toggleInterval);
        },
        toggle() {
            this.isOn = !this.isOn;
        },
    },
};
</script>

    <style scoped>
    @import "@/assets/styles/Projects.css";
   
    </style >
