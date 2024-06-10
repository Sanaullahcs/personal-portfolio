<template>
<div class="about-page mt-16 ml-16">
    <v-container>
        <v-row>
            <v-col cols="11" md="6">
                <v-container>
                    <p class="contact-text ml-10">Who Am I?</p>

                </v-container>
                <div class="responsive-image-container ml-4">
                    <v-img src="@/assets/images/AboutUs.png" class="responsive-image"></v-img>
                </div>
            </v-col>
            <v-col cols="11" md="6">
                <v-container class="about-text-margin">
                    <p class="about-text ml-10">Personalized service with perfection is our mantra.<br> We go above and beyond to cater to your requirements and deliver <br>products and services that surpass your expectations. We <br>understand that you can go anywhere for your technology<br> needs, what stands us apart is our extensive experience and <br>diversified team that offer a perfect recipe for your success. <br>Psst! We have the secret sauce for your business.</p>

                </v-container>
                <v-btn v-if="showReadMoreButton" class="submit-button-Read ml-10" @click="toggleButtons">
                    <div class="circle-text">
                        <p class="ml-3">RE</p>
                    </div>
                    <span class="outside-text ml-3">AD MORE</span>
                </v-btn>

            </v-col>

            <v-col md="6" cols="12" v-if="showAdditionalContent">
                <div class="card-container mt-5" style="color: white">
                    <div class="card d-flex flex-row">
                        <div class="pl-4 pr-4 pb-4 ml-16">
                            <p CLASS="sixteen-text">16</p>
                        </div>

                        <div class="plus-image" style="color: white">
                            <v-img src="@/assets/images/plus.png" alt="Card Image" height="80px" width="80px"></v-img>
                            <p class="card-text pb-3  pt-1 years-text mt-2">Years Of<br> Experience</p>
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col md="6" cols="12" v-if="showAdditionalContent">
                <p class="about-text-two mt-16">Personalized service with perfection is our mantra. We go <br>above and beyond to cater to your requirements and deliver <br> products and services that surpass your expectations. </p>
            </v-col>
            <v-col cols="12" v-if="showAdditionalContent">
                <AboutPageCarousel />

            </v-col>
            <v-col cols="12" v-if="showAdditionalContent">
                <MyProjectsCarousel />

            </v-col>

            <v-col cols="12" v-if="showAdditionalContent">
                <p class="in-touch-text ml-10">Let's get in <br> touch!</p>
                <p class="text-center about-text-two mt-5">
                    Personalized service with perfection is our mantra. We go above and beyond to cater to <br> your requirements and deliver products and services that surpass your expectations.
                </p>
                <div class="d-flex justify-center align-center">
                    <v-btn class="submit-button-one mt-5 mb-15 text-center" @click="submitForm">
                        <div class="circle-text">
                            <p class="ml-3">CO</p>
                        </div>
                        <span class="outside-text ml-3">NTACT NOW</span>
                    </v-btn>
                </div>
            </v-col>

            <v-col>

            </v-col>
        </v-row>

    </v-container>
</div>
</template>

<script>
import AboutPageCarousel from '@/components/AboutPages/AboutPageCarousel.vue';
import MyProjectsCarousel from '@/components/AboutPages/MyProjectsCarousel.vue';

export default {
    name: 'ImageWithTextFields',
    components: {
        AboutPageCarousel,
        MyProjectsCarousel
    },
    data() {
        return {
            showReadMoreButton: true,
            showContactNowButton: false,
            showAdditionalContent: false // Initially hidden

        };
    },
    methods: {
        toggleButtons() {
            this.showReadMoreButton = false;
            this.showContactNowButton = true;
            this.showAdditionalContent = true; // Show additional content on "Read More" click

        },
        submitForm() {
            // Implement your submitForm logic here
        }
    }
}
</script>

<style scoped>
@import "@/assets/styles/style.css";
@import "@/assets/styles/About.css";
</style><style>
.v-row {
    flex: none !important;
}
</style>
