<template>
    <nav id="navbarContainer" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src="../assets/logoSinLetras.png" alt="Logo" class="logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{ 'active': $route.path === '/' }" to="/">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{ 'active': $route.path === '/about' }"
                            to="/about">Nosotros</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :class="{ 'active': $route.path === '/contact' }"
                            to="/contact">Contacto</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  
<script>
export default {
    name: 'navbarPage'
}
</script>
  
<style scoped>
.nav-item .nav-link.active {
    color: #f28f0e
}

.navbar-toggler {
    background-color: #f28f0e;
}


#navbarContainer {
    background-color: #141922 !important
}

.nav-link {
    color: white;
}

.nav-link:hover {
    color: #e85e00;
}

.logo {
    max-width: 100px;
    /* Adjust the size of the logo */
}

@media (max-width: 768px) {
    .navbar-nav {
        flex-direction: column;
    }
}
</style>
  