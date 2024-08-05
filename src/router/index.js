import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ProfileView from "../views/ProfileView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/training_profile/:id", component: ProfileView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
