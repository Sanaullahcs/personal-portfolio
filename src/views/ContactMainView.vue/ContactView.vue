<template>
<v-container>
    <v-row>
        <v-col cols="12" md="6">
            <v-container>
                <p class="contact-text ml-10">Contact</p>

            </v-container>
            <div class="responsive-image-container">
                <v-img src="@/assets/images/contactUs.png" height="534" width="557" class="responsive-image"></v-img>
            </div>
        </v-col>
        <v-col cols="12" md="6">
            <v-row>
                <v-col cols="12">
                    <v-text-field label="YOUR NAME" variant="plain" class="custom-underline"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-text-field label="YOUR EMAIL" variant="plain" class="custom-underline"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-textarea label="HOW MAY I HELP YOU?" class="text-area-one" variant="underlined"></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-btn class="submit-button" @click="submitForm">
                        <div class="circle-text">
                            <p class="ml-3">SU</p>
                        </div>
                        <span class="outside-text ml-3">BMIT</span>
                    </v-btn>

                </v-col>
            </v-row>
        </v-col>
    </v-row>
</v-container>
<v-container>

</v-container>
</template>

<script>
export default {
    name: 'ImageWithTextFields'
}
</script>

<style scoped>
@import "@/assets/styles/contact.css";
</style><style>
.custom-underline .v-label {
    color: #FFFFFF;
    font-family: "Tai Heritage Pro", serif;
    font-size: 18px;
    line-height: 23px;
}

.custom-underline .v-field--variant-plain.v-field,
.custom-underline .v-field--variant-underlined.v-field {
    border-bottom: 1px solid white;
}

.text-area-one .v-field__outline {
    border-bottom: 1px solid #FFFFFF;
}

.text-area-one .v-label {
    color: #FFFFFF;
    font-family: "Tai Heritage Pro", serif;
    font-size: 18px;
    line-height: 23px;
}

.text-area-one .v-field--no-label textarea,
.text-area-one .v-field--active textarea {
    color: white;
}

.v-text-field .v-field--no-label input,
.v-text-field .v-field--active input {
    color: white;
}

.custom-underline .v-field--no-label input,
.custom-underline .v-field--active input {
    color: white;
}
</style>
