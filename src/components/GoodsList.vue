<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-06-15 16:55:31
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-15 18:01:24
-->
<template>
    <div v-for="for item in goodList">
        <router-link to="{path: '/goods/details', query: { id: item.product_id}}">
            <img :src="$target + item.product_picture"/>
            <h1>{{item.product_name}}</h1>
            <h2>{{item.title}}</h2>
            <p>
                <span>{{item.product_selling_price}}元</span>
                <span v-show="item.product_price != item.product_selling_price">{{item.product_price}}元</span>
            </p>
        </router-link>
    </div>
</template>
<script>
    export default {
        props: ["goodsList"],
        data() {
            return {

            }
        }
    }
</script>
<style>

</style>