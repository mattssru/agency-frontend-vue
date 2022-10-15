import { h, resolveComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import StructurePage from "@views/Structure/index.vue";
import SummaryReportPage from "@views/SummaryReport/index.vue";
import Dashboard from "@views/Dashboard/index.vue";
const routes = [
  { path: "/", component: Dashboard },
  {
    path: "/structure-agent",
    component: StructurePage,
  },
  {
    path: "/summary-report",
    component: SummaryReportPage,
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
