
import { createRouter, createWebHistory } from "vue-router";

import photographyView from "../views/PhotographyView.vue"
import servicesView from '../views/ServicesView.vue';
import contactView from "../views/ContactView.vue"
import aboutView from "../views/AboutView.vue"
import HomePage from "../views/HomePage.vue"


const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component:aboutView  },
  {path:"/contact",component:contactView},
  {path:"/services",component:servicesView},
  {path:"/photography", component:photographyView}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
