<template>
<v-navigation-drawer color="black" width="100" permanent height="auto" class="tool-bar">
    <MouseAnimations/>

    <div>
        <v-img src="@/assets/icons/nav-icon.png" width="30" height="21" @click="toggleDrawer" class="menu-icon mt-10"></v-img>
        <div class="label">
            <span class="label-text">Online Portfolio Umair</span>
            <span class="label-text-two">© 2024</span>
        </div>
    </div>
</v-navigation-drawer>

<transition name="drawer-slide">
    <NavigationDrawer :visible="drawerVisible" @close="toggleDrawer" />
</transition>
</template>

<script>
import NavigationDrawer from '@/components/MainLayout/NavigationDrawer.vue';
import MouseAnimations from '@/components/MainLayout/MouseAnimations.vue'

export default {
    components: {
        NavigationDrawer,
        MouseAnimations
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
@import "@/assets/styles/style.css";

.background-body {
    background-color: black;
}

/* .v-navigation-drawer {
    position: absolute !important;
} */

.drawer-slide-leave-active {
    transition: transform 0.9s;
}

.drawer-slide-leave-to {
    transform: translateX(-100%);
}
</style>
