<template>
    <div class="contact-page mt-16">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <p class="chronos-text ml-16">Chronos</p>
    
                </v-col>
            </v-row>
            <div class="ageWiser-cover">
                <v-row>
                    <v-col cols="12" md="6">
                        <div class="responsive-image-container">
                            <v-img src="@/assets/images/chronosdashboard.png" height="534" width="557" class="responsive-image"></v-img>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" class="projects-content">
    
                        <p class="mt-14">Loaded with best features to ensure <br> employees attendance and records in a <br> single place. Check out the main listed<br> features.Loaded with best features to<br> ensure employees attendance and records<br> in a single place. Check out the main listed <br>features.Loaded with best features to <br>ensure employees attendance and records in a single place.</p>
                        <v-btn class="submit-button mt-10" @click="submitForm">
                            <div class="circle-chronos-text ">
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
                @import "@/assets/styles/chronos.css";
                .switch-container-projects {
              position: absolute;
              left: 25%;
    
            }
    
                </style >
    