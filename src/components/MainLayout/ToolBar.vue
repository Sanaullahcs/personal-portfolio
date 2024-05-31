<template>
<v-navigation-drawer color="black" width="100" permanent="true" height="auto" class="tool-bar">
    <div>
        <v-img src="@/assets/icons/nav-icon.png" width="30" height="21" @click="toggleDrawer" class="menu-icon mt-10 ml-5"></v-img>
        <div class="label">
            <span class="label-text ">Online Portfolio Umair</span>
            <span class="label-text-two">© 2024</span>
        </div>
    </div>
</v-navigation-drawer>

<transition name="drawer-slide">
  <NavigationDrawer :visible="drawerVisible" @close="drawerVisible = false" />
</transition>

<router-view />
</template>

    
<script>
import NavigationDrawer from '@/components/MainLayout/NavigationDrawer.vue';

export default {
    components: {
        NavigationDrawer,
    },
    name: 'App',

    data: () => ({
        drawerVisible: false

        //
    }),
    methods: {
        toggleDrawer() {
            this.drawerVisible = !this.drawerVisible;
        }
    }
}
</script>
    
<style scoped>
@import "@/assets/styles/style.css";
</style><style>
.background-body {
    background-color: black;
}

.v-navigation-drawer {
    position: absolute !important;
}
.drawer-slide-leave-active {
  transition: transform 0.9s ease;
}

.drawer-slide-leave-to {
    transform: translateX(-100%);
}
</style>
