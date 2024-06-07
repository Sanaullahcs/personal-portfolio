<template>
    <div class="contact-page mt-16">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <p class="spring-text ml-16">Springboard</p>
    
                </v-col>
            </v-row>
            <div class="ageWiser-cover">
                <v-row>
                    <v-col cols="12" md="6">
                        <div>
                            <v-img src="@/assets/images/springBoard.png" max-height="450"  class="responsive-image-springBoard"></v-img>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" class="projects-content">
    
                        <p class="mt-10 springboard-para">To bridge the gap between academic <br>education and necessary practical <br>experience needed to help land a good IT <br>job in Pakistan, we have taken a novel<br> initiative to help train recent IT graduates in <br>the country. Successful cohorts gain vital <br>practical experience while working directly<br> with highly trained and experienced engineers.</p>
                        <v-btn class="submit-button-beauty mt-5" @click="submitForm">
                            <div class="circle-spring-text ">
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
            @import "@/assets/styles/SpringBoard.css";
            .switch-container-projects {
          position: absolute;
          left: 25%;
    
        }
    
            </style >
    