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
import { isExternal } from "../../utils/validate";

@Component({
  components: {},
})
export default class SidebaritemlinkComp extends Vue {
  @Prop({ required: true }) private to!: string;
  private isExternal = isExternal;
  /* 生命钩子 START */
  mounted() {}
}
