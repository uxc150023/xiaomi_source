import path from "path";
import { mixins } from "vue-class-component";
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
import { Route, RouteConfig } from "vue-router";
import { ComBaseComp } from "../../core/ComBaseComp";
import { isExternal } from "../../utils/validate";

@Component({
  components: {},
})
export default class SidebaritemComp extends mixins(ComBaseComp) {
  @Prop({ required: true }) private item!: RouteConfig;
  @Prop({ default: false }) private isCollapse!: boolean;
  @Prop({ default: true }) private isFirstLevel!: boolean;
  @Prop({ default: "" }) private basePath!: string;

  get showingChildNumber() {
    if (this.item.children) {
      const showingChildren = this.item.children.filter((item) => {
        if (item.meta && item.meta.hidden) {
          return false;
        } else {
          return true;
        }
      });
      return showingChildren.length;
    }
    return 0;
  }

  get theOnlyOneChild() {
    if (this.showingChildNumber > 1) {
      return null;
    }
    if (this.item.children) {
      for (const child of this.item.children) {
        if (!child.meta || !child.meta.hidden) {
          return child;
        }
      }
    }
    return { ...this.item, path: "" };
  }

  private resolvePath(routePath: string) {
    if (isExternal(routePath)) {
      return routePath;
    }
    if (isExternal(this.basePath)) {
      return this.basePath;
    }
    return path.resolve(this.basePath, routePath);
  }

  /* 生命钩子 START */
  mounted() {}
}
