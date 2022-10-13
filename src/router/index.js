import { h, resolveComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import AGPage from "@views/AG/index.vue";
import UMPage from "@views/UM/index.vue";
import Dashboard from "@views/Dashboard/index.vue";
const routes = [
  { path: "/", component: Dashboard },
  {
    path: "/um",
    component: AGPage,
  },
  {
    path: "/log-in",
    component: UMPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
