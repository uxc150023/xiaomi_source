import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../../lib/sg-resource/decorators";
import BasePage from "../../BasePage";

interface IAdminlistPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "adminlist",
})
export default class AdminlistPage extends mixins(BasePage)
  implements IAdminlistPage {
  title: string = "Adminlist";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
