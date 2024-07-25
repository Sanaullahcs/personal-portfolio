<template>
   

<div>
    <v-toolbar
      color="#161616"
      class="tool-bar"
      height="100"
    >

      <p class="portfolio-heading ml-10 pt-10 mb-10">Online Portfolio Syed Gilani</p>

      <v-spacer></v-spacer>

      <v-btn icon class="mr-2">
        <v-img src="@/assets/icons/nav-icon.png" width="29" height="30" @click="toggleDrawer" class="menu-icon mr-15"></v-img>
    </v-btn>
    </v-toolbar>
  </div>



<transition name="drawer-slide">
    <NavigationDrawer :visible="drawerVisible" @close="toggleDrawer" />
</transition>
</template>

    
<script>
import NavigationDrawer from '@/components/MainLayout/NavigationDrawer.vue';

export default {
    components: {
        NavigationDrawer,

    },
    props: {
        drawerVisible: {
            type: Boolean,
            required: true,
        },
    },
    name: 'ToolBar',
    methods: {
        toggleDrawer() {
            this.$emit('update:drawerVisible', !this.drawerVisible);
        },
    },
};
</script>

    
<style scoped>
  @import url("https://use.typekit.net/qaq1iol.css");

@import "@/assets/styles/style.css";

.background-body {
    background-color: #161616;
}

.drawer-slide-leave-active {
    transition: transform 0.9s;
}

.drawer-slide-leave-to {
    transform: translateX(-100%);
}

.tool-bar{
  border-bottom: 1px solid #2D2D2D;
}
@media screen and (min-width: 1000px) {
    .tool-bar{
        display: none;
    }
}

.portfolio-heading{
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 100;
    line-height: 19px;
    font-family:"larken";

}
</style>
