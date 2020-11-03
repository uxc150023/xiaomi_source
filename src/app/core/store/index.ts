import { Message } from "element-ui";
import Vue from "vue";
import Vuex from "vuex";
import { AccountInfo } from "../admain/AccountInfo";
import { Sidebar } from "../admain/Sidebar";
import { LOGIN_INFO } from "../constants";
import {
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

const info = localStorage.getItem(LOGIN_INFO);
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
