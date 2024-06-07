<template>
    <div class="contact-page mt-16">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <p class="career-text ml-16">Career Vi</p>
    
                </v-col>
            </v-row>
            <div class="ageWiser-cover">
                <v-row>
                    <v-col cols="12" md="6">
                        <div >
                            <v-img src="@/assets/images/careerVi.png" max-height="450" class="responsive-image-careerVi"></v-img>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" class="projects-content">
    
                        <p class="mt-14 career-para">Our job board is the number one <br>destination for hiring and finding jobs. It <br> offers a comprehensive and user-friendly  <br>platform for employers to post openings and <br> for job seekers to find their ideal roles. With  <br>a vast array of listings across various  <br>industries and advanced search features, we <br> connect the right talent with the right <br> opportunities efficiently and effectively.</p>
                        <v-btn class="submit-button-career mt-2" @click="submitForm">
                            <div class="circle-career-text ">
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
            @import "@/assets/styles/CareerVi.css";
            .switch-container-projects {
          position: absolute;
          left: 25%;
    
        }
    
            </style >
    