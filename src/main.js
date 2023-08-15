import { createApp } from "vue";
import App from "./App.vue";
import "popper.js"
import "jquery"
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.js'
import 'animate.css';

import router from "./components/routes"; // No uses llaves para importar el router



createApp(App)
  .use(router) // Usa el router con createApp
  .mount("#app");
