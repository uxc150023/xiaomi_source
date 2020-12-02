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
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import { ComBaseComp } from "../../core/ComBaseComp";
import { AccountInfo } from "../../core/domain/AccountInfo";
import { SystemService } from "../../core/services/system.serv";
import { SET_SIDEBAR } from "../../core/store/mutationTypes";

@Component({
  components: {},
})
export default class NavbarComp extends mixins(ComBaseComp) {
  @AutowiredService
  systemService: SystemService;

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
    try {
      await this.systemService.logOut(this.accountInfo.user_id);
      sessionStorage.clear();
      this.$store.state.accountInfo = new AccountInfo();
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    } catch (error) {
      this.messageError(error);
    }
  }
}
