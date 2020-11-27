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
        path: "/dashboard",
        component: PageFactory.dashboardPagePreloading,
        meta: {
          title: "dashboard",
          icon: "el-icon-platform-eleme",
          active: "/dashboard",
        },
      },
    ],
  },
  {
    path: "/home",
    component: PageFactory.layoutPagePreloading,
    children: [
      {
        path: "/home",
        component: PageFactory.homePagePreloading,
        meta: {
          title: "home",
          icon: "el-icon-s-data",
          active: "/home/index",
        },
      },
    ],
  },

  {
    path: "/admin",
    name: "addadmin",
    component: PageFactory.layoutPagePreloading,
    meta: {
      title: "管理员",
      icon: "el-icon-s-custom",
      active: "/adminlist",
    },
    children: [
      {
        path: "/adminlist",
        name: "adminlist",
        component: PageFactory.adminlistPagePreloading,
        meta: {
          title: "管理员列表",
          icon: "",
          active: "/adminlist",
        },
      },

      {
        path: "/addadmin",
        component: PageFactory.addadminPagePreloading,
        meta: {
          title: "添加管理员",
          icon: "",
          active: "/addadmin",
        },
      },
    ],
  },

  {
    path: "/classify",
    name: "classify",
    component: PageFactory.layoutPagePreloading,
    meta: {
      title: "分类管理",
      icon: "el-icon-menu",
      active: "/classify",
    },
    children: [
      {
        path: "/classifylist",
        name: "classifylist",
        component: PageFactory.classifylistPagePreloading,
        meta: {
          title: "商品分类列表",
          icon: "",
          active: "/classifylist",
        },
      },
      {
        path: "/addclassify",
        name: "addclassify",
        component: PageFactory.addclassifyPagePreloading,
        meta: {
          title: "添加商品分类",
          icon: "",
          active: "/addclassify",
        },
      },
    ],
  },

  {
    path: "/goods",
    component: PageFactory.layoutPagePreloading,
    meta: {
      title: "商品管理",
      icon: "el-icon-s-goods",
      active: "/goods",
    },
    children: [
      {
        path: "/goodslist",
        name: "goodslist",
        component: PageFactory.goodslistPagePreloading,
        meta: {
          title: "商品列表",
          icon: "",
          active: "/goodslist",
        },
      },
      {
        path: "/addgoods",
        name: "addgoods",
        component: PageFactory.addgoodsPagePreloading,
        meta: {
          title: "添加商品",
          icon: "",
          active: "/addgoods",
        },
      },
    ],
  },

  {
    path: "/slideshow",
    component: PageFactory.layoutPagePreloading,
    meta: {
      title: "轮播图管理",
      icon: "el-icon-s-promotion",
      active: "/slideshow",
    },
    children: [
      {
        path: "/slideshowlist",
        name: "slideshowlist",
        component: PageFactory.slideshowlistPagePreloading,
        meta: {
          title: "轮播图列表",
          icon: "",
          active: "/slideshowlist",
        },
      },
      {
        path: "/slideshowgoods",
        name: "slideshowgoods",
        component: PageFactory.slideshowgoodsPagePreloading,
        meta: {
          title: "轮播图商品",
          icon: "",
          active: "/slideshowgoods",
        },
      },
    ],
  },

  {
    path: "/roles",
    component: PageFactory.layoutPagePreloading,
    meta: {
      title: "角色管理",
      icon: "el-icon-user-solid",
      active: "/roles",
    },
    children: [
      {
        path: "/rolelist",
        name: "rolelist",
        component: PageFactory.rolelistPagePreloading,
        meta: {
          title: "角色列表",
          icon: "",
          active: "/rolelist",
        },
      },
      {
        path: "/addrole",
        name: "addrole",
        component: PageFactory.addrolePagePreloading,
        meta: {
          title: "添加角色",
          icon: "",
          active: "/addrole",
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
