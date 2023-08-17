<template>
    <headerPage></headerPage>
    <heroPage></heroPage>
    <aboutPage></aboutPage>
    <cardsPage></cardsPage>
    <contactPage></contactPage>
    <footerPage></footerPage>
</template>

<script>
import contactPage from "../components/contactPage.vue"
import cardsPage from "../components/cardsPage.vue"
import aboutPage from "../components/aboutPage.vue"
import footerPage from "../components/footerPage.vue"
import headerPage from '@/components/headerPage.vue';
import heroPage from '@/components/heroPage.vue';
export default {
    components: {
        headerPage, heroPage, footerPage, aboutPage, cardsPage, contactPage
    }
}
</script>