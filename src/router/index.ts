import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
// import Recent from "../components/recent.vue";
import Start from "../views/start.vue"
const Play = () => import("../views/play.vue")
const New = () => import("../views/new.vue")

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
  {
    path: "/play/:id",
    name: "Play",
    component: Play,
  },
  {
    path: "/new/:id",
    name: "New",
    component: New,
    meta: {
      id: 0,
    },
    alias: "/new",
  },
  // {
  //   path: "/library",
  //   name: "Library",
  //   component: Library,
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
