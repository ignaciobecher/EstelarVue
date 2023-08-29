<template>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <a href="">
                    <router-link to="/photography">
                        <img src="../assets/Estelarfotografia(1).png" class="d-block mx-auto img-small rounded" alt="...">
                    </router-link>
                </a>

            </div>
            <div class="carousel-item">
                <a href="">
                    <router-link to="/marketing">
                        <img src="../assets/estelarMarketing.png" class="d-block mx-auto img-small rounded" alt="...">
                    </router-link>
                </a>
            </div>
            <div class="carousel-item">
                <a href="">
                    <router-link to="/development">
                        <img src="../assets/estelarProgramacion.png" class="d-block mx-auto img-small rounded" alt="...">
                    </router-link>
                </a>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.img-small {
    max-width: 80%;

}
</style>