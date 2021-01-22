/*
 * @Description: 项目入口文件，初始化vue实例，并导入各种公共组件
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-01-20 09:43:21
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-01-22 15:28:58
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css"
import "./assets/icons/iconfont.css"

Vue.config.productionTip = false;

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
