import pathToRegexp from "path-to-regexp";
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Watch,
} from "vue-property-decorator";
import { Route, RouteRecord } from "vue-router";

@Component({
  components: {},
})
export default class BreadcrumbComp extends Vue {
  breadcrumbs: RouteRecord[] = [];

  @Watch("$route")
  onRouteChange(route: Route) {
    if (route.path.startsWith("/redirect/")) {
      return;
    }
    this.getBreadcrumb();
  }

  getBreadcrumb() {
    let matched = this.$route.matched.filter(
      (item) => item.meta && item.meta.title,
    );
    const first = matched[0];
    if (!this.isDashboard(first)) {
      matched = [
        { path: "/dashboard", meta: { title: "首页" } } as RouteRecord,
        ...matched,
      ];
    }
    this.breadcrumbs = matched.filter((item) => {
      return item.meta && item.meta.title && item.meta.breadcrumb !== false;
    });
  }

  isDashboard(route: RouteRecord) {
    const name = route && route.meta && route.meta.title;
    return name === "Dashboard";
  }

  pathCompile(path: string) {
    const { params } = this.$route;
    const toPath = pathToRegexp.compile(path);
    return toPath(params);
  }

  handleLink(item: any) {
    const { redirect, path } = item;
    if (redirect) {
      this.$router.push(redirect);
      return;
    }
    this.$router.push(this.pathCompile(path));
  }

  /* 生命钩子 START */
  created() {
    this.getBreadcrumb();
  }
}
