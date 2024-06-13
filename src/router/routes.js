const routes = [
  {
    path: "/",
    component: () => import("components/auth/log_in.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("components/templates/ventas_pc.vue"),
  },
  {
    path: "/deathnote",
    component: () => import("src/components/templates/death_note.vue"),
  },
  {
    path: "/dragonball",
    component: () => import("src/components/templates/dragon_ball.vue"),
  },
  {
    path: "/chainsawman",
    component: () => import("src/components/templates/chainsaw_man.vue"),
  },
];

export default routes;
