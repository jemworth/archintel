import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../views/Login.vue";
import DashboardPage from "../views/Dashboard.vue";
import ArticlesPage from "../views/Articles.vue";
import LeftSidebarLayout from "../layout/LeftSidebar.vue";
import EmptyPageLayout from "../layout/EmptyPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "default",
    component: EmptyPageLayout,
    redirect: "/login",
    children: [
      {
        path: "/login",
        name: "login",
        component: LoginPage,
        meta: {
          title: "About Page - Example App",
          metaTags: [
            {
              name: "description",
              content: "The about page of our example app.",
            },
            {
              property: "og:description",
              content: "The about page of our example app.",
            },
          ],
        },
      },
    ],
  },
  {
    path: "/editor",
    name: "Editor",
    component: LeftSidebarLayout,
    redirect: "/editor/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: DashboardPage,
      },
      {
        path: "articles",
        name: "Articles",
        component: ArticlesPage,
      },
    ],
  },
  {
    path: "/writer",
    name: "Writer",
    component: LeftSidebarLayout,
    redirect: "/writer/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: DashboardPage,
      },
      {
        path: "articles",
        name: "Articles",
        component: ArticlesPage,
      },
    ],
  },
  { path: "/404" },
  { path: "*", redirect: "/404" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
