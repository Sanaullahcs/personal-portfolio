<template>
    <div class="contact-page mt-16">
        <v-container>
            <v-row>
                <v-col cols="6">
                    <p class="beauty-text ml-16">The Science of Beauty</p>
    
                </v-col>
                <v-col cols="6" class="d-flex justify-end">
                <v-btn class="mt-8 back-btn" variant="flat" @click="handleScroll()">
                    <div class="d-flex align-center">
                        <div class="icon-container">
                            <v-icon color="white">mdi-chevron-left</v-icon>
                        </div>
                        <p class="back-project button ml-4">Back to 1st project</p>
                    </div>
                </v-btn>
            </v-col>
            </v-row>
            <div class="ageWiser-cover">
                <v-row>
                    <v-col cols="12" md="6">
                        <div>
                            <v-img src="@/assets/images/TSOB.png"  max-height="450" class="responsive-image-beauty"></v-img>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" class="projects-content">
    
                        <p class="mt-10 beauty-para">Led by a medical director with expertise in<br> stem cell, PRP, and exosomes,<br> complemented by our founder's extensive<br> background in aesthetics, we redefine <br>beauty and wellness. Our focus revolves<br> around the intricate fusion of scientific<br> advancements and the pursuit of timeless<br> beauty, specializing in anti-aging solutions.</p>
                        <v-btn class="submit-button-beauty mt-3" @click="submitForm" variant="text">
                            <div class="circle-tsob-text ">
                                <p class="ml-3" style="color: white">EX</p>
                            </div>
                            <span class="outside-text ml-3">PLORE MORE</span>
                        </v-btn>
    
                    </v-col>
                </v-row>
    
            </div>
            <v-row>
    
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
            handleScroll() {
            //this.$router.push('/'); // Navigate to the homepage
            // setTimeout(() => {
            //     this.emitter.emit('scroll-to-websites'); // Scroll to the fifth child element
            // }, 500);
            this.emitter.emit('scroll-to-websites');
            console.log('sssss')
            this.$emit('close'); // Close the navigation drawer
        },
        },
    };
    </script>
    
            <style scoped>
            @import "@/assets/styles/TSOB.css";
            .switch-container-projects {
          position: absolute;
          left: 25%;
    
        }
    
            </style >
    