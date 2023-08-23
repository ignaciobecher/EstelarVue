
import { createRouter, createWebHistory } from "vue-router";


import marketingView from "../views/MarketingView.vue"
import programmingView from "../views/ProgrammingView.vue"
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
  {path:"/photography", component:photographyView},
  {path:"/development",component:programmingView},
  {path:"/marketing",component:marketingView}

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
