<template>
    <div class="contact-page mt-16">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <p class="human-text ml-16">HRMS-Teamsly</p>
    
                </v-col>
            </v-row>
            <div class="ageWiser-cover">
                <v-row>
                    <v-col cols="12" md="6">
                        <div class="responsive-image-container">
                            <v-img src="@/assets/images/HrmsWebsite.png"  max-height="450" class="responsive-image"></v-img>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6" class="projects-content">
    
                        <p class="mt-3 hrms-text">HRMS-Teamsly elevates HR efficiency by <br>streamlining processes like payroll,<br> performance tracking, and recruitment in<br> one intuitive platform. It reduces <br>administrative burdens, enhances productivity,<br> and allows HR teams to focus on strategic<br> initiatives and employee engagement.</p>
                        <v-btn class="submit-button-hrms mt-10" @click="submitForm" variant="text">
                            <div class="circle-human-text " >
                                <p class="ml-3"  style="color: white">EX</p>
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
    