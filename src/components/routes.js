
import { createRouter, createWebHistory } from "vue-router";

import aboutPage from "../components/aboutPage.vue"
import HomePage from "../views/HomePage.vue"
import contactPage from "../components/contactPage.vue"
import photographyPage from "../components/photographyPage.vue"
import programmingPage from "../components/programmingPage.vue"
import marketingPage from "../components/marketingPage.vue"

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: aboutPage },
  {path:"/contact",component:contactPage},
  {path:"/programming",component:programmingPage},
  {path:"/marketing",component:marketingPage},
  {path:"/photography",component:photographyPage},
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
