import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("@/views/Home/index.vue"),
  },
  {
    path: "/favour",
    component: () => import("@/views/Favour/index.vue"),
  },
  {
    path: "/order",
    component: () => import("@/views/Order/index.vue"),
  },
  {
    path: "/profile",
    component: () => import("@/views/Profile/index.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
