<!-- HorizontalScroll.vue -->
<template>
    <div class="horizontal-scroll-container" ref="scrollContainer" @wheel.prevent="onWheel">
      <div class="horizontal-scroll-content" style="color: white">
        <div class="item" v-for="item in items" :key="item.id">{{ item.content }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    methods: {
      onWheel(event) {
        event.preventDefault();
        const scrollContainer = this.$refs.scrollContainer;
        const scrollAmount = event.deltaY * 2; // Adjust the multiplier for desired speed
        scrollContainer.scrollLeft += scrollAmount;
      }
    }
  }
  </script>
  
  <style>
  @import "@/assets/styles/style.css";

  </style>
  