<template>
    <div class="contact-page mt-16">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <p class="grade-text ml-16">NextGrade</p>
    
                </v-col>
            </v-row>
            <div class="ageWiser-cover">
                <v-row>
                    <v-col cols="12" md="6">
                        <div>
                            <v-img src="@/assets/images/NextGradeApp.png" max-height="450" class="responsive-image-nextGrade"></v-img>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" class="projects-content">
    
                        <p class="mt-2 nextGrade-text">Next Grade offers world class instructional<br> videos, practice questions, quizzes and <br> individualized testing environment to <br> empower learners of all ages to easily learn<br> new concepts, practice and validate their <br>expertise through mobile phone and web <br>based platforms.</p>
                        <v-btn class="submit-button-nextGrade mt-10" @click="submitForm">
                            <div class="circle-grade-text ">
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
            @import "@/assets/styles/NextGrade.css";
            .switch-container-projects {
          position: absolute;
          left: 25%;
    
        }
    
            </style >
    