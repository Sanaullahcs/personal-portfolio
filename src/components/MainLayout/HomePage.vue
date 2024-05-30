<template>
  <div >
    <v-container fluid>
      <v-row>
      
        <v-col cols="12">
          <VisionToExcellence />
         <div >
          <AboutPage/>
         </div>

        </v-col>
      </v-row>
    </v-container>

  </div>
</template>


<script>
import VisionToExcellence from './VisionToExcellence.vue';
import AboutPage from '../AboutPages/AboutPage.vue';
export default {
  components: {
    VisionToExcellence,
    AboutPage
  },
  data() {
    return {
     
      drawerVisible: false
    };
  },
  methods: {
    toggleDrawer() {
      this.drawerVisible = !this.drawerVisible;
    }
  }
};
</script>

<style>
@import "@/assets/styles/style.css";
</style>
