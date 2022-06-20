import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Recent from "../components/recent.vue";
const Start = () => import("../views/start.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Start",
    component: Start,
    alias: "/start",
  },
  // //     {
  // //         path: '/library',
  // //         name: 'Library',
  // //         component: Library
  // //     }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
