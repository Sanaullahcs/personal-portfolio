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
                <v-btn class="submit-button-Read ml-10" @click="navigateToAbout" variant="text">
                    <div class="circle-text">
                        <p class="ml-3">RE</p>
                    </div>
                    <span class="outside-text ml-3">AD MORE</span>
                </v-btn>

            </v-col>

           
         

            <v-col>

            </v-col>
        </v-row>

    </v-container>
</div>
</template>

<script>

export default {
    name: 'ImageWithTextFields',
    components: {
    
    },
  
    methods: {
        navigateToAbout() {
      this.$router.push({ name: 'about' });
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
