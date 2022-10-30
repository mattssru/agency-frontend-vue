import DashboardAVP from "@views/Dashboard/avp.vue";
import DashboardDM from "@views/Dashboard/dm.vue";
import DashboardEVP from "@views/Dashboard/evp.vue";
import Dashboard from "@views/Dashboard/index.vue";
import DashboardSDM from "@views/Dashboard/sdm.vue";
import DashboardSEVP from "@views/Dashboard/sevp.vue";
import DashboardSum from "@views/Dashboard/sum.vue";
import DashboardUM from "@views/Dashboard/um.vue";
import ChildPage from "@views/Structure/Child.vue";
import StructurePage from "@views/Structure/index.vue";
import SummaryReportPage from "@views/SummaryReport/index.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", component: Dashboard },
  { path: "/dashboard-um", component: DashboardUM },
  { path: "/dashboard-sum", component: DashboardSum },
  { path: "/dashboard-dm", component: DashboardDM },
  { path: "/dashboard-sdm", component: DashboardSDM },
  { path: "/dashboard-avp", component: DashboardAVP },
  { path: "/dashboard-sevp", component: DashboardSEVP },
  { path: "/dashboard-evp", component: DashboardEVP },
  {
    path: "/structure-agent",
    component: StructurePage,
  },
  { path: "/structure-agent/:id", component: ChildPage },
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
