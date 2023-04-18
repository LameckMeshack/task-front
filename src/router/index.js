import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/components/Dashboard";
import DashboardHome from "@/pages/Home";
import Graph from "@/pages/Graphs";


const routes = [
  { path: "/", redirect: { name: "DashboardHome" } },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      { path: "/", redirect: { name: "DashboardHome" } },
      { path: "home", name: "DashboardHome", component: DashboardHome },
      { path: "analytics", name: "Graph", component: Graph },

    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
