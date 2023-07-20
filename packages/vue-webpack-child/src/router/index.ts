import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AboutView from "../views/AboutView.vue";
import BigScreen from '@/views/BigScreen/index.vue'
const _window = window as any;
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: BigScreen,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
];
const base = _window.__POWERED_BY_QIANKUN__ ? "/vue-child" : "/";
const router = createRouter({
  history: createWebHistory(base),
  routes,
});

export default router;
