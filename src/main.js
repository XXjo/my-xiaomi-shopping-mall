/*
 * @Description: 项目入口文件，初始化vue实例，并导入各种公共组件
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-01-20 09:43:21
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-24 16:42:30
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/icons/iconfont.css";

Vue.config.productionTip = false;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import axios from "axios";
Vue.prototype.$axios = axios;

import util from "./util";
Vue.use(util);

let vue = new Vue({
  router,
  store,
  //render函数是vue通过js渲染dom结构的函数createElement，约定可以简写为h
  render: h => h(App)
}).$mount("#app");