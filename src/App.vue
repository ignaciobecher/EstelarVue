<template>
    <navbarPage></navbarPage>

    <router-view></router-view>
</template>

<script>


import navbarPage from "./components/navbarPage.vue"
export default {
    components: {

        navbarPage
    },


}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&display=swap');

body {
    font-family: 'Oswald', sans-serif;
    background-color: #181C32 !important;
}

/* #e75f00 naranja principal
#141922 negro
#fecb4c amaraillo
#f28f0e naranja clarp
#c5b597 gris
#e85e00  */
</style>