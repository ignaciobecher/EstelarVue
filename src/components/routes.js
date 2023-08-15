
import { createRouter, createWebHistory } from "vue-router";

import headerPage from "../components/headerPage.vue"
import HomePage from "../views/HomePage.vue"

const routes = [
  { path: "/", component: HomePage },
  { path: "/header", component: headerPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
