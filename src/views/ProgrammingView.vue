<template>
    <div class="container my-5" id="abouttextstyle">
        <div class="row">
            <div class="col-md-6 p-4 p-sm-5 order-2 order-sm-1">
                <small class="text-uppercase" style="color: #9B5DE5;"></small>
                <h1 class="h2 mb-4" style="font-weight: 600;">Programas de todo tipo para tu <span
                        style="color: #e75f00;">negocio</span>
                </h1>
                <p class="text-secondary" style="line-height: 2;">En estelar desarrollamos nuestros programas con la
                    tecnología actual, implementando soluciones <br> de calidad y con parametros de ultima generación.
                </p>

            </div>
            <div class="col-md-6 p-0 text-center order-1 order-sm-2">
                <img src="https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    class="w-100" alt="">
            </div>

            <div class="col-md-6 p-0 text-center">
                <img src="https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    class="w-100" alt="">
            </div>
            <div class="col-md-6 p-4 p-sm-5">
                <small class="text-uppercase" style="color: #9B5DE5;"></small>
                <h1 class="h2 mb-4" style="font-weight: 600;">Desarrollamos tu<span style="color:#e75f00;">página web</span>
                </h1>
                <p class="text-secondary" style="line-height: 2;">Nos encargamos de la creación de la página web para tu
                    negocio, vos preocupate solo por vender.</p>

            </div>
        </div>
    </div>



    <div class="introduction">
        <h1>Portolio</h1>
    </div>
    <div class="container">
        <div class="row">

            <article class="col-md-4 col-lg-3">
                <div class="card-content">
                    <a class="spectrum-a" href="http://uj.ac.za"><img class="spectrum1"
                            src="https://image.freepik.com/free-vector/science-elements-with-test-tubes-and-molecules_23-2147491185.jpg"
                            alt="meow">
                        <h4 class="spectrum-h2">Spectrum</h4>
                        <p>Visit our world-class analytical facility for South African scientists, Spectrum</p>
                    </a>
                </div>
                <!-- .card-content -->
            </article>
            <!-- .card -->

            <article class="col-md-4 col-lg-3">
                <div class="card-content">
                    <a href="http://uj.ac.za"><img class="spectrum1"
                            src="https://image.freepik.com/free-vector/science-elements-with-test-tubes-and-molecules_23-2147491185.jpg"
                            alt="meow">
                        <h4 class="spectrum-h2">Study With Us</h4>
                        <p>Visit our world-class analytical facility for South African scientists, Spectrum</p>
                    </a>
                </div>
                <!-- .card-content -->

            </article>
            <!-- .card -->

            <article class="col-md-4 col-lg-3">
                <div class="card-content">
                    <a href="http://uj.ac.za"><img class="spectrum1"
                            src="https://image.freepik.com/free-vector/science-elements-with-test-tubes-and-molecules_23-2147491185.jpg"
                            alt="meow">
                        <h4 class="spectrum-h2">Soweto Science Centre</h4>
                        <p>Visit our world-class analytical facility for South African scientists, Spectrum</p>
                    </a>
                </div>
                <!-- .card-content -->

            </article>
            <!-- .card -->

            <article class="col-md-4 col-lg-3">
                <div class="card-content">
                    <a href="http://uj.ac.za"><img class="spectrum1"
                            src="https://image.freepik.com/free-vector/science-elements-with-test-tubes-and-molecules_23-2147491185.jpg"
                            alt="meow">
                        <h4 class="spectrum-h2">Upcoming events</h4>
                        <p>Visit our world-class analytical facility for South African scientists, Spectrum</p>
                    </a>
                </div>
                <!-- .card-content -->

            </article>
            <!-- .card -->

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
div.introduction {
    padding: 1em;
    background: #181C32;

}

p.site-title {
    color: #000000;
}

article.col-md-4 col-lg-3 {
    background: #f5f5f5;
    margin-top: 1em;
    margin-bottom: 2em;

}

div.card-content {
    background: #f5f5f5;
    padding: 0.5em;
    margin-top: 1em;
    margin-bottom: 2em;

}

div.card-content h3 {
    margin-bottom: 0.5em;
    font-weight: normal;
}

div.card-content p {
    font-size: 95%;
}

img.spectrum1 {
    width: 100%;
    height: auto;
}

div a,
a:hover {
    text-decoration: none;
}

div a:hover {
    opacity: 0.8;
}
</style>