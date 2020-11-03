import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import { Sidebar } from "../../core/admain/Sidebar";
import { SET_SIDEBAR } from "../../core/store/mutationTypes";
import BasePage from "../BasePage";

interface ILayoutPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}
const WIDTH = 992; // refer to Bootstrap's responsive design

@Component({
  components: {},
  name: "layout",
})
export default class LayoutPage extends mixins(BasePage)
  implements ILayoutPage {
  title: string = "Layout";

  fetchData() {
    //
  }

  @Watch("$route")
  onRouteChange() {
    // if (this.sidebar.opened) {
    //   this.$store.commit(SET_SIDEBAR, {
    //     opened: this.$store.state.opened,
    //     withoutAnimation: false,
    //   });
    // }
  }

  beforeMount() {
    window.addEventListener("resize", this.resizeHandler);
  }

  beforeDestroy() {
    window.removeEventListener("resize", this.resizeHandler);
  }

  isMobile() {
    const rect = document.body.getBoundingClientRect();
    return rect.width - 1 < WIDTH;
  }

  resizeHandler() {
    if (!document.hidden) {
      const isMobile = this.isMobile();
      // AppModule.ToggleDevice(isMobile ? DeviceType.Mobile : DeviceType.Desktop);
      if (isMobile) {
        // AppModule.CloseSideBar(true);
        this.$store.commit(SET_SIDEBAR, {
          opened: false,
          withoutAnimation: true,
        });
      }
    }
  }

  get classObj() {
    return {
      hideSidebar: !this.sidebar.opened,
      openSidebar: this.sidebar.opened,
      withoutAnimation: this.sidebar.withoutAnimation,
      // mobile: this.device === DeviceType.Mobile,
    };
  }

  handleClickOutside() {
    // AppModule.CloseSideBar(false);
    this.$store.commit(SET_SIDEBAR, {
      opened: false,
      withoutAnimation: false,
    });
  }
  /* 生命钩子 START */
  created() {
    console.log(this.sidebar);
  }
  mounted() {
    //
    const isMobile = this.isMobile();
    if (isMobile) {
      // AppModule.ToggleDevice(DeviceType.Mobile);
      // AppModule.CloseSideBar(true);
      this.$store.commit(SET_SIDEBAR, {
        opened: false,
        withoutAnimation: true,
      });
    }
  }
}
