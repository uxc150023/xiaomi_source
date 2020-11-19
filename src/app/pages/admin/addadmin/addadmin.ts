import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../../lib/sg-resource/decorators";
import BasePage from "../../BasePage";

interface IAddadminPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "addadmin",
})
export default class AddadminPage extends mixins(BasePage)
  implements IAddadminPage {
  title: string = "Addadmin";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
