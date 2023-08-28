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

    <p class="heading">CSS Gallery</p>
    <div class="gallery-image">
        <div class="img-box">
            <img src="../assets/Photography/vino.jpg" alt="" />
            <div class="transparent-box">

            </div>
        </div>
        <div class="img-box">
            <img src="../assets/Photography/cocacola.jpg" alt="" />
            <div class="transparent-box">

            </div>
        </div>
        <div class="img-box">
            <img src="../assets/Photography/hotel.jpg" alt="" />
            <div class="transparent-box">

            </div>
        </div>
        <div class="img-box">
            <img src="../assets/Photography/casa.jpg" alt="" />
            <div class="transparent-box">

            </div>
        </div>
        <div class="img-box">
            <img src="../assets/Photography/cafe.jpg" alt="" />
            <div class="transparent-box">

            </div>
        </div>
        <div class="img-box">
            <img src="../assets/Photography/playa.jpg" alt="" />
            <div class="transparent-box">

            </div>
        </div>
        <div class="img-box">
            <img src="../assets/Photography/evento.jpg" alt="" />
            <div class="transparent-box">

            </div>
        </div>
        <div class="img-box">
            <img src="../assets/Photography/evento2.jpg" alt="" />
            <div class="transparent-box">

            </div>
        </div>
        <div class="img-box">
            <img src="../assets/Photography/whisky.jpg" alt="" />
            <div class="transparent-box">

            </div>
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

.heading {
    text-align: center;
    font-size: 2.0em;
    letter-spacing: 1px;
    padding: 40px;
    color: white;
}

.gallery-image {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.gallery-image img {
    height: 250px;
    width: 350px;
    transform: scale(1.0);
    transition: transform 0.4s ease;
}

.img-box {
    box-sizing: content-box;
    margin: 10px;
    height: 250px;
    width: 350px;
    overflow: hidden;
    display: inline-block;
    color: white;
    position: relative;
    background-color: white;
}

.caption {
    position: absolute;
    bottom: 5px;
    left: 20px;
    opacity: 0.0;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.transparent-box {
    height: 250px;
    width: 350px;
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    top: 0;
    left: 0;
    transition: background-color 0.3s ease;
}

.img-box:hover img {
    transform: scale(1.1);
}

.img-box:hover .transparent-box {
    background-color: rgba(0, 0, 0, 0.5);
}

.img-box:hover .caption {
    transform: translateY(-20px);
    opacity: 1.0;
}

.img-box:hover {
    cursor: pointer;
}

.caption>p:nth-child(2) {
    font-size: 0.8em;
}

.opacity-low {
    opacity: 0.5;
}
</style>