const routes = [
  {
    path: "/",
    component: () => import("components/auth/log_in.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("components/templates/ventas_pc.vue"),
  },
];

export default routes;
