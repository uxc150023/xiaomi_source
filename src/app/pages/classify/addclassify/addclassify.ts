import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../../lib/sg-resource/decorators";
import BasePage from "../../BasePage";

interface IAddclassifyPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "addclassify",
})
export default class AddclassifyPage extends mixins(BasePage)
  implements IAddclassifyPage {
  title: string = "Addclassify";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
