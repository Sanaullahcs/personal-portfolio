<template>
    <div class="custom-cursor" :style="{ transform: `translate(${position.x}px, ${position.y}px)` }"></div>
  </template>
  
  <script>
  /* eslint-disable */
  export default {
    data() {
      return {
        position: { x: 0, y: 0 }
      };
    },
    mounted() {
      document.addEventListener('mousemove', this.trackMouse);
    },
    beforeUnmount() {
      document.removeEventListener('mousemove', this.trackMouse);
    },
    methods: {
      trackMouse(event) {
        // You might need to adjust this calculation depending on your layout
        const offsetX = event.clientX;
        const offsetY = event.clientY;
        this.position = { x: offsetX, y: offsetY };
      }
    }
  };
  </script>
  
  <style scoped>
  .custom-cursor {
    position: fixed;
    width: 10px;
    height: 10px;
    background-color: #F8760B;
    border-radius: 50%;
    pointer-events: none; /* To prevent the cursor from blocking interaction with underlying elements */
    z-index: 9999; /* Ensure it appears above other elements */
    transition: transform 0.15s ease; /* Smooth transition */
  }
  </style>
  