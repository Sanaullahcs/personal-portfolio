<template>
<div class="about-page ">
    <v-row>
        <v-col>
            <v-col cols="12">
                <div class="bg-theme-white organization-org">
                    <div class="organizationTop">
                        <v-row class="mt-8" style="width: 100%">
                            <v-col cols="12" lg="9" md="12">
                                <div>
                                    <p class="reviewHeading mb-8 ml-8">
                                        Skills
                                    </p>
                                </div>
                            </v-col>

                        </v-row>
                    </div>
                    <v-row style="padding-left: 5%; margin-bottom: 5%; width: 100%">
                        <v-col cols="1">
                            <div class="arrow-btn">
                                <!-- MDI previous button -->
                                <v-btn icon class="" @click="prevSlide">
                                    <v-icon style="color: white;">mdi-chevron-left</v-icon>
                                </v-btn>
                                <v-btn icon class=" ml-4" @click="nextSlide">
                                    <v-icon class="carousel-arrows">mdi-chevron-right</v-icon>
                                </v-btn>
                            </div>
                        </v-col>
                        <v-col cols="10" lg="10" md="12" sm="12" xs="12">

                            <div>
                                <Carousel class="reviewCarosel" :breakpoints="carouselBreakpoints" :wrap-around="true" :autoplay="2000" ref="secondCarousel">
                                    <Slide v-for="(slide, index) in carouselSlides" :key="index">
                                        <!-- <v-card class="organization-card"> -->
                                        <div class="carousel__item">
                                            <p class="orgCardText">{{ slide.text }}</p>
                                            <h2 class="orgCardHeading">{{ slide.heading }}</h2>
                                        </div>
                                        <!-- </v-card> -->
                                    </Slide>

                                    <template #addons>

                                        <Pagination />
                                    </template>

                                </Carousel>

                            </div>
                        </v-col>
                    </v-row>

                </div>
            </v-col>
        </v-col>
    </v-row>
</div>
</template>

<script>
import {
    Carousel,
    Pagination,
    Slide
} from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
export default {
    name: 'ImageWithTextFields',
    components: {
        Carousel,
        Slide,
        Pagination

    },
    data() {
        return {
            carouselBreakpoints: {
                960: {
                    itemsToShow: 4
                },
                600: {
                    itemsToShow: 2
                },
                0: {
                    itemsToShow: 1
                },
            },

            carouselSlides: [{
                    heading: "Personalized service with perfection is our mantra. We go above and beyond to cater to your requirements and deliver products and services that surpass your expectations. ",
                    text: "UI/UX",
                },
                {
                    heading: "Personalized service with perfection is our mantra. We go above and beyond to cater to your requirements and deliver products and services that surpass your expectations. ",
                    text: "Web Development",
                },
                {
                    heading: "Personalized service with perfection is our mantra. We go above and beyond to cater to your requirements and deliver products and services that surpass your expectations. ",
                    text: "Mobile App Development",
                },
                {
                    heading: "Personalized service with perfection is our mantra. We go above and beyond to cater to your requirements and deliver products and services that surpass your expectations. ",
                    text: "Software App Development",
                },

            ],
        };
    },
    methods: {
        prevSlide() {
            this.$refs.secondCarousel.prev();
        },
        nextSlide() {
            this.$refs.secondCarousel.next();
        }
    },
}
</script>

<style scoped>
@import "@/assets/styles/style.css";
@import "@/assets/styles/About.css";
</style><style>
.v-row {
    flex: none !important;
}
</style><style>
.reviewCarosel {
    position: relative;
}

.carousel__pagination {
    justify-content: left !important;
    display: none !important;
}

.reviewCarosel .carousel__next {
    position: absolute;
    top: 100%;
    left: 40px;
    color: white;
    background: #18afba;
    border-radius: 100%;
}

.reviewCarosel .carousel__prev {
    position: absolute;
    top: 100%;
    left: 0px;
    color: white;
    background: #18afba;
    border-radius: 100%;
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
    background-color: #18afba;
}
</style><style scoped>
.reviewCarosel {
    min-height: 275px;
    /* padding-bottom: 20px; */
}

.orgCardText {
    right: 5px;
    font-weight: bold;
    margin-top: 10px;
    font-family: "Tai Heritage Pro", serif;
    font-weight: 400;
    color: white;
    font-size: 30px;
    text-align: left;
    /* Align text center */
    display: block;
    padding: 20px;

}

.reviewCarosel {
    min-height: 275px;
}

.orgCardText {
    font-weight: bold;
    font-family: "Tai Heritage Pro", serif;
    font-weight: 400;
    color: white;
    font-size: 20px;
    text-align: left;
    padding: 10px 20px;
    margin: 0;
}

.orgCardHeading {
    font-family: "Tai Heritage Pro", serif;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6);
    font-size: 18px;
    text-align: left;
    margin: 10px 0 0 0;
}

.carousel__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    border-radius: 10px;
    background: black;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 20px;
    height: 342px;
    /* Set a fixed height for consistency */
    width: 100%;
    /* Ensure it takes up the full width available */
    max-width: 90%;
    /* Set maximum width */
}

.reviewHeading {
    color: #F8760B;
    font-family: "Tai Heritage Pro", serif;
    max-width: 600px;
    font-size: 70px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%;
    text-transform: capitalize;
}

.bg-theme-white {
    /* background-color: #f2f4f6; */
}

@media screen and (min-width: 768px) and (max-width: 991px) {

    /* Your CSS styles for MD screens go here */
    .reviewHeading {
        font-size: 38px;
        max-width: 619px;
    }
}

/* For small screens (SM) */
@media screen and (max-width: 767px) {

    /* Your CSS styles for SM screens go here */
    .reviewHeading {
        font-size: 38px;
        max-width: 619px;
    }
}

@media screen and (max-width: 470px) {
    .reviewHeading {
        font-size: 35px;
    }

    .comma {
        max-width: 60px !important;
    }
}

.arrow-btn .v-btn--variant-elevated,
.v-btn--variant-flat {
    background: none !important;
}

.carousel-arrows {
    color: white;
    margin-left: -90px;
}

.arrow-btn {
    position: absolute;
}
</style>
