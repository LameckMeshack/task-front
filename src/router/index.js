import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/components/Dashboard";
import DashboardHome from "@/pages/Home";
import Graph from "@/pages/Graphs";

const routes = [
  // { path: "/", redirect: { name: "DashboardHome" } },
  {
    path: "/",
    component: Dashboard,
    props: true,
    children: [
      // { path: "/", redirect: { name: "DashboardHome" } },
      {
        path: "/",
        name: "DashboardHome",
        component: DashboardHome,
        props: true,
      },
      // { path: "home", name: "DashboardHome", component: DashboardHome },
      { path: "analytics", name: "Graph", component: Graph, props: true },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
