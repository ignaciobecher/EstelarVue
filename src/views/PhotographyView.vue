<template>
    <div class="py-14 ">
        <div class="container">
            <div class="row">
                <div class="offset-lg-2 col-lg-8 col-md-12 col-12 text-center">
                    <span class="fs-4 text-warning ls-md text-uppercase
 fw-semibold">Dale una nueva imagen a tu negocio

                    </span>
                    <!-- heading  -->
                    <h2 class="display-3 mt-4 mb-3  fw-bold">Producciones Audiovisuales Estelar</h2>
                    <!-- para  -->
                    <p class="lead  px-lg-8 mb-6">Realizamos <span>producciones audiovisuales</span> de primera calidad y
                        nivel, nos
                        encargamos de que tu producto o servicio adquiera profesionalidad a traves de producciones
                        fotograficas orientadas a elevar tu público.</p>
                    <router-link class="nav-link" to="/contact"><a href="#"
                            class="btn btn-primary">Contacto</a></router-link>
                </div>
            </div>
        </div>
    </div>
    <productsPage></productsPage>
    <footerPage></footerPage>
</template>

<script>
import productsPage from "@/components/productsPage.vue";
import footerPage from "../components/footerPage.vue"
export default {
    components: {
        footerPage,
        productsPage
    }
}
</script>

<style scoped>
span {
    color: #f28f0e !important;
}

.display-3 {
    color: #f28f0e;
}
</style>