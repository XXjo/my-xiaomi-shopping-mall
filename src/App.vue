<!--
 * @Description: App.vue是项目的主组件，所有页面都是在app.vue的基础上进行切换的
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-01-20 09:43:21
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-01-20 17:04:19
-->
<template>
  <div id="app">
    <el-container>
      <!-- 顶部导航栏Start -->
      <el-header height=40px id="topbar">
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
        <div class="topbar-mini-car-menu">
          <i class="el-icon-shopping-cart-full">  购物车 （{{num}}） </i>
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
      <!-- 顶部容器End -->

      <!-- 主要区域容器Start -->
      <!-- 主要区域容器End -->
      
      <!-- 底栏容器Start -->
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
        num: 0
      }
    }
  }
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
#topbar .topbar-mini-car-menu i {
  color: #b0b0b0;
  font-size: 12px;
}
#topbar .topbar-user-info{
  float: right;
  margin-right: 50px;
}
/* 顶部导航栏 */

</style>
