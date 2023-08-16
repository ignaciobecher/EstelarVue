<template>
    <div class="container-fluid px-4 py-5 my-5 text-center">
        <div class="lc-block mb-4">
            <div editable="rich">
                <h2 class="display-2 fw-bold">Transformamos ideas <span id="mainText" class="text-primary">en realidad
                        digital!</span>
                </h2>
            </div>
        </div>
        <div class="lc-block col-lg-6 mx-auto mb-5">
            <div editable="rich">

                <p class="lead">Potenciamos tu presencia en línea a través de estrategias creativas de marketing, soluciones
                    integrales de programacion y fotografia de primer nivel para tu negocio.</p>
            </div>
        </div>

        <div class="lc-block d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"> <a
                class="btn btn-primary btn-lg px-4 gap-3" id="btnMore" href="#" role="button">Quiero saber mas</a>
            <a class="btn btn-outline-secondary btn-lg px-4" id="btnContact" href="#" role="button">Contacto</a>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.text-primary {
    color: #e75f00 !important
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