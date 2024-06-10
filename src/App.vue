<template>
    <v-app class="background-body">
      <div>
        <ToolBar v-model:drawerVisible="drawerVisible" />
        <MouseAnimations/>

      </div>
      <router-view />
      <MouseAnimations/>
    </v-app>
  </template>
  
  <script>
  import ToolBar from '@/components/MainLayout/ToolBar.vue';
  import MouseAnimations from '@/components/MainLayout/MouseAnimations.vue'
  export default {
    components: {
      ToolBar,
      MouseAnimations,
    },
    name: 'App',
    data: () => ({
      drawerVisible: false,
    }),
    watch: {
      $route() {
        this.drawerVisible = false;
      },
    },
  };
  </script>
  
  <style>
  @import "@/assets/styles/style.css";
  
  .background-body {
    background-color: black;
  }
  </style>
  