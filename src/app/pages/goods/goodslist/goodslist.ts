import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../../lib/sg-resource/decorators";
import BasePage from "../../BasePage";

interface IGoodslistPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "goodslist",
})
export default class GoodslistPage extends mixins(BasePage)
  implements IGoodslistPage {
  title: string = "Goodslist";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
