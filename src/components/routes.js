
import { createRouter, createWebHistory } from "vue-router";

import aboutPage from "../components/aboutPage.vue"
import HomePage from "../views/HomePage.vue"

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: aboutPage },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
