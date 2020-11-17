import { Message } from "element-ui";
import NProgress from "nprogress";
import { Route } from "vue-router";
import store from "../app/core/store/index";
import router from "./index.router";
// import { UserModule } from "@/store/modules/user";

NProgress.configure({ showSpinner: false });

const whiteList = ["/login"];

router.beforeEach(async (to: Route, _: Route, next: any) => {
  NProgress.start();
  if (store.state.accountInfo.accessToken) {
    if (to.path === "/login") {
      next({ path: "/" });
      NProgress.done();
    } else {
      // if (UserModule.roles.length === 0) {
      //   try {
      //     await UserModule.GetUserInfo();
      //     next({ ...to, replace: true });
      //   } catch (err) {
      //     UserModule.ResetToken();
      //     Message.error(err || "Has Error");
      //     next(`/login?redirect=${to.path}`);
      //     NProgress.done();
      //   }
      // } else {
      //   next();
      // }
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach((to: Route) => {
  NProgress.done();
  document.title = to.meta.title;
});
