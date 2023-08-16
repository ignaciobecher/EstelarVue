<template>
    <headerPage></headerPage>
    <aboutPage></aboutPage>
    <heroPage></heroPage>
    <cardsPage></cardsPage>
    <footerPage></footerPage>
</template>

<script>
import cardsPage from "../components/cardsPage.vue"
import aboutPage from "../components/aboutPage.vue"
import footerPage from "../components/footerPage.vue"
import headerPage from '@/components/headerPage.vue';
import heroPage from '@/components/heroPage.vue';
export default {
    components: {
        headerPage, heroPage, footerPage, aboutPage, cardsPage
    }
}
</script>