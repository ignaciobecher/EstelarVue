import { createApp } from "vue";
import App from "./App.vue";
import "popper.js"
import "jquery"
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.js'
import "bootstrap-icons/font/bootstrap-icons.css"
import 'animate.css';
import "hover.css"

import router from "./components/routes"; // No uses llaves para importar el router



createApp(App)
  .use(router) // Usa el router con createApp
  .mount("#app");
