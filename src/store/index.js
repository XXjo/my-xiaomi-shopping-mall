/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-01-20 09:43:21
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-23 17:54:29
 */
import Vue from "vue";
import Vuex from "vuex";

import User from '@/store/modules/User';
import ShoppingCar from '@/store/modules/ShoppingCar';

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {},
  modules: {
    User,
    ShoppingCar
  }
});
