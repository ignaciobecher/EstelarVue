<template>
    <div class="overflow-hidden mb-5">
        <div class="container-fluid col-xxl-8">
            <div class="row flex-lg-nowrap align-items-center g-5">
                <div class="order-lg-1 w-100">
                    <img style="clip-path: polygon(25% 0%, 100% 0%, 100% 99%, 0% 100%);" src="../assets/fondoHeader.png"
                        class="d-block mx-lg-auto img-fluid" alt="Photo by Milad Fakurian" loading="lazy"
                        srcset="../assets/fondoHeader.png 1080w, ../assets/fondoHeader.png, ../assets/fondoHeader.png 300w, ../assets/fondoHeader.png 768w, ../assets/fondoHeader.png 1024w"
                        sizes="(max-width: 1080px) 100vw, 1080px" width="2160" height="768">

                </div>
                <div class="col-lg-6 col-xl-5 text-center text-lg-start pt-lg-5 mt-xl-4">
                    <div class="lc-block mb-4">
                        <div editable="rich">
                            <h1 class="fw-bold display-3">Impulsamos Tu Presencia Digital con Soluciones
                                Innovadoras </h1>
                        </div>
                    </div>

                    <!-- <div class="lc-block mb-5">
                        <div editable="rich">
                            <p class="rfs-8">
                                Estelar: Transformando Ideas en Realidad Digital a través del <span>Marketing</span> , la
                                <span>fotografía</span> y la <span>programación</span>
                            </p>
                        </div>
                    </div> -->

                    <div class="lc-block mb-6">
                        <router-link class="btn btn-primary px-4 me-md-2 btn-lg" to="/contact">Digitalizate!</router-link>
                    </div>

                    <div class="lc-block">
                        <div editable="rich">
                            <p class="fw-bold"> Nuestros asociados:</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="lc-block col-3"><img class="img-fluid wp-image-975"
                                src="../assets/logoConLetrasNaranjas.png" width="" height="300" srcset="" sizes="" alt="">
                        </div>
                        <div class="lc-block col-3"><img class="img-fluid wp-image-977"
                                src="../assets/ParnertsLogos/PartnerLogo1.png" width="" height="300" srcset="" sizes=""
                                alt=""></div>
                        <div class="lc-block col-3"><img class="img-fluid wp-image-974"
                                src="../assets/ParnertsLogos/PartnerLogo2.png" width="" height="300" srcset="" sizes=""
                                alt=""></div>
                        <div class="lc-block col-3"><img class="img-fluid wp-image-967"
                                src="../assets/ParnertsLogos/PartnerLogo3.png" width="" height="300" srcset="" sizes=""
                                alt=""></div>
                    </div>
                </div>

            </div><!-- /lc-block -->
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn:hover {
    background-color: #f28f0e !important;
    border-color: #f78d03 !important;
}

.fw-bold {
    color: #e75f00 !important
}

.rfs-8 {
    color: white;
}

.rfs-8 span {
    color: #e75f00;
}
</style>