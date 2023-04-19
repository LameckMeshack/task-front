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

//check if user is logged in
router.beforeEach((to, from, next) => {
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("token");

  // try to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});

export default router;
