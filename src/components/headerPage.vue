<template>
    <div class="hero-container">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Bienvenido a nuestro sitio</h1>
                <p class="lead">Explora nuestras increíbles características y servicios.</p>
                <router-link to="/about" class="btn btn-primary btn-lg">Saber más</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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