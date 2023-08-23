<template>
    <div class="container py-4">
        <div class="row mb-5">
            <div class="col-md-6 align-self-center">
                <div class="lc-block">
                    <img class="img-fluid mx-auto d-block" src="../assets/Marketing/1-removebg-preview.png"
                        style="height:30vh">
                </div><!-- /lc-block -->
            </div><!-- /col -->
            <div class="col-md-6">
                <div class="lc-block">
                    <div editable="rich">

                        <h2>Marketing para tu negocio</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus est. Etiam diam
                            metus, lobortis non augue at, placerat viverra risus. Cras ornare faucibus laoreet.&nbsp;</p>
                        <p>Aenean vel nisi in ipsum congue fermentum et ut arcu. Proin leo diam,
                            vulputate eu tellus ac, mattis cursus nunc. In aliquet erat ac eros congue maximus.&nbsp;</p>
                        <p><br></p>
                    </div>
                </div><!-- /lc-block -->
            </div><!-- /col -->
        </div>
        <div class="row mt-4">
            <div class="col-md-3 col-sm-6">
                <div class="lc-block">
                    <img class="img-fluid mx-auto d-block mb-2" src="../assets/Marketing/6-removebg-preview.png"
                        style="height:10vh">
                </div><!-- /lc-block -->
                <div class="lc-block text-center">
                    <div editable="rich">

                        <h4>Marketing digital</h4>

                        <p>El marketing digital se compone de toda la publicidad en medios digitales, nosotros nos
                            encargamos de que te negocio se haga fuerte en el mercado digital.&nbsp;</p>
                    </div>
                </div><!-- /lc-block -->
            </div><!-- /col -->
            <div class="col-md-3 col-sm-6">
                <div class="lc-block">
                    <img class="img-fluid mx-auto d-block mb-2" src="../assets/Marketing/5-removebg-preview.png"
                        style="height:10vh">
                </div><!-- /lc-block -->
                <div class="lc-block text-center">
                    <div editable="rich">

                        <h4>Marketing de redes</h4>

                        <p>¿No tenes tiempo para manejar las redes de tu negocio? No te preocupes, nosotros lo hacemos por
                            vos.&nbsp;</p>
                    </div>
                </div><!-- /lc-block -->
            </div><!-- /col -->
            <div class="col-md-3 col-sm-6">
                <div class="lc-block">
                    <img class="img-fluid mx-auto d-block mb-2" src="../assets/Marketing/10-removebg-preview.png"
                        style="height:10vh">
                </div><!-- /lc-block -->
                <div class="lc-block text-center">
                    <div editable="rich">

                        <h4>Publicidad vehicular</h4>

                        <p>Contamos con vehiculos ultimo modelo con publicidad de audio y video incorporado de primer
                            nivel.&nbsp;</p>
                    </div>
                </div><!-- /lc-block -->
            </div><!-- /col -->
            <div class="col-md-3 col-sm-6">
                <div class="lc-block">
                    <img class="img-fluid mx-auto d-block mb-2" src="../assets/Marketing/4-removebg-preview.png"
                        style="height:10vh">
                </div><!-- /lc-block -->
                <div class="lc-block text-center">
                    <div editable="rich">

                        <h4>Publicidad radial</h4>

                        <p>Te brindamos la posibilidad de publicitar en radios con las cuales estamos asociados.&nbsp;</p>
                    </div>
                </div><!-- /lc-block -->
            </div><!-- /col -->
        </div>
    </div>


    <footerPage></footerPage>
</template>

<script>
import footerPage from "../components/footerPage.vue"
export default {
    components: {
        footerPage
    }
}
</script>

<style scoped>
.col-md-6 h2 {
    color: #e75f00 !important;
}

.col-md-3 h4 {
    color: #e75f00 !important;
}

.col-md-3 {
    transition: transform 0.3s, filter 0.3s;
}

.col-md-3:hover {
    transform: scale(1.1);
}
</style>