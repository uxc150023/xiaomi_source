// SGV-BUILD-PAGE-FAC # NOT DELETE
// 'Slideshowgoods' PAGE FACTORY START
export function slideshowgoodsPagePreloading(): Promise<any> {
  return import("./slideshow/slideshowgoods/slideshowgoods.vue").catch(
    (error) => {
      return dealOccurred(error, "Slideshowgoods");
    },
  );
}
// 'Slideshowgoods' PAGE FACTORY END
// 'Slideshowlist' PAGE FACTORY START
export function slideshowlistPagePreloading(): Promise<any> {
  return import("./slideshow/slideshowlist/slideshowlist.vue").catch(
    (error) => {
      return dealOccurred(error, "Slideshowlist");
    },
  );
}
// 'Slideshowlist' PAGE FACTORY END
// 'Addgoods' PAGE FACTORY START
export function addgoodsPagePreloading(): Promise<any> {
  return import("./goods/addgoods/addgoods.vue").catch((error) => {
    return dealOccurred(error, "Addgoods");
  });
}
// 'Addgoods' PAGE FACTORY END
// 'Goodslist' PAGE FACTORY START
export function goodslistPagePreloading(): Promise<any> {
  return import("./goods/goodslist/goodslist.vue").catch((error) => {
    return dealOccurred(error, "Goodslist");
  });
}
// 'Goodslist' PAGE FACTORY END
// 'Addclassify' PAGE FACTORY START
export function addclassifyPagePreloading(): Promise<any> {
  return import("./classify/addclassify/addclassify.vue").catch((error) => {
    return dealOccurred(error, "Addclassify");
  });
}
// 'Addclassify' PAGE FACTORY END
// 'Classifylist' PAGE FACTORY START
export function classifylistPagePreloading(): Promise<any> {
  return import("./classify/classifylist/classifylist.vue").catch((error) => {
    return dealOccurred(error, "Classifylist");
  });
}
// 'Classifylist' PAGE FACTORY END
// 'Adminlist' PAGE FACTORY START
export function adminlistPagePreloading(): Promise<any> {
  return import("./admin/adminlist/adminlist.vue").catch((error) => {
    return dealOccurred(error, "Adminlist");
  });
}
// 'Adminlist' PAGE FACTORY END
// 'Addadmin' PAGE FACTORY START
export function addadminPagePreloading(): Promise<any> {
  return import("./admin/addadmin/addadmin.vue").catch((error) => {
    return dealOccurred(error, "Addadmin");
  });
}
// 'Addadmin' PAGE FACTORY END
// 'Login' PAGE FACTORY START
export function loginPagePreloading(): Promise<any> {
  return import("./login/login.vue").catch((error) => {
    return dealOccurred(error, "Login");
  });
}
// 'Login' PAGE FACTORY END
// 'Dashboard' PAGE FACTORY START
export function dashboardPagePreloading(): Promise<any> {
  return import("./dashboard/dashboard.vue").catch((error) => {
    return dealOccurred(error, "Dashboard");
  });
}
// 'Dashboard' PAGE FACTORY END
// 'Layout' PAGE FACTORY START
export function layoutPagePreloading(): Promise<any> {
  return import("./layout/layout.vue").catch((error) => {
    return dealOccurred(error, "Layout");
  });
}

// 'Sidebar' PAGE FACTORY END
// 'Home' PAGE FACTORY START
export function homePagePreloading(): Promise<any> {
  return import("./home/home.vue").catch((error) => {
    return dealOccurred(error, "Home");
  });
}
// 'Home' PAGE FACTORY END
// 'Login' PAGE FACTORY START
export function loginoldPagePreloading(): Promise<any> {
  return import("./loginold/loginold.vue").catch((error) => {
    return dealOccurred(error, "Loginold");
  });
}

// 'Login' PAGE FACTORY END
/**
 * 处理错误
 */
function dealOccurred(error: any, pageName = "") {
  location.href = (window as any).__SWNextFullPath;
}
