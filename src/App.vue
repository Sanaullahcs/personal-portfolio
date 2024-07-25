<template>
    <v-app class="background-body">
      <div>
        <ToolBar v-model:drawerVisible="drawerVisible" />
        <MouseAnimations/>
        <ToolBarResp v-model:drawerVisible="drawerVisible" />

      </div>
      <router-view />

    </v-app>
  </template>
  
  <script>
  import ToolBar from '@/components/MainLayout/ToolBar.vue';
  import ToolBarResp from '@/components/MainLayout/ToolBarResp.vue';

  import MouseAnimations from '@/components/MainLayout/MouseAnimations.vue'
  export default {
    components: {
      ToolBar,
      MouseAnimations,
      ToolBarResp
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
    background-color: #161616;
  }
  </style>
  