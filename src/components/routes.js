
import { createRouter, createWebHistory } from "vue-router";

import servicesView from '../views/ServicesView.vue';
import contactView from "../views/ContactView.vue"
import aboutView from "../views/AboutView.vue"
import HomePage from "../views/HomePage.vue"


const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component:aboutView  },
  {path:"/contact",component:contactView},
  {path:"/services",component:servicesView}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
