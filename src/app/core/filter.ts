import moment from "moment";
import Vue from "vue";
import { AVATAR } from "./constants";

moment.locale("zh-cn");
// 首字母大写
Vue.filter("capitalize", (value: string) => {
  if (!value) {
    return "";
  }
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

// 时期格式化
Vue.filter("date", (value: Date | number | string, format: string) => {
  if (value !== undefined && value != null && value !== "") {
    moment.locale("zh-cn");
    const m = moment(value);
    if (!m.isValid()) {
      return "";
    }
    return m.format(format);
  } else {
    return "";
  }
});

// 截止日期
Vue.filter("endDate", (value: Date | number | string, format: string) => {
  const m = moment(value);
  if (!m.isValid()) {
    return "";
  }
  if (+m.format("x") === new Date(2099, 11, 31).getTime()) {
    return "至今";
  }
  return m.format(format);
});

// 金额保留两位小数
Vue.filter("keepTwoNum", (value: number) => {
  if (typeof value !== "number") {
    return "0.00";
  }
  return (value * 0.01).toFixed(2).toString();
});

// 格式化后的金额
Vue.filter("formatPrice", (value: number) => {
  if (typeof value !== "number") {
    return "&yen;<i style=\"font-size: 0.18rem;\">0.00</i>";
  }
  const price = (value / 100).toFixed(2);
  const strPrice = price.toString();
  const strRes = strPrice.split(".");
  return `&yen;${strRes[0]}.<i style="font-size: 0.18rem;">${strRes[1]}</i>`;
});
// 取项目NO前部
Vue.filter("noPre", (value: string) => {
  if (!value) {
    return "";
  }
  // 技术人员手动添加
  const op = value.match(/^OP.*$/);
  if (op != null) {
    return "OP";
  }
  const m = value.match(
    /^Q-20[0-9]{2,}-(0[1-9]|1[0-2])-(00[1-9]|0[1-9][0-9]|[1-9][0-9]{2,})/,
  );
  if (m != null) {
    return m[0];
  }
});

// 取项目NO后缀
Vue.filter("noExt", (value: string) => {
  if (!value) {
    return "";
  }
  // 技术人员手动添加
  const op = value.match(/^OP(-(.*))*$/);
  if (op != null) {
    return op[2];
  }
  const m = value.match(
    /^Q-20\d{2,}-(0[1-9]|1[0-2])-(00[1-9]|0[1-9]\d|[1-9]\d{2,})(-(.*))*$/,
  );
  if (m != null) {
    return m[4] ? m[4] : "";
  }
});
// 数组转字符串
Vue.filter("join", (value: any[], separator: string) => {
  if (value instanceof Array) {
    return value.join(separator || "，");
  }
  return value;
});

Vue.filter("avatar", (value: string, sex: number) => {
  if (!value) {
    const avatar: any = AVATAR;
    return avatar[["boy", "girl"][[0, 1].indexOf(sex) !== -1 ? sex : 0]];
  } else {
    return value;
  }
});

// 页面字段为""或者为null处理
Vue.filter("default", (value: string) => {
  if (!value) {
    return "--";
  } else {
    return value;
  }
});

Vue.filter("area", (province: string, city: string) => {
  const area = [];
  if (province) {
    area.push(province);
  }
  if (city && province !== city) {
    area.push(city);
  }
  return area.join("/");
});

Vue.filter(
  "lineup",
  (name: string, team: string[], separator: string = "，") => {
    if (name) {
      const line = [name];
      for (const el of team) {
        if (el) {
          line.push(el);
        }
      }
      return line.join(separator);
    }
    return "";
  },
);
