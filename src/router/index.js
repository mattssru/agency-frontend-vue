import DashboardAVP from "@views/Dashboard/avp.vue";
import DashboardDM from "@views/Dashboard/dm.vue";
import DashboardEVP from "@views/Dashboard/evp.vue";
import Dashboard from "@views/Dashboard/index.vue";
import DashboardSDM from "@views/Dashboard/sdm.vue";
import DashboardSEVP from "@views/Dashboard/sevp.vue";
import DashboardSum from "@views/Dashboard/sum.vue";
import DashboardUM from "@views/Dashboard/um.vue";
import DashboardVP from "@views/Dashboard/vp.vue";
import AGPage from "@views/Structure/ag.vue";
import ALPage from "@views/Structure/al.vue";
import StructurePage from "@views/Structure/index.vue";
import SUMPage from "@views/Structure/sum.vue";
import SummaryReportPage from "@views/SummaryReport/index.vue";
import MyProfilePage from "@views/Structure/self.vue";
import SummaryReportPageAG from "@views/SummaryReport/SummaryReportAG.vue";
import SummaryReportPageGM from "@views/SummaryReport/SummaryReportGM.vue";


import DMPage from "@views/Structure/dm.vue";
import SDMPage from "@views/Structure/sdm.vue";
import AVPPage from "@views/Structure/avp.vue";
import VPPage from "@views/Structure/vp.vue";
import EVPPage from "@views/Structure/evp.vue";
import SEVPPage from "@views/Structure/sevp.vue";

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
  { path: "/dashboard-vp", component: DashboardVP },
  {
    path: "/structure-agent",
    component: StructurePage,
    children: [
      {
        path: "",
        component: MyProfilePage,
      },
      {
        path: "ag",
        component: MyProfilePage,
      },
      {
        path: "sum",
        component: SUMPage,
      },
      {
        path: "dm",//nd
        component: DMPage,
      },
      {
        path: "sdm",//nd
        component: SDMPage,
      },
      {
        path: "avp",//nd
        component: AVPPage,
      },
      {
        path: "vp",//nd
        component: VPPage,
      },
      {
        path: "evp",//nd
        component: EVPPage,
      },
      {
        path: "sevp",//nd
        component: SEVPPage,
      },
      
      {
        path: "dm",
        component: DMPage,
      },
      {
        path: ":id/al",
        component: ALPage,
      },
      {
        path: ":id/ag",
        component: AGPage,
      },
    ],
  },
  {
    path: "/summary-report",
    component: SummaryReportPage,
  },
  {
    path: "/summary-report/al",
    redirect: "/summary-report",
  },
  { path: "/summary-report/ag", component: SummaryReportPageAG },
  { path: "/summary-report/gm", component: SummaryReportPageGM },
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
