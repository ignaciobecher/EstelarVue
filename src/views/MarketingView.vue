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

                        <p>
                            Nuestro equipo altamente capacitado combina creatividad, tecnología y análisis estratégico para
                            crear soluciones personalizadas que se adapten a las necesidades únicas de tu marca. Si buscas
                            expandir tu alcance, aumentar la visibilidad de tu negocio y conectarte de manera efectiva con
                            tu audiencia, estás en el lugar correcto.


                        </p>
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

                        <p>El marketing digital abarca toda la publicidad en medios, y nosotros nos especializamos
                            en fortalecer tu negocio.</p>
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

                        <p>¿Te falta tiempo para gestionar las redes sociales de tu negocio? ¡No te preocupes! Nosotros nos
                            encargamos de ello por ti.&nbsp;</p>
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

                        <p>Disponemos de vehículos de última generación con publicidad de audio y video incorporada de alta
                            calidad.&nbsp;</p>
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

                        <p>Te ofrecemos la oportunidad de anunciarte en emisoras de radio con las que tenemos
                            colaboración.</p>
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