import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../../lib/sg-resource/decorators";
import BasePage from "../../BasePage";

interface ISlideshowlistPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "slideshowlist",
})
export default class SlideshowlistPage extends mixins(BasePage)
  implements ISlideshowlistPage {
  title: string = "Slideshowlist";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
