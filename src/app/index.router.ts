import Vue from "vue";
import { RouteConfig } from "vue-router";
import VueRouter from "vue-router";
import { ConfigAdapter } from "../lib/sg-resource";
import * as PageFactory from "./pages/factory.page";

Vue.use(VueRouter);
// tslint:disable:object-literal-sort-keys
const routes: RouteConfig[] = [
  // SGV-BUILD-PAGE-ROUTER-CONFIG # NOT DELETE
  { path: "/login", name: "login", component: PageFactory.loginPagePreloading },

  {
    path: "/",
    component: PageFactory.layoutPagePreloading,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: PageFactory.dashboardPagePreloading,
        meta: {
          title: "首页",
          icon: "el-icon-platform-eleme",
        },
      },
    ],
  },
  {
    path: "/home",
    component: PageFactory.layoutPagePreloading,
    children: [
      {
        path: "index",
        component: PageFactory.homePagePreloading,
        meta: {
          title: "home",
          icon: "el-icon-s-data",
        },
      },
    ],
  },
  { path: "*", redirect: "loginold" },
  {
    path: "/loginold",
    name: "loginold",
    component: PageFactory.loginoldPagePreloading,
  },
  {
    path: "/loginold/:return",
    name: "loginoldReturn",
    component: PageFactory.loginoldPagePreloading,
  },
];
const scrollBehavior = (to: any, from: any, savedPosition: any) => {
  return savedPosition || { x: 0, y: 0 };
};
const { env, sites } = ConfigAdapter.getConfig();
const router = new VueRouter({
  base: sites[env].publicPath,
  mode: "history",
  routes,
  scrollBehavior,
});

export default router;
