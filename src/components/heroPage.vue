<template>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/programmingBoy.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-block">
                    <h5>Programacion</h5>
                    <p>En Estelar media realizamos todo tipo de programacion</p>
                    <a class="btn btn-primary btn-sm px-2" id="btnContact" href="#" role="button">Más información</a>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/fotografia.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-block">
                    <h5>Fotografia</h5>
                    <p>En Estelar media realizamos fotografia.</p>
                    <a class="btn btn-primary btn-sm px-2" id="btnContact" href="#" role="button">Más información</a>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/marketing.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-block">
                    <h5>Marketing</h5>
                    <p>En Estelar media realizamos marketing.</p>
                    <a class="btn btn-primary btn-sm px-2" id="btnContact" href="#" role="button">Más información</a>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <!-- <div class="animate__animated animate__slideInLeft">
        <h1>Animacion</h1>
    </div> -->
</template>

<script>
export default {

}
</script>

<style scoped>
.carousel-inner .carousel-item img {
    max-height: 600px;
    max-width: 600px;
    /* Ajusta el tamaño máximo de altura según tus necesidades */
    margin: 0 auto;
    /* Para centrar la imagen horizontalmente en el carrusel */
    opacity: 0.65;
}

.carousel {
    background-color: black;
}

.carousel-caption h5 {
    color: white;
    /* Cambia el color según tu preferencia */
    font-size: 50px;
    font-weight: 900;

}

@media (max-width: 768px) {
    .carousel-inner .carousel-item img {
        max-height: 300px;
        max-width: 100%;
    }

    .carousel-caption h5 {
        font-size: 30px;
    }

    .carousel-caption p {
        font-weight: 700;
    }
}
</style>