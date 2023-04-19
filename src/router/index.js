import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/components/Dashboard";
import DashboardHome from "@/pages/Home";
import Graph from "@/pages/Graphs";
import Login from "@/pages/Login";

const routes = [
  { path: "/login", name: "Login", component: Login },
  {
    path: "/",
    component: Dashboard,
    props: true,
    children: [
      {
        path: "/",
        name: "DashboardHome",
        component: DashboardHome,
        props: true,
      },
      { path: "analytics", name: "Graph", component: Graph, props: true },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
