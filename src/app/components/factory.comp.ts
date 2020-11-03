// tslint:disable:no-var-requires
import Vue from "vue";

// SGV-BUILD-COMP-FAC # NOT DELETE
Vue.component("sidebar", require("./sidebar/sidebar.vue").default);
Vue.component("breadcrumb", require("./breadcrumb/breadcrumb.vue").default);
Vue.component("navbar", require("./navbar/navbar.vue").default);
Vue.component(
  "sidebaritemlink",
  require("./sidebaritemlink/sidebaritemlink.vue").default,
);
Vue.component("sidebaritem", require("./sidebaritem/sidebaritem.vue").default);
Vue.component("headbar", require("./headbar/headbar.vue").default);
Vue.component(
  "AccountSettings",
  require("./account-settings/account-settings.vue").default,
);
