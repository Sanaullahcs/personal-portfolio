<template>
<v-app class="background-body">
    <v-container fluid>
        <v-row>
            <v-col class="background-color">
                <div>
                    <v-img src="@/assets/icons/nav-icon.png" width="30" height="21" @click="toggleDrawer" class="menu-icon"></v-img>
                    <div class="label">
                        <span class="label-text">Online Portfolio Umair</span>
                        <span class="label-text-two">© 2024</span>
                    </div>
                </div>
            </v-col>
            <v-col cols="11">
                <VisionToExcellence />

            </v-col>
        </v-row>
    </v-container>
    <NavigationDrawer :visible="drawerVisible" @close="drawerVisible = false" />

    <router-view />
</v-app>
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

<style>
@import "@/assets/styles/style.css";

.background-body {
    background-color: black;
}
</style>
