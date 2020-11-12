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

  passwordType: string = "password";
  loading: boolean = false;
  showDialog: boolean = false;
  redirect: string;
  otherQuery: Dictionary<string> = {};
  codeSvgUrl: string = "";
  loginForm: any = {
    loginCode: "",
    password: "",
    username: "",
  };
  loginRules: any = {
    loginCode: [
      { required: true, message: "请输入登录验证码", trigger: "blur" },
    ],
    password: [{ required: true, message: "请输入您的密码", trigger: "blur" }],
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
    if (this.loginForm.username === "") {
      (this.$refs.username as Input).focus();
    } else if (this.loginForm.password === "") {
      (this.$refs.password as Input).focus();
    }
    // this.getLoginCode();
  }

  private showPwd() {
    if (this.passwordType === "password") {
      this.passwordType = "";
    } else {
      this.passwordType = "password";
    }
    this.$nextTick(() => {
      (this.$refs.password as Input).focus();
    });
  }

  private handleLogin() {
    (this.$refs.loginForm as ElForm).validate(async (valid: boolean) => {
      if (valid) {
        // this.loading = true;
        console.log(this.loginForm);
        const res = await this.systemService.doLogin(this.loginForm);
        // const res = await this
        // await UserModule.Login(this.loginForm);
        // this.$router.push({
        //   path: this.redirect || "/",
        //   query: this.otherQuery,
        // });
        // setTimeout(() => {
        //   this.loading = false;
        // }, 0.5 * 1000);
      } else {
        return false;
      }
    });
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
