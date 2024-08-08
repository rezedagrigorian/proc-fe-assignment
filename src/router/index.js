import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import TrainingProfileView from "../views/TrainingProfileView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/training_profile/:id", component: TrainingProfileView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
