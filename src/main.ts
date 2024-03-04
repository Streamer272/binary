import { createApp } from "vue";
import Home from "./pages/Home.vue";
import * as VueRouter from "vue-router";
import Playground from "./pages/Playground.vue";
import "./index.css";

const routes = [
  { path: "/", component: Home },
  { path: "/playground", component: Playground },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: routes,
});

const app = createApp({});
app.use(router);
app.mount("#app");
