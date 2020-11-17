import { timeStamp } from "console";
import { Input } from "element-ui";
import { ElForm } from "element-ui/types/form";
import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import { Dictionary } from "vue-router/types/router";
import { AutowiredService } from "../../../lib/sg-resource/decorators";
import { SystemService } from "../../core/services/system.serv";
import store from "../../core/store";
import { SET_ACCOUNT_INFO } from "../../core/store/mutationTypes";
import BasePage from "../BasePage";
interface ILoginPage {
  /**
   * 获取页面展示所需的远程数据
   */
  fetchData(): void;
}

@Component({
  components: {},
  name: "login",
})
export default class LoginPage extends mixins(BasePage) implements ILoginPage {
  @AutowiredService
  systemService: SystemService;

  passWordType: string = "passWord";
  loading: boolean = false;
  showDialog: boolean = false;
  redirect: string;
  otherQuery: Dictionary<string> = {};
  codeSvgUrl: string = "";
  loginForm: any = {
    loginCode: "",
    passWord: "",
    userName: "",
  };
  loginRules: any = {
    loginCode: [
      { required: true, message: "请输入登录验证码", trigger: "blur" },
    ],
    passWord: [{ required: true, message: "请输入您的密码", trigger: "blur" }],
    userName: [
      {
        message: "请输入您的用户名/手机/邮箱",
        required: true,
        trigger: "blur",
      },
    ],
  };

  fetchData() {
    //
  }

  @Watch("$route", { immediate: true })
  onRouteChange(route: Route) {
    const query = route.query as Dictionary<string>;
    if (query) {
      this.redirect = query.redirect;
      this.otherQuery = this.getOtherQuery(query);
    }
  }

  mounted() {
    if (this.loginForm.userName === "") {
      (this.$refs.userName as Input).focus();
    } else if (this.loginForm.passWord === "") {
      (this.$refs.passWord as Input).focus();
    }
    // this.getLoginCode();
  }

  private showPwd() {
    if (this.passWordType === "passWord") {
      this.passWordType = "";
    } else {
      this.passWordType = "passWord";
    }
    this.$nextTick(() => {
      (this.$refs.passWord as Input).focus();
    });
  }

  private handleLogin() {
    try {
      (this.$refs.loginForm as ElForm).validate(async (valid: boolean) => {
        if (valid) {
          try {
            // this.loading = true;
            const res = await this.systemService.doLogin(this.loginForm);
            store.commit(SET_ACCOUNT_INFO, res);
            this.$router.push({
              path: this.redirect || "/",
              query: this.otherQuery,
            });
            // this.loading = false;
          } catch (error) {
            this.messageError(error);
          }
        } else {
          return false;
        }
      });
    } catch (error) {
      this.messageError(error);
    }
  }
  private async getLoginCode() {
    try {
      const res = await this.systemService.loginCode();
      this.codeSvgUrl = res;
    } catch (error) {
      this.messageError(error);
    }
  }

  private getOtherQuery(query: Dictionary<string>) {
    return Object.keys(query).reduce(
      (acc, cur) => {
        if (cur !== "redirect") {
          acc[cur] = query[cur];
        }
        return acc;
      },
      {} as Dictionary<string>,
    );
  }
}
