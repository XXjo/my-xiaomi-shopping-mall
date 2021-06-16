/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-06-08 13:46:01
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-16 13:41:11
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/ac",
        name: "AC",
        component: () => import("../views/AC.vue")
    },
    {
        path: "/phone",
        name: "Phone",
        component: () => import("../views/Phone.vue")
    },
    {
        path: "/television",
        name: "Television",
        component: () => import("../views/Television.vue")
    },
    {
        path: "/washer",
        name: "Washer",
        component: () => import("../views/Washer.vue")
    },
    {
        path: "/goods/details",
        name: "Detail",
        component: () => import("../views/GoodsDetail.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
