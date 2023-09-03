import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import legals from "@/shared/legals";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      redirect: "/:slug",
    },
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/:slug",
      name: "globalView",
      component: () => import("@/views/GlobalView.vue"),
      props: (route) => {
        const slug = route.params.slug;
        let props = {};
        if (legals.value[slug]) {
          props = {
            title: legals.value[slug].title,
            subtitle: legals.value[slug].subtitle,
            content: legals.value[slug].content,
          };
        }
        return props;
      },
    },
  ],
});

export default router;
