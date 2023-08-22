<template>
    <div class="py-14 ">
        <div class="container">
            <div class="row">
                <div class="offset-lg-2 col-lg-8 col-md-12 col-12 text-center">
                    <span class="fs-4 text-warning ls-md text-uppercase fw-semibold">Aprovecha la tecnologia para tu negocio
                    </span>
                    <!-- heading  -->
                    <h2 class="display-3 mt-4 mb-3  fw-bold">Páginas web para negocios</h2>
                    <!-- para  -->
                    <p class="lead  px-lg-8 mb-6">Realizamos <span>páginas web y programas</span> para negocios que buscan
                        expandir su público y aumentar ganancias, dandoles la posibilidad de incorporarse a la era digital.
                    </p>
                    <router-link class="nav-link" to="/contact"><a href="#"
                            class="btn btn-primary">Contacto</a></router-link>
                </div>
            </div>
        </div>
    </div>


    <div class="container service">

        <h1 class="white-text">¿Que ofrecemos?</h1>

        <div class="row">
            <div class="col s12 m6 l3 center-align">
                <div class="card">
                    <div class="card-content">
                        <i class="bi bi-code-slash "></i>
                        <h5>Páginas web</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                </div>
            </div>

            <div class="col s12 m6 l3 center-align">
                <div class="card">
                    <div class="card-content">
                        <i class="bi bi-phone"></i>
                        <h5>Aplicaciones de celular</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                    </div>

                </div>
            </div>

            <div class="col s12 m6 l3 center-align">
                <div class="card">
                    <div class="card-content">
                        <i class="bi bi-search"></i>
                        <h5>SEO</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                </div>
            </div>

            <div class="col s12 m6 l3 center-align">
                <div class="card">
                    <div class="card-content">
                        <i class="bi bi-pc-display-horizontal"></i>
                        <h5>Programas de gestion</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                </div>
            </div>
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
span {
    color: #fecb4c !important;
}

.display-3 {
    color: #f28f0e;
}

.card i {
    font-size: 2em !important;
    color: white;
}


body {
    background: #181C32 !important;
}

.card {
    transition: 0.5s;
    background: #131625;
}

.card h5 {
    padding: 10px 0px;
    color: white;
}

.card p {
    color: white;
}

.card:hover i {
    color: #e85e00;
}

.card:hover h5 {
    color: #f28f0e
}

.service .card:hover {
    transform: scale(1.03);

}
</style>