import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../../lib/sg-resource/decorators";
import BasePage from "../../BasePage";

interface IAddrolePage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "addrole",
})
export default class AddrolePage extends mixins(BasePage)
  implements IAddrolePage {
  title: string = "Addrole";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
