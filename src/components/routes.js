
import { createRouter, createWebHistory } from "vue-router";

import contactView from "../views/ContactView.vue"
import aboutView from "../views/AboutView.vue"
import HomePage from "../views/HomePage.vue"
import photographyPage from "../components/photographyPage.vue"
import programmingPage from "../components/programmingPage.vue"
import marketingPage from "../components/marketingPage.vue"

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component:aboutView  },
  {path:"/contact",component:contactView},
  {path:"/programming",component:programmingPage},
  {path:"/marketing",component:marketingPage},
  {path:"/photography",component:photographyPage},
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
