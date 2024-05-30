<template>
<div>
    <v-container class="text-center">
        <v-row class="text-center">
            <v-col cols="12">
                <p class="creative-text-one">Creative since 2017</p><br>
                <p class="creative-text-two">From Vision to Excellence</p>
                <p class="creative-text-three">Landing pages, desktop apps, mobile apps. We grow <br>your product with strategic design.</p>

            </v-col>
            <v-col cols="12 ">
                <div class="switch-container-outer">
                    <div class="switch-container ml-10" @click="toggle">
                        <div :class="['switch-dot', { 'switch-dot-on': isOn }] " />
                    </div>
                    <p class="creative-text-four">Scroll to see more</p>
                </div>
            </v-col>
        </v-row>
    </v-container>
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
  
<style>
@import "@/assets/styles/style.css";
</style>
