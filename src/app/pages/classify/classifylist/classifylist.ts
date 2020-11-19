import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../../lib/sg-resource/decorators";
import BasePage from "../../BasePage";

interface IClassifylistPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "classifylist",
})
export default class ClassifylistPage extends mixins(BasePage)
  implements IClassifylistPage {
  title: string = "Classifylist";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
