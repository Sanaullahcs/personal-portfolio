<template>
<div class="contact-page mt-16">
    <v-container>
        <v-row>
            <v-col cols="12">
                <p class="proctor-text ml-16">Proctor8</p>

            </v-col>
        </v-row>
        <div class="ageWiser-cover">
            <v-row>
                <v-col cols="12" md="6">
                    <div>
                        <v-img src="@/assets/images/proctordashboard.png"  max-height="450" class="responsive-image-proctor"></v-img>
                    </div>
                </v-col>
                <v-col cols="12" md="6" class="projects-content">

                    <p class="mt-8 proctor-para">Proctor8 is the most innovative knowledge <br> testing system, featuring advanced AI-driven <br>proctoring, real-time monitoring, and robust<br> analytics. It ensures exam integrity and<br> provides valuable insights into performance. <br>With a user-friendly interface and seamless <br>integration, Proctor8 sets a new standard in<br> reliable and efficient assessments.</p>
                    <v-btn class="submit-button-proctor mt-3" @click="submitForm">
                        <div class="circle-proctor-text ">
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
            @import "@/assets/styles/Proctor.css";
            .switch-container-projects {
          position: absolute;
          left: 25%;

        }

            </style >
