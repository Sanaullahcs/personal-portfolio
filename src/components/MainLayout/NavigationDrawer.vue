<template>
<div class="navigation-drawer" v-if="visible">
    <div class="mt-10">
      <v-img src="@/assets/icons/close.png" width="24" height="24" @click="closeDrawer" class="close-icon"></v-img>
    <p class="text-center mt-3 drawer-heading">Online Portfolio Umair</p>
    </div>
    <ul class="nav-list ">
        <li class="nav-item text-center" :class="{ active: isRouteActive('home') }">
            <router-link to="/home">Home</router-link>
        </li>
        <li class="nav-item text-center" :class="{ active: isRouteActive('about') }">
            <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item text-center" :class="{ active: isRouteActive('projects') }">
            <router-link to="/projects">Projects</router-link>
        </li>
        <li class="nav-item text-center" :class="{ active: isRouteActive('contact') }">
            <router-link to="/Contact">Contact</router-link>
        </li>
    </ul>
    <div class="social-accounts d-flex">
        <div class="d-flex">
            <a href="#" class="linkedin">LinkedIn</a>
            <span class="mdi mdi-arrow-top-right ml-2"></span>

        </div>
        <div class="d-flex ml-8">
          <a href="#"  class="email">Email</a>
            <span class="mdi mdi-arrow-top-right ml-2"></span>

        </div>
        <div class="d-flex ml-8">
          <a href="#"  class="whatsapp">Whatsapp</a>
            <span class="mdi mdi-arrow-top-right ml-2"></span>

        </div>
    </div>
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
    methods: {
        closeDrawer() {
            this.$emit('close');
        },
        isRouteActive(routeName) {
            return this.$route.name === routeName;
        }
    }
};
</script>

<style>
@import "@/assets/styles/style.css";
</style>
