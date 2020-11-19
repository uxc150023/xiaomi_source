import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../../lib/sg-resource/decorators";
import BasePage from "../../BasePage";

interface ISlideshowgoodsPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "slideshowgoods",
})
export default class SlideshowgoodsPage extends mixins(BasePage)
  implements ISlideshowgoodsPage {
  title: string = "Slideshowgoods";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
