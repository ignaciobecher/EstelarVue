<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="card card-1">
                    <h3>Marketing</h3>
                    <p>Ofrecemos desde manejo de redes y ganancia de seguidores, hasta
                        publicidad
                        <span style="color: #e85e00">vehiculo y radio </span>en vehiculo y radio
                    </p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card card-2">
                    <h3>Fotografia</h3>
                    <p>En Estelar te brindamos <span style="color: #e85e00">fotografia</span> completa y de calidad, <span
                            style="color: #e85e00">filmacion</span> con actores y postproduccion.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card card-3">
                    <h3>Programacion</h3>
                    <p>Ayudamos a tu negocio con el software, desde <span style="color: #e85e00">paginas web</span> hasta
                        <span style="color: #e85e00">aplicaciones</span> moviles o programas de gestion.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
body {
    font-family: 'Nunito', sans-serif;
    padding: 50px;
}

.card {
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 6px 10px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .05);
    transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12);
    padding: 14px 80px 18px 36px;
    cursor: pointer;
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06);
}

.card h3 {
    font-weight: 600;
}

.card img {
    position: absolute;
    top: 20px;
    right: 15px;
    max-height: 120px;
}

.card-1 {
    background-image: url("../assets/mktBlanco-removebg-preview.png");
    background-repeat: no-repeat;
    background-position: right;
    background-size: 80px;
}

.card-2 {
    background-image: url("../assets/fotografiaBlanco.png");
    background-repeat: no-repeat;
    background-position: right;
    background-size: 80px;
}

.card-3 {
    background-image: url("../assets/programacionBlanca.png");
    background-repeat: no-repeat;
    background-position: right;
    background-size: 80px;
}

@media(max-width: 990px) {
    .card {
        margin: 20px;
    }
}
</style>