import { mixins } from "vue-class-component";
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Watch,
} from "vue-property-decorator";
import { ComBaseComp } from "../../core/ComBaseComp";
import { SET_SIDEBAR } from "../../core/store/mutationTypes";

@Component({
  components: {},
})
export default class NavbarComp extends mixins(ComBaseComp) {
  private isActive: boolean = false;

  // get avatar() {
  //   return UserModule.avatar;
  // }

  private toggleSideBar() {
    // if (this.sidebar.opened) {
    //   setSidebarStatus('opened')
    // } else {
    //   setSidebarStatus('closed')
    // }
    this.$store.commit(SET_SIDEBAR, {
      opened: !this.sidebar.opened,
      withoutAnimation: false,
    });
  }

  private async logout() {
    // await UserModule.LogOut();
    this.$router.push(`/login?redirect=${this.$route.fullPath}`);
  }
}
