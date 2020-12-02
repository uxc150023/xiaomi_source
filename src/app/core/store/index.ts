import { Message } from "element-ui";
import Vue from "vue";
import Vuex from "vuex";
import { LOGIN_INFO } from "../constants";
import { AccountInfo } from "../domain/AccountInfo";
import { Sidebar } from "../domain/Sidebar";
import {
  HEADER_TOKEN,
  SET_ACCOUNT_INFO,
  SET_PROJECT_NAME,
  SET_SIDEBAR,
} from "./mutationTypes";

Vue.use(Vuex);

export interface IState {
  [key: string]: any;
  accountInfo: AccountInfo;
  sidebar: Sidebar;
  projectName: string;
}

const stateX: IState = {
  accountInfo: new AccountInfo(),
  projectName: "",
  sidebar: new Sidebar(),
};

const info = sessionStorage.getItem(LOGIN_INFO);
if (info) {
  try {
    const accountInfo = JSON.parse(info);
    stateX.accountInfo = accountInfo;
  } catch (error) {
    Message.error(error);
  }
}

export default new Vuex.Store<any>({
  mutations: {
    [SET_ACCOUNT_INFO](store, val) {
      store.accountInfo = val;
      sessionStorage.setItem(LOGIN_INFO, JSON.stringify(val));
      sessionStorage.setItem(HEADER_TOKEN, val.accessToken);
    },
    [SET_PROJECT_NAME](store, val) {
      store.projectName = val;
    },
    [SET_SIDEBAR](store, val) {
      store.sidebar = val;
    },
  },
  state: stateX,
});
