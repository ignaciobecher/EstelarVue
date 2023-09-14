<template>
  <footer class="footer mt-3 py-0 bg-light">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 order-md-1">
          <ul class="list-unstyled">
            <li>
              <a href="#">
                <router-link class="nav-link" to="/"
                  ><i class="bi bi-house"></i> Inicio</router-link
                >
              </a>
            </li>
            <li>
              <a href="#">
                <router-link class="nav-link" to="/about">
                  <i class="bi bi-people"> </i> Nosotros
                </router-link>
              </a>
            </li>
            <li>
              <a href="#">
                <router-link class="nav-link" to="/services">
                  <i class="bi bi-tools"></i> Servicios
                </router-link>
              </a>
            </li>
            <li>
              <a href="#">
                <router-link class="nav-link" to="/contact"
                  ><i class="bi bi-phone"></i> Contacto</router-link
                >
              </a>
            </li>
          </ul>
        </div>

        <div id="contactData" class="col-md-4 order-md-2 text-md-end">
          <p>Villa Mercedes (San Luis) <i class="bi bi-geo-alt"></i></p>
          <p>2657-201291/221459/246942 <i class="bi bi-telephone"></i></p>
          <p>estelarmkting@gmail.com <i class="bi bi-envelope"></i></p>
        </div>
        <div class="col-md-4 order-md-3 text-center">
          <img
            src="../assets/logoConLetrasNaranjas.png"
            alt="Logo de Tu Empresa"
            class="img-fluid"
            style="max-width: 100px"
          />
          <p>
            Desarrollado por
            <a
              id="becherLink"
              href="https://bechersoftware.tech/"
              target="_blank"
              >Becher Software</a
            >
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-auto">
          <a
            href="https://www.instagram.com/estelarsoluciones/"
            class="social-icon"
          >
            <i class="bi bi-instagram"></i>
          </a>
        </div>
        <div class="col-auto">
          <a href="#" class="social-icon">
            <i class="bi bi-facebook"></i>
          </a>
        </div>
        <div class="col-auto">
          <a href="#" class="social-icon">
            <i class="bi bi-twitter"></i>
          </a>
        </div>
        <div class="col-auto">
          <a href="#" class="social-icon">
            <i class="bi bi-tiktok"></i>
          </a>
        </div>
        <!-- Agrega más íconos de redes sociales aquí -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
#becherLink {
  color: purple;
  text-decoration: underline;
}

.footer {
  width: 100%;
  background-color: #0a0c17 !important;
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
