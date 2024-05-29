<template>
  <div class="background-color">
    <v-row>
      <v-col cols="1">
        <div class="ml-10 mt-10">
          <v-img 
            src="@/assets/icons/nav-icon.png" 
            width="30" 
            height="21" 
            @click="toggleDrawer"
            class="menu-icon"
          ></v-img>
        </div>
        <div class="label">
          <span class="label-text">Online Portfolio Umair</span>
          <span class="label-text-two">© 2024</span>
        </div>
      </v-col>
      <v-col cols="11">
        <HorizontalScroll :items="items" />
      </v-col>
    </v-row>
    <NavigationDrawer :visible="drawerVisible" @close="drawerVisible = false" />
  </div>
</template>

<script>
import HorizontalScroll from '@/components/MainLayout/HorizontalScroll.vue';
import NavigationDrawer from '@/components/MainLayout/NavigationDrawer.vue';

export default {
  components: {
    HorizontalScroll,
    NavigationDrawer
  },
  data() {
    return {
      items: [
        { id: 1, content: 'Content 1' },
        { id: 2, content: 'Content 2' },
        { id: 3, content: 'Content 3' },
        // Add more items as needed
      ],
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
