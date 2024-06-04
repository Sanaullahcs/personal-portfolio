<template>
    <v-app class="background-body">
      <div>
        <ToolBar v-model:drawerVisible="drawerVisible" />
      </div>
      <router-view />
    </v-app>
  </template>
  
  <script>
  import ToolBar from '@/components/MainLayout/ToolBar.vue';
  
  export default {
    components: {
      ToolBar,
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
  