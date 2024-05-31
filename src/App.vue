<template>
<v-app class="background-body ">
  

    <router-view />
</v-app>
</template>

<script>

export default {
    components: {
    },
    name: 'App',

    data: () => ({
        drawerVisible: false

        //
    }),
    methods: {
      
    }
}
</script>

<style>
@import "@/assets/styles/style.css";

.background-body {
    background-color: black;
}
</style>
