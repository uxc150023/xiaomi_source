// SGV-BUILD-PAGE-FAC # NOT DELETE
// 'Login' PAGE FACTORY START
export function loginPagePreloading(): Promise<any> {
  return import("./login/login.vue").catch(error => {
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
