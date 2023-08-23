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


    <section class="bg-dark py-5">
        <div class="container">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-6">
                        <div>
                            <h1 class="text-white fw-bold display-5">Conseguí que tu negocio crezca con fotografía de primer
                                nivel a cargo de nuestro equipo de fotógrafos y editores profesionales.</h1>
                        </div>
                        <img src="../assets/Photography/Carpa.jpg" class="img-fluid rounded shadow my-5 first-img"
                            loading="lazy">
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex flex-column">
                            <img src="../assets/Photography/FotoBar.jpg" class="img-fluid rounded shadow mb-5"
                                loading="lazy">
                            <img src="../assets/Photography/FotoComida2.jpg" class="img-fluid rounded shadow mb-5"
                                loading="lazy">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5"></div>
    </section>



    <footerPage></footerPage>
</template>

<script>

import footerPage from "../components/footerPage.vue"

export default {
    components: {
        footerPage,

    }
}
</script>

<style scoped>
body {
    background-color: #181C32 !important;
}

section {
    background-color: #181C32 !important;
}

span {
    color: #fecb4c !important;
}

.display-3 {
    color: #f28f0e;
}

.small-image {
    max-width: 50%;
    height: auto;
}</style>