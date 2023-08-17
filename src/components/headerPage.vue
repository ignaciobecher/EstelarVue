<template>
    <div class="container-fluid px-4 py-5 my-5 text-center ">
        <img src="../assets/fondoHeader.png" alt="Imagen de fondo" class="background-image">
        <div class="lc-block mb-4">
            <div editable="rich">
                <h2 class="display-2 fw-bold" id="h2Tittle">Transformamos <span id="mainText" class="text-primary"> ideas en
                        realidad
                        digital!</span>
                </h2>
            </div>
        </div>
        <div class="lc-block col-lg-6 mx-auto mb-5">
            <div editable="rich">

                <p class="lead ">Potenciamos tu presencia en línea a través de estrategias creativas de
                    marketing, soluciones
                    integrales de programacion y fotografia de primer nivel para tu negocio.</p>
            </div>
        </div>

        <div class="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"> <a
                class="btn btn-primary btn-lg px-4 gap-3" id="btnMore" href="#" role="button">Quiero saber mas</a>
            <a class="btn btn-primary btn-lg px-4" id="btnContact" href="#" role="button">
                <router-link class="nav-link" to="/contact">Contacto</router-link>
            </a>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    opacity: 0.80;
    /* Ajusta la opacidad según sea necesario */
}

#h2Tittle {
    color: white;
}

.text-primary {
    color: #e75f00 !important
}

.lead {
    color: white;
    font-weight: 500;
}


#btnMore:hover {
    background-color: #f28f0e;
    color: #141922;
}



#btnContact:hover {
    background-color: #f28f0e;
    color: #141922;
}

.hero-container {

    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 10px 0;
}

.jumbotron {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>