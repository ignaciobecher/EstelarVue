
import { createRouter, createWebHistory } from "vue-router";

import headerPage from "../components/headerPage.vue"
import heroPage from "../components/heroPage.vue"

const routes = [
  { path: "/", component: heroPage },
  { path: "/header", component: headerPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
