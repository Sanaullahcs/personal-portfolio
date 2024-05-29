<!-- NavigationDrawer.vue -->
<template>
    <div class="navigation-drawer" v-if="visible">
      <v-img 
        src="@/assets/icons/close.png" 
        width="24" 
        height="24" 
        @click="closeDrawer"
        class="close-icon"
      ></v-img>
      <p class="text-center mt-3">Online Portfolio Umair</p>
      <ul class="nav-list">
        <li v-for="item in navItems" :key="item" class="nav-item text-center">
          <a href="#">{{ item }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        navItems: ['Home', 'About', 'Portfolio', 'Contact']
      };
    },
    methods: {
      closeDrawer() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style>
  @import "@/assets/styles/style.css";

  
  </style>
  