<template>
    <div class="contact-page mt-16">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <p class="ageWiser-text ml-16">AgeWiser</p>
    
                </v-col>
            </v-row>
            <div class="ageWiser-cover">
                <v-row>
                    <v-col cols="12" md="6">
                        <div  class="responsive-image-ageWiser">
                    <v-img src="@/assets/images/ageWiserDashboard.png" max-height="450"  class="responsive-ageWise"></v-img>
                </div>
                    </v-col>
                    <v-col cols="12" md="6" class="projects-content">
                            
                        <p class="mt-5 ageWiser-para">AgeWiser is a holistic AI-driven senior care app.<br> Upon first use, it assesses users across<br> Mobility, Mind, Medical, and Social pillars.<br> Tailored content is then delivered, in the<br> form of videos, games and mental activity <br>targeting improvement of balance, strength <br>and coordination. The AI assistant, "Jen", <br>offers contextual advice and reminders.</p>
                        <v-btn class="submit-button-agewiser mt-3" @click="submitForm" variant="text">
                            <div class="circle-text-agewiser">
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
        },
    };
    </script>
    
        <style scoped>
        @import "@/assets/styles/ageWiser.css";
        .switch-container-projects {
      position: absolute;
      left: 25%;
    
    }
    .switch-container {
      width: 25px;
      height: 42px;
      border: 2px solid white;
      border-radius: 20px;
      position: relative;
      cursor: pointer;
      margin-top: 90%;
    }
    
    .switch-dot {
      width: 14px;
      height: 14px;
      background-color: #D9D9D9;
      border-radius: 50%;
      position: absolute;
      top: 5px;
      left: 4px;
      transition: top 1s ease; /* Slow and smooth transition */
    }
    
    .switch-dot-on {
      top: 18px;
    }
    
    .creative-text-four{
      font-family: "Tai Heritage Pro", serif ;
      color: #ffffffa0;
      font-weight: 400;
      font-size: 16px;
      margin-top: 30px;
    }
    
        </style >
    