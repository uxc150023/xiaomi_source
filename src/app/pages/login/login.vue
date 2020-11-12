<template>
  <div class="page-module123">
    <div class="login-container">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        autocomplete="on"
        label-position="left"
      >
        <div class="title-container">
          <h3 class="title">
            xxxxx
          </h3>
        </div>

        <el-form-item prop="username">
          <span class="svg-container">
            <i class="el-icon-s-custom" style="font-size: 20px;"></i>
          </span>
          <el-input
            ref="username"
            v-model="loginForm.username"
            name="username"
            type="text"
            autocomplete="on"
            placeholder="username"
          />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container">
            <i class="el-icon-lock" style="font-size: 20px"></i>
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="password"
            name="password"
            autocomplete="on"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <i class="el-icon-view"></i>
          </span>
        </el-form-item>

        <el-form-item prop="loginCode">
          <div class="login-code">
            <div class="login-code-input">
              <span class="svg-container">
                <i class="el-icon-message-solid" style="font-size: 20px"></i>
              </span>
              <el-input
                ref="loginCode"
                v-model="loginForm.loginCode"
                name="loginCode"
                type="text"
                autocomplete="on"
                placeholder="请输入登录验证码"
              />
            </div>
            <img
              src="http://127.0.0.1:3000/admin/login/code"
              title="看不清？点击刷新"
              type="image/svg+xml"
              onclick="javascript:this.src='http://127.0.0.1:3000/admin/login/code?t='+Math.random()"
            />
          </div>
        </el-form-item>

        <el-button
          :loading="loading"
          type="primary"
          style="width:100%; margin-bottom:30px;"
          @click.native.prevent="handleLogin"
        >
          Sign in
        </el-button>

        <div style="position:relative">
          <div class="tips">
            <span> username: admin </span>
            <span> password: any </span>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" src="./login.ts"></script>
<style lang="scss" scoped>
@import "../../styles/_variables.scss";
.page-module123 {
  height: calc(100vh);
  /deep/ {
    .login-container {
      .el-input {
        display: inline-block;
        height: 47px;
        width: 85%;

        input {
          height: 52px;
          background: transparent;
          border: 0px;
          border-radius: 0px;
          padding: 12px 5px 12px 15px;
          color: $lightGray;
          caret-color: $loginCursorColor;
          -webkit-appearance: none;

          &:-webkit-autofill {
            box-shadow: 0 0 0px 1000px $loginBg inset !important;
            -webkit-text-fill-color: #fff !important;
          }
        }
      }

      .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
      }
    }

    .login-container {
      height: 100%;
      width: 100%;
      overflow: hidden;
      background-color: $loginBg;

      .login-form {
        position: relative;
        width: 520px;
        max-width: 100%;
        padding: 160px 35px 0;
        margin: 0 auto;
        overflow: hidden;
      }

      .tips {
        font-size: 14px;
        color: #fff;
        margin-bottom: 10px;

        span {
          &:first-of-type {
            margin-right: 16px;
          }
        }
      }

      .svg-container {
        padding: 6px 5px 6px 15px;
        color: $darkGray;
        vertical-align: middle;
        width: 30px;
        display: inline-block;
      }

      .title-container {
        position: relative;

        .title {
          font-size: 26px;
          color: $lightGray;
          margin: 0px auto 40px auto;
          text-align: center;
          font-weight: bold;
        }
      }

      .show-pwd {
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 16px;
        color: $darkGray;
        cursor: pointer;
        user-select: none;
      }
    }
  }

  .login-code {
    display: flex;
    .login-code-input {
      display: flex;
      width: 350px;
    }
  }
}
@supports (-webkit-mask: none) and (not (cater-color: $loginCursorColor)) {
  .login-container .el-input {
    input {
      color: $loginCursorColor;
    }
    input::first-line {
      color: $lightGray;
    }
  }
}
</style>
