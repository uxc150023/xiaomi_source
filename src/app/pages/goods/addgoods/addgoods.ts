import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../../lib/sg-resource/decorators";
import BasePage from "../../BasePage";

interface IAddgoodsPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "addgoods",
})
export default class AddgoodsPage extends mixins(BasePage)
  implements IAddgoodsPage {
  title: string = "Addgoods";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
