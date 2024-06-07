<template>
    <div class="contact-page mt-16">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <p class="human-text ml-16">Interoads</p>
    
                </v-col>
            </v-row>
            <div class="ageWiser-cover">
                <v-row>
                    <v-col cols="12" md="6">
                        <div>
                            <v-img src="@/assets/images/InteroadsDashboard.png"  max-height="450" class="responsive-image-interoads"></v-img>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" class="projects-content">
    
                        <p class=" hrms-text">Introducing the Interoads Knowledge Testing<br> System, tailored specifically for the DC DMV.<br> Our platform allows for the implementation<br> of multiple tests across various locations,<br> supporting an unlimited range of <br>languages. Through our intuitive dashboards,<br> managing operations and monitoring test<br> results has never been easier.</p>
                        <v-btn class="submit-button-hrms mt-10" @click="submitForm">
                            <div class="circle-human-text ">
                                <p class="ml-3">EX</p>
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
        },
    };
    </script>
    
            <style scoped>
            @import "@/assets/styles/Hrms.css";
            .switch-container-projects {
          position: absolute;
          left: 25%;
    
        }
    
            </style >
    