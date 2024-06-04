<template>
<div class="about-page">
    <v-row>
        <v-col>
            <v-col cols="12">
                <div class="bg-theme-white organization-org">
                    <div class="organizationTop">
                        <v-row style="width: 100%">
                            <v-col cols="12" lg="9" md="12">
                                <div>
                                    <p class="reviewHeading mb-8 ml-8">My <br> Projects</p>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                    <v-row style="padding-left: 5%; margin-bottom: 5%; width: 100%">
                        <v-col cols="1">
                            <div class="arrow-btn">
                                <!-- MDI previous button -->
                                <v-btn icon @click="prevSlide">
                                    <v-icon style="color: white;">mdi-chevron-left</v-icon>
                                </v-btn>
                                <v-btn icon class="ml-4" @click="nextSlide">
                                    <v-icon class="carousel-arrows">mdi-chevron-right</v-icon>
                                </v-btn>
                            </div>
                        </v-col>
                        <v-col cols="10" lg="10" md="12" sm="12" xs="12">
                            <div>
                                <Carousel class="reviewCarosel" :breakpoints="carouselBreakpoints" :wrap-around="true" :autoplay="2000" ref="ProjectsCarousel">
                                    <Slide v-for="(slide, index) in carouselSlides" :key="index">
                                        <div class="carousel__item">
                                            <img :src="slide.image" :alt="slide.heading" class="orgCardImage" />
                                            <h2 class="orgCardHeading">{{ slide.heading }}</h2>
                                        </div>
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
        Pagination,
    },
    data() {
        return {
            carouselBreakpoints: {
                960: {
                    itemsToShow: 4,
                },
                600: {
                    itemsToShow: 2,
                },
                0: {
                    itemsToShow: 1,
                },
            },
            carouselSlides: [{
                    image: require('@/assets/images/agewiser.png'),
                },
                {
                    image: require('@/assets/images/Safrcare.png'),
                },
                {
                    image: require('@/assets/images/beauty.png'),
                },
                {
                    image: require('@/assets/images/agewiser.png'),
                },
            ],
        };
    },
    methods: {
        prevSlide() {
            this.$refs.ProjectsCarousel.prev();
        },
        nextSlide() {
            this.$refs.ProjectsCarousel.next();
        },
    },
};
</script>

  
<style scoped>
@import "@/assets/styles/style.css";
@import "@/assets/styles/About.css";

.reviewCarosel {
    position: relative;
    min-height: 275px;
}

.carousel__pagination {
    justify-content: left !important;
    display: none !important;
}

.orgCardImage {
    width: 100%;
    height: auto;
    border-radius: 10px;
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
    width: 100%;
    max-width: 90%;
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

/* Media Queries */
@media screen and (min-width: 768px) and (max-width: 991px) {
    .reviewHeading {
        font-size: 38px;
        max-width: 619px;
    }
}

@media screen and (max-width: 767px) {
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
</style>
