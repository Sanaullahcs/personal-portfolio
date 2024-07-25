<template>
    <div style="width: 100%">
      <div class="bg-theme-white organization-org">
  
        <div class="side-margins">
            <div>
                <p class="reviewHeading mb-8 ml-8">My <br> Projects</p>
              </div>
          <Carousel class="reviewCarosel" :breakpoints="carouselBreakpoints" :wrap-around="true" :autoplay="2000" ref="ProjectsCarousel">
            <Slide v-for="(slide, index) in carouselSlides" :key="index">
              <div class="carousel__item">
                <img :src="slide.image" :alt="slide.heading" class="orgCardImage" />
                <h2 class="orgCardHeading">{{ slide.heading }}</h2>
                <p>{{ slide.description }}</p> <!-- Add description paragraph -->
                <v-btn @click="viewDetails(slide)" class="mt-2" color="primary">View Details</v-btn> <!-- Example button -->
              </div>
            </Slide>
  
            <template #addons>
              <Pagination />
            </template>
          </Carousel>
          
          <!-- Navigation buttons -->
          <div class="arrow-btn">
            <v-btn icon @click="prevSlide" variant="flat">
              <v-icon style="color: white;">mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn icon class="ml-4" @click="nextSlide" variant="flat">
              <v-icon class="carousel-arrows">mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Carousel, Pagination, Slide } from "vue3-carousel";
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
          1000: {
            itemsToShow: 1,
          },
        },
        carouselSlides: [
          {
            image: require('@/assets/images/agewiser-web-resp.png'),
            heading: 'Project 1',
            description: 'Description for Project 1',
          },
          {
            image: require('@/assets/images/agewiser-web-desk.png'),
            heading: 'Project 2',
            description: 'Description for Project 2',
          },
          {
            image: require('@/assets/images/agewiser-mobile-res.png'),
            heading: 'Project 3',
            description: 'Description for Project 3',
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
      viewDetails(slide) {
        // Implement your logic for viewing details
        console.log('View details for:', slide.heading);
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
    max-width: 100%; /* Ensures the image doesn't exceed its natural size */
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
    background-color: #161616;
    border: 1px solid rgba(255, 255, 255, 0.2);
border-right: none;
    padding:    20px;
   
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
@media screen and (min-width: 600px) and (max-width: 991px) {
   

    .side-margins{
margin-left: 15% !important; 
    }
}

@media screen and (min-width: 200px) and (max-width: 600px) {
   

   .side-margins{
margin-left: 5% !important; 
   }
}

</style>
<style>
 .arrow-btn{
    position: relative !important;
 }


</style>
