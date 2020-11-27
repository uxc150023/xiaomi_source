import { IApiConfig } from "../../lib/sg-resource";

// tslint:disable:object-literal-sort-keys
export const apiConfig: IApiConfig = {
  hosts: {
    apiHost: { dir: "" },
  },
  post: {
    // SGV-BUILD-API-POST # NOT DELETE
    // 用户登录
    login: "apiHost:/pmUser/login",
    // 用户登录
    doLogin: "apiHost:/admin/login/doLogin",
    // 退出登录
    logOut: "apiHost:/admin/login/logOut",
  },
  get: {
    // SGV-BUILD-API-GET # NOT DELETE
    // ----------------------------------登录-----------------------------
    // 获取code
    loginCode: "apiHost:/admin/login/code",
    // 获取角色
    getRoles: "apiHost:/admin/role",
  },
  put: {
    // SGV-BUILD-API-PUT # NOT DELETE
  },
  delete: {
    // SGV-BUILD-API-DELETE # NOT DELETE
  },
};
