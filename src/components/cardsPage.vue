<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 animate__animated " ref="animatedElement1">
                <div class="card card-1">
                    <h3>Marketing</h3>
                    <p>Ofrecemos manejo de redes sociales para el crecimiento de seguidores, así como publicidad en
                        <span style="color: #e85e00">vehiculo y radio </span>
                    </p>
                </div>
            </div>
            <div class="col-md-4 animate__animated " ref="animatedElement2">
                <div class="card card-2">
                    <h3>Fotografía</h3>
                    <p>
                        En Estelar te brindamos <span style="color: #e85e00">fotografía</span> integral y profesional, así
                        como <span style="color: #e85e00">filmación</span> publicitaria y de videos corporativos.
                    </p>
                </div>
            </div>
            <div class="col-md-4 animate__animated " ref="animatedElement3">
                <div class="card card-3 ">
                    <h3>Programación</h3>
                    <p>Ayudamos a tu negocio con soluciones digitales, desde <span style="color: #e85e00">páginas web</span>
                        hasta aplicaciones y <span style="color: #e85e00">programas</span> de gestión.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const options = {
            threshold: 0.4 // Ajusta este valor según tus necesidades
        };

        const observer1 = new IntersectionObserver(this.animateOnScroll, options);
        observer1.observe(this.$refs.animatedElement1);

        const observer2 = new IntersectionObserver(this.animateOnScroll, options);
        observer2.observe(this.$refs.animatedElement2);

        const observer3 = new IntersectionObserver(this.animateOnScroll, options);
        observer3.observe(this.$refs.animatedElement3);
    },
    methods: {
        animateOnScroll(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__fadeInLeft'); // Cambia a la animación que desees
                }
            });
        }
    }
}
</script>

<style scoped>
.container p {
    color: black !important;
}

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