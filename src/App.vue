<!--
 * @Description: App.vue是项目的主组件，所有页面都是在app.vue的基础上进行切换的
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-01-20 09:43:21
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-01-21 18:13:08
-->
<template>
  <div id="app">
    <el-container>
      <!-- 顶部导航栏Start -->
      <el-header height="40px" id="topbar">
        <div class="topbar-nav">
          <el-button type="text">小米商城</el-button>
          <span>|</span>
          <el-button type="text">MIUI</el-button>
          <span>|</span>
          <el-button type="text">IoT</el-button>
          <span>|</span>
          <el-button type="text">云服务</el-button>
          <span>|</span>
          <el-button type="text">天星数科</el-button>
          <span>|</span>
          <el-button type="text">有品</el-button>
          <span>|</span>
          <el-button type="text">小爱开放平台</el-button>
          <span>|</span>
          <el-button type="text">企业团购</el-button>
          <span>|</span>
          <el-button type="text">资质证照</el-button>
          <span>|</span>
          <el-button type="text">协议规则</el-button>
          <span>|</span>
          <el-button type="text">下载app</el-button>
          <span>|</span>
          <el-button type="text">智能生活</el-button>
          <span>|</span>
          <el-button type="text">Select Location</el-button>
        </div>
        <div :class="num == 0 ? 'topbar-mini-car-menu' : 'topbar-mini-car-menu-full'">
          <i class="el-icon-shopping-cart-full">  购物车 ({{ num }}) </i>
        </div>

        <div class="topbar-user-info">
          <el-button type="text">登录</el-button>
          <span>|</span>
          <el-button type="text">注册</el-button>
          <span>|</span>
          <el-button type="text">消息通知</el-button>
        </div>


      </el-header>
      <!-- 顶部导航栏End -->

      <!-- 顶部容器Start -->
      <el-header height="100px" id="head">
        <div class="head-logo">
          <router-link to="/">
            <img src="./assets/mi-logo.png" />
          </router-link>
        </div>
        <div class="head-nav">
          <el-button type="text">全部商品分类</el-button>
          <el-button type="text">手机</el-button>
          <el-button type="text">电视机</el-button>
          <el-button type="text">空调</el-button>
          <el-button type="text">洗衣机</el-button>
        </div>
        <div class="head-search">
          <el-input v-model="search" placeholder="请输入搜索内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-header>
      <!-- 顶部容器End -->

      <!-- 主要区域容器Start -->
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- 主要区域容器End -->
      
      <!-- 底栏容器Start -->
      <el-foot>
        <div id="footer-service">

        </div>
        <div id="footer-links">

        </div>
      </el-foot>
      <!-- 底栏容器End -->
    </el-container>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num: 0,
        search: ""
      }
    }
  };
</script>


<style>
* {
  margin: 0;
}

/* 顶部导航栏 */
#topbar {
  background-color: #3d3d3d;
}
#topbar .el-button--text {
  color: #b0b0b0;
  font-size: 12px;
}
#topbar .el-button--text :hover {
  color: #ffffff;
}
#topbar span {
  font-size: 12px;
  color: #b0b0b0;
  margin: 0 5px;
}
#topbar .topbar-nav {
  width: 1000px;
  float: left;
}
#topbar .topbar-mini-car-menu {
  height: 40px;
  width: 150px;
  float: right;
  display: flex;
  justify-content: center; /*内容水平居中*/
  align-items: center; /*内容垂直居中*/
  background-color: #424242;
}
#topbar .topbar-mini-car-menu:hover {
  background-color: #fff;
}
#topbar .topbar-mini-car-menu-full {
  height: 40px;
  width: 150px;
  float: right;
  display: flex;
  justify-content: center; /*内容水平居中*/
  align-items: center; /*内容垂直居中*/
  background-color: #ff6700;
}
#topbar .topbar-mini-car-menu-full:hover {
  background-color: #fff;
}
#topbar .topbar-mini-car-menu i {
  color: #b0b0b0;
  font-size: 12px;
}
/* 如果是#topbar .topbar-mini-car-menu i:hover 就会出现鼠标滑动在div和i之间时，i的字体颜色未发生改变*/
#topbar .topbar-mini-car-menu:hover i {
  color: #ff6700;
}
#topbar .topbar-mini-car-menu-full i {
  color: #fff;
  font-size: 12px;
}
#topbar .topbar-mini-car-menu-full:hover i {
  color: #ff6700;
}
#topbar .topbar-user-info {
  float: right;
  margin-right: 50px;
}
/* 顶部导航栏 */

/* 顶部容器 */
#head {
  width: 1260px;
  margin: 0 auto;
  background-color: cadetblue;
  display: flex;
  align-items: center; /*内容垂直居中*/
}
#head .head-logo {
  height: 50px;
  width: 50px;
  vertical-align: middle;
  display: table-cell;
  text-align: center;
  background-color: #ff6700;
}
#head .head-logo img {
  height: 80%;
  width: 80%;
}
#head .head-nav {
  margin-left: 150px;
}
#head .el-button--text {
  color: #333;
  font-size: 16px;
}
#head .head-search {
  margin-left: 300px;
  width: 400px;
}
/* 顶部容器 */
/* 底部容器 */
/* 底部容器 */

</style>
