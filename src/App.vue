<!--
 * @Description: App.vue是项目的主组件，所有页面都是在app.vue的基础上进行切换的
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-01-20 09:43:21
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-24 17:38:51
-->
<template>
    <div id="app">
        <el-container>
            <!-- 顶部导航栏-->
            <!-- #region -->
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

                <!-- 未登录 -->
                <div v-if="!user" class="topbar-user-not-login">
                    <el-button type="text" @click="login">登录</el-button>
                    <span>|</span>
                    <el-button type="text" @click="register">注册</el-button>
                    <span>|</span>
                    <el-button type="text">消息通知</el-button>
                </div>

                <!-- 登录 -->
                <div v-else class="topbar-user-login">
                    <el-dropdown @command="aboutUserCommand">
                        <span class="el-dropdown-link">
                        {{user.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="myFavour">我的喜欢</el-dropdown-item>
                            <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>|</span>
                    <el-button type="text">消息通知</el-button>
                    <span>|</span>
                    <el-button type="text">我的订单</el-button>
                </div>
            </el-header>
            <!-- #endregion -->

            <!-- 顶部容器 -->
            <!-- #region -->
            <el-header height="100px" id="header">
                <div class="head-logo">
                    <router-link to="/">
                        <img src="./assets/mi-logo.png" />
                    </router-link>
                </div>
                <el-menu :default-active="activeIndex" 
                    mode="horizontal"
                    text-color="#333" 
                    active-text-color="#ff6700" 
                    router>
                    <el-menu-item index="/">全部商品分类</el-menu-item>
                    <el-menu-item index="/phone">手机</el-menu-item>
                    <el-menu-item index="/television">电视机</el-menu-item>
                    <el-menu-item index="/ac">空调</el-menu-item>
                    <el-menu-item index="/washer">洗衣机</el-menu-item>
                </el-menu>
                <div class="head-search">
                    <el-input v-model="search" placeholder="请输入搜索内容">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
            </el-header>
            <!-- #endregion -->
            
            <!-- 登录组件 -->
            <Login></Login>
            
            <!-- 注册组件 -->
            <!-- 监听自定义事件fromRegister -->
            <Register :show="isShow" @fromRegister="getRegisterValue"></Register>
            <!-- 主要区域容器 -->
            <el-main>
                <router-view></router-view>
            </el-main>
            
            <!-- 底栏容器 -->
            <!-- #region -->
            <el-footer id="footer">
                <div class="footer-service">
                    <el-button type="text" class="icon-tool">预约维修服务</el-button>
                    <span>|</span>
                    <el-button type="text" class="icon-seven-days">7天无理由退货</el-button>
                    <span>|</span>
                    <el-button type="text" class="icon-fifteen-days">15天免费换货</el-button>
                    <span>|</span>
                    <el-button type="text" class="icon-present">满99元包邮</el-button>
                    <span>|</span>
                    <el-button type="text" class="icon-position">520余家售后网点</el-button>
                </div>
                <div class="footer-links">
                    <div class="footer-links-item">
                        <p class="item-title">帮助中心</p>
                        <a href="javascript:;">账户管理</a>
                        <a href="javascript:;">购物指南</a>
                        <a href="javascript:;">订单操作</a>
                    </div>
                    <div class="footer-links-item">
                        <p class="item-title">服务支持</p>
                        <a href="javascript:;">售后政策</a>
                        <a href="javascript:;">自助服务</a>
                        <a href="javascript:;">相关下载</a>
                    </div>
                    <div class="footer-links-item">
                        <p class="item-title">线下门店</p>
                        <a href="javascript:;">小米之家</a>
                        <a href="javascript:;">服务网点</a>
                        <a href="javascript:;">授权体验店</a>
                    </div>
                    <div class="footer-links-item">
                        <p class="item-title">关于小米</p>
                        <a href="javascript:;">了解小米</a>
                        <a href="javascript:;">加入小米</a>
                        <a href="javascript:;">投资者关系</a>
                        <a href="javascript:;">企业社会责任</a>
                        <a href="javascript:;">廉洁举报</a>
                    </div>
                    <div class="footer-links-item">
                        <p class="item-title">关注我们</p>
                        <a href="javascript:;">新浪微博</a>
                        <a href="javascript:;">官方微信</a>
                        <a href="javascript:;">联系我们</a>
                        <a href="javascript:;">公益基金会</a>
                        <a href="javascript:;">廉洁举报</a>
                    </div>
                    <div class="footer-links-item">
                        <p class="item-title">关注我们</p>
                        <a href="javascript:;">了解小米</a>
                        <a href="javascript:;">加入小米</a>
                        <a href="javascript:;">投资者关系</a>
                        <a href="javascript:;">企业社会责任</a>
                    </div>
                    <div class="footer-links-item">
                        <p class="item-title">特色服务</p>
                        <a href="javascript:;">F码通道</a>
                        <a href="javascript:;">礼物码</a>
                        <a href="javascript:;">防伪查询</a>
                    </div>
                    <div class="footer-links-item">
                        <div>
                            <p style="color: #ff6700; font-size: 20px;">400-100-5678</p>
                            <p style="color: #757575;">8:00-18:00（仅收市话费）</p>
                        </div>
                    </div>
                </div>
            </el-footer>
            <!-- #endregion -->
        </el-container>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'; 
import Login from '@/components/Login';
import Register from '@/components/Register';

export default {
    components:{
        Login,
        Register
    },

    data() {
        return {
            search: "",
            isShow: false,
            activeIndex: "/"
        };
    },

    created() {
        //使用localStorage，防止刷新使得vuex的状态恢复成初始值
        if(localStorage.getItem("user")) {
            this.setUser(JSON.parse(localStorage.getItem("user")));
        }
    },

    updated() {
        this.activeIndex = this.$route.fullPath;
    },

    computed: {
        ...mapGetters({
            user: "getUser",
            num: "getShoppingCarNum"
        })  
    },

    watch: {
        user(newValue) {
            if(newValue === "") {
                this.setShoppingCar([]);
            }
            else {
                this.$axios
                    .post("/api/user/shoppingCart/getShoppingCart", {
                        user_id: newValue.user_id
                    })
                    .then(res => {
                        if(res.data.code === "001") {
                            this.setShoppingCar(res.data.shoppingCartData);
                        }
                        else{
                            this.notifyError(res.data.msg);
                        }
                    })
                    .catch(error => {
                        
                    })
            }
        }
    },

    methods: {
        ...mapActions(["setUser", "setShowLoginFlag", "setShoppingCar"]),

        login() {
            this.setShowLoginFlag(true);
        },

        aboutUserCommand(command) {
            if(command === "myFavour") {
                return true;
            }

            if(command === "loginOut") {
                // 设置vuex中user的状态
                this.setUser("");
                // 删除localStorage中username的键值对
                localStorage.removeItem("user");
                this.notifySuccess("退出登录成功");
            }
        },

        register() {
            this.isShow = true;
        },

        //value来自于子组件register传过来的值
        getRegisterValue(value) {
            this.isShow = value
        }
        
    },


};
</script>

<style>
    body {
        margin: 0;
    }
</style>

<style scoped>
    * {
        margin: 0;
    }
    .el-main {
        padding: 0;
    }

    .el-footer {
        padding: 0;
    }
    
    /* 顶部导航栏 */
    /* #region */
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
    #topbar .topbar-user-not-login {
        float: right;
        margin-right: 50px;
    }
    #topbar .topbar-user-login {
        height: 40px;
        width: 300px;
        float: right;
        display: flex;
        justify-content: center; /*内容水平居中*/
        align-items: center; /*内容垂直居中*/
        margin-right: 50px; 
    }

    /* #topbar .topbar-user-login div {
        height: 40px;
        width: 90px;
        color: #b0b0b0;
        font-size: 12px;
        display: flex;
        justify-content: center; /*内容水平居中*/
        /*align-items: center; /*内容垂直居中*/
    /*} */
    
    .el-dropdown-menu__item:not(.is-disabled):hover {
        background-color: #e0e0e0 !important; /*!important用于提高优先级*/
        color: #ff6700 !important;
    }
    /* #endregion */

    /* 顶部容器 */
    /* #region */
    #header {
        width: 1260px;
        margin: 0 auto;
        /* background-color: cadetblue; */
        display: flex;
        align-items: center; /*内容垂直居中*/
    }
    #header .head-logo {
        height: 50px;
        width: 50px;
        position: relative;
        background-color: #ff6700;
    }

    #header .head-logo img {
        height: 80%;
        width: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
    }
    
    .el-menu {
        margin-left: 150px;
    }
    .el-menu.el-menu--horizontal {
        border: none;
        
    }
    #header .head-search {
        margin-left: 150px;
        width: 400px;
    }
    /* #endregion */
    

    /* 底部容器 */
    /* #region */
    #footer .footer-service {
        width: 1260px;
        display: flex;
        align-items: center;
        margin: 0 auto;
    }
    #footer .footer-service .el-button--text,
    #footer .footer-service span {
        margin: 0 auto;
        color: #616161;
    }
    #footer .footer-links {
        display: flex;
        margin: 20px auto;
        border-top: solid 1px #e0e0e0;
    }
    #footer .footer-links .footer-links-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding-top: 40px;
    }
    #footer .footer-links .footer-links-item .item-title {
        margin-bottom: 40px;
    }
    #footer .footer-links a {
        margin-bottom: 10px;
    }
    #footer .footer-links a:link {
        text-decoration: none;
        color: #757575;
    }
    #footer .footer-links .footer-links-item div {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
    /* #endregion */
</style>
