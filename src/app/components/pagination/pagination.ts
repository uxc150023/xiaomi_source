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
import { scrollTo } from "../../utils/scroll-to";

@Component({
  components: {},
})
export default class PaginationComp extends Vue {
  @Prop({ required: true }) private total!: number;
  @Prop({ default: 1 }) private page!: number;
  @Prop({ default: 20 }) private limit!: number;
  @Prop({ default: () => [10, 20, 30, 50] }) private pageSizes!: number[];
  @Prop({ default: "total, sizes, prev, pager, next, jumper" })
  private layout!: string;
  @Prop({ default: true }) private background!: boolean;
  @Prop({ default: true }) private autoScroll!: boolean;
  @Prop({ default: false }) private hidden!: boolean;

  get currentPage() {
    return this.page;
  }

  set currentPage(value) {
    this.$emit("update:page", value);
  }

  get pageSize() {
    return this.limit;
  }

  set pageSize(value) {
    this.$emit("update:limit", value);
  }

  handleSizeChange(value: number) {
    this.$emit("pagination", { page: this.currentPage, limit: value });
    if (this.autoScroll) {
      scrollTo(0, 800);
    }
  }

  handleCurrentChange(value: number) {
    this.$emit("pagination", { page: value, limit: this.pageSize });
    if (this.autoScroll) {
      scrollTo(0, 800);
    }
  }
  /* 生命钩子 START */
  mounted() {}
}
