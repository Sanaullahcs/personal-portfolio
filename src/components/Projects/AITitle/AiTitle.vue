<template>
<div class="contact-page mt-16">
    <v-container>
        <v-row>
            <v-col cols="12">
                <p class="ai-title-text ml-16">AI Title</p>

            </v-col>
        </v-row>
        <div class="ageWiser-cover">
            <v-row>
                <v-col cols="12" md="6">
                    <div>
                        <v-img src="@/assets/images/ai-title.png"  max-height="450" ></v-img>
                    </div>
                </v-col>
                <v-col cols="12" md="6" class="projects-content">

                    <p class="mt-3  SafrCare-para">Safrcare is a patient-centric healthcare <br> transportation platform designed to provide <br> non-emergency medical transportation <br> services. Our mission is to deliver affordable, <br> comprehensive, and wheelchair-accessible <br> transportation solutions for medical <br>appointments. With a focus on patient <br>comfort and convenience.</p>
                    <v-btn class="submit-button-ai mt-10" @click="submitForm">
                        <div class="circle-ai-title-text ">
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
                @import "@/assets/styles/Aititle.css";
                .switch-container-projects {
              position: absolute;
              left: 25%;

            }

                </style >
