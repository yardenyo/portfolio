import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/terms",
      name: "terms",
      component: () => import("@/views/Terms.vue"),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("@/views/Privacy.vue"),
    },
    {
      path: "/accessibility",
      name: "accessibility",
      component: () => import("@/views/Accessibility.vue"),
    },
  ],
});

export default router;
