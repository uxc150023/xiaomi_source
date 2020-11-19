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
import { ComBaseComp } from "../../core/ComBaseComp";
import variables from "../../styles/_variables.scss";

@Component({
  components: {},
})
export default class SidebarComp extends mixins(ComBaseComp) {
  get routes() {
    return (this.$router as any).options.routes;
  }

  get variables() {
    return variables;
  }

  get isCollapse() {
    return !this.sidebar.opened;
  }
  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    console.log("===", (this.$router as any).options.routes);
  }
}
