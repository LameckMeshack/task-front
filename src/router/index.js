import { createRouter, createWebHistory } from "vue-router";
const Login = () => import("@/pages/Login");
const Dashboard = () => import("@/components/Dashboard");
const DashboardHome = () => import("@/pages/Home");
const Graph = () => import("@/pages/Graphs");
const CreateTask = () => import("@/pages/CreateTask");

const routes = [
  { path: "/login", name: "Login", component: Login },
  {
    path: "/",
    component: Dashboard,

    children: [
      {
        path: "/",
        name: "DashboardHome",
        component: DashboardHome,
      },
      { path: "analytics", name: "Graph", component: Graph },
      { path: "create-task", name: "Create", component: CreateTask },
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
