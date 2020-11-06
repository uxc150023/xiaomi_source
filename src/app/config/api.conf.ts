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
    doLogin: "apiHost:/admin/login/doLogin",
  },
  get: {
    // SGV-BUILD-API-GET # NOT DELETE
    // ----------------------------------登录-----------------------------
    // 获取code
    loginCode: "apiHost:/admin/login/code",
  },
  put: {
    // SGV-BUILD-API-PUT # NOT DELETE
  },
  delete: {
    // SGV-BUILD-API-DELETE # NOT DELETE
  },
};
