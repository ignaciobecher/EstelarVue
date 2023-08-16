<template>
    <headerPage></headerPage>
    <aboutPage></aboutPage>
    <heroPage></heroPage>
    <footerPage></footerPage>
</template>

<script>
import aboutPage from "../components/aboutPage.vue"
import footerPage from "../components/footerPage.vue"
import headerPage from '@/components/headerPage.vue';
import heroPage from '@/components/heroPage.vue';
export default {
    components: {
        headerPage, heroPage, footerPage, aboutPage
    }
}
</script>