import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
// import Recent from "../components/recent.vue";
import Start from "../views/start.vue"
import Loading from "../views/loading.vue"
const Play = () => import("../views/play.vue")
const New = () => import("../views/new.vue")
const Join = () => import("../views/join.vue")
const Game = () => import("../views/game.vue")

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
  {
    path: "/loading",
    name: "Loading",
    component: Loading,
    meta: {
      targetId: 0,
    },
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
    alias: "/new",
  },
  {
    path: "/join/:id",
    name: "Join",
    component: Join,
    meta: {
      id: -1,
      host: '...'
    },
    alias: "/join",
  },
  {
    path: "/game/:id",
    component: Game,
    name: "Game",
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
