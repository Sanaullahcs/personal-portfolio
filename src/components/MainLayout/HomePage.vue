<template>
    
     <div class="background-color">
        <v-row>
            <v-col cols="1">
                <v-img src="@/assets/icons/nav-icon.png" width="30" height="21" ></v-img>
<div class="vertical-heading">
          <span>Your Vertical Heading</span>
        </div>
            </v-col>
            <v-col cols="11">
                <div class="horizontal-scroll-container" ref="scrollContainer" @wheel.prevent="onWheel">
      <div class="horizontal-scroll-content">
        <div class="item" v-for="item in items" :key="item.id">{{ item.content }}</div>
      </div>
    </div>
            </v-col>
        </v-row>
     </div>
      
  
    
  </template>
  
  <script>
export default {
  data() {
    return {
      items: [
        { id: 1, content: 'Content 1' },
        { id: 2, content: 'Content 2' },
        { id: 3, content: 'Content 3' },
        // Add more items as needed
      ],
      menuTop: 10 // Initial top position of the menu icon
    }
  },
  methods: {
    scrollLeft() {
      this.$refs.scrollContainer.scrollBy({
        left: -window.innerWidth,
        behavior: 'smooth'
      });
    },
    scrollRight() {
      this.$refs.scrollContainer.scrollBy({
        left: window.innerWidth,
        behavior: 'smooth'
      });
    },
    onWheel(event) {
  event.preventDefault();
  const scrollContainer = this.$refs.scrollContainer;
  const scrollAmount = event.deltaY * 2; // Adjust the multiplier for desired speed
  scrollContainer.scrollLeft += scrollAmount;
}

  },
}
</script>
  <style>
  @import "@/assets/styles/style.css";

  </style>
  