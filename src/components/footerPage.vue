<template>
    <footer class="footer mt-3 py-0 bg-light">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4 order-md-1">
                    <ul class="list-unstyled">
                        <li>
                            <a href="#">
                                <router-link class="nav-link" to="/">Inicio</router-link>
                            </a>
                        </li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Portafolio</a></li>
                        <li>
                            <a href="#">
                                <router-link class="nav-link" :class="{ 'active': $route.path === '/contact' }"
                                    to="/contact">Contacto</router-link>
                            </a>
                        </li>
                    </ul>
                </div>

                <div id="contactData" class="col-md-4 order-md-2 text-md-end">
                    <p>Villa Mercedes (San Luis)</p>
                    <p>2657-123456</p>
                    <p>estelarmkting@gmail.com</p>
                </div>
                <div class="col-md-4 order-md-3 text-center">
                    <img src="../assets/logoConLetras.png" alt="Logo de Tu Empresa" class="img-fluid"
                        style="max-width: 100px;">
                    <p>Desarrollado por <a id="becherLink" href="https://bechersoftware.vercel.app/" target="_blank">Becher
                            Software</a></p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
#becherLink {
    color: purple;
    text-decoration: underline
}

.footer {
    width: 100%;
    background-color: #181C32 !important;
    color: white;
}

.footer a {
    text-decoration: none;
    color: white;
    transition: color 0.5s;
}

.footer a:hover {
    color: #f28f0e;
}
</style>
