import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import BasePage from "../BasePage";

interface IDashboardPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "dashboard",
})
export default class DashboardPage extends mixins(BasePage) implements IDashboardPage {

  title: string = "Dashboard";

  fetchData() {
    //
  }
  /* 生命钩子 START */
  mounted() {
    //
  }
}
