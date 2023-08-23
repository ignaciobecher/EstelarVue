<template>
    <heroPage></heroPage>
    <!-- <headerPage></headerPage> -->
    <productsPage></productsPage>
    <aboutPage></aboutPage>
    <cardsPage></cardsPage>
    <contactPage></contactPage>
    <footerPage></footerPage>
</template>

<script>
import heroPage from "../components/heroPage.vue"
import contactPage from "../components/contactPage.vue"
import cardsPage from "../components/cardsPage.vue"
import aboutPage from "../components/aboutPage.vue"
import footerPage from "../components/footerPage.vue"
// import headerPage from '@/components/headerPage.vue';
import productsPage from "../components/productsPage.vue"

export default {
    components: {
        heroPage, aboutPage, cardsPage, contactPage, productsPage, footerPage
    }
}
</script>