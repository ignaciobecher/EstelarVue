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
                    <p class="lead  px-lg-8 mb-6">Realizamos <span>producciones audiovisuales</span> de alta calidad y
                        nivel. Nos encargamos de que tu producto o servicio adquiera profesionalidad a través de
                        producciones fotográficas orientadas a elevar tu público.</p>
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
                            <h1 class="text-white fw-bold display-5">Impulsa el crecimiento de tu negocio con
                                <span>fotografía</span> de
                                primer nivel, a cargo de nuestro equipo de fotógrafos y editores profesionales.</h1>
                        </div>
                        <img src="../assets/Photography/Carpa-min.jpg" class="img-fluid rounded shadow my-5 first-img"
                            loading="lazy">
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex flex-column">
                            <img src="../assets/Photography/FotoBar-min.jpg" class="img-fluid rounded shadow mb-5"
                                loading="lazy">
                            <img src="../assets/Photography/FotoComida2-min.jpg" class="img-fluid rounded shadow mb-5"
                                loading="lazy">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z-2 py-5"></div>
    </section>


    <div class="image-gallery-div">
        <div class="image-gallery">
            <img class="rounded" src="../assets/Photography/_P0A1713.jpg" alt="Imagen 1">
            <img class="rounded" src="../assets/Photography/casa.jpg" alt="Imagen 2">
            <img class="rounded" src="../assets/Photography/_P0A1835.jpg" alt="Imagen 3">
            <img class="rounded" src="../assets/Photography/_P0A1832b.jpg" alt="Imagen 3">
            <img class="rounded" src="../assets/Photography/_P0A1522.jpg" alt="Imagen 3">
            <img class="rounded" src="../assets/Photography/IMG-20230826-WA0006.jpg" alt="Imagen 3">
            <img class="rounded" src="../assets/Photography/IMG-20230826-WA0024.jpg" alt="Imagen 3">
            <img class="rounded" src="../assets/Photography/IMG-20230826-WA0021.jpg" alt="Imagen 3">
            <img class="rounded" src="../assets/Photography/IMG-20230826-WA0020.jpg" alt="Imagen 3">
            <img class="rounded" src="../assets/Photography/IMG-20230826-WA0023.jpg" alt="Imagen 3">
            <img class="rounded" src="../assets/Photography/FP0A1878.jpg" alt="Imagen 3">

            <!-- Agrega más imágenes aquí -->
        </div>
    </div>



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
}

.col-md-6 img {
    transition: transform 0.3s, filter 0.3s;
}

.col-md-6 img:hover {
    transform: scale(1.1);
    filter: brightness(90%);
}


.image-gallery-div {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

}

.image-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    gap: 10px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.image-gallery img {
    max-width: 100%;
    height: auto;
    transition: transform 0.3s ease-in-out;
}

.image-gallery img:hover {
    transform: scale(1.3);
}

@media (max-width: 768px) {
    .image-gallery {
        grid-template-columns: repeat(1, 1fr);
        /* Cambio a una sola columna */
        padding: 10px;
    }
}
</style>