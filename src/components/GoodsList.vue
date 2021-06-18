<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-06-15 16:55:31
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-18 13:54:42
-->
<template>
    <div>
        <div v-for="item in goodsList" class="goodsList">
            <router-link :to="{path: '/goods/details', query: {id: item.product_id}}">
                <img :src="$target + item.product_picture"/>
                <h2>{{item.product_name}}</h2>
                <h3>{{item.product_title}}</h3>
                <p>
                    <span>{{item.product_selling_price}}元</span>
                    <span v-show="item.product_price != item.product_selling_price" class="delete">{{item.product_price}}元</span>
                </p>
            </router-link>
        </div>

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
<style scoped>
    .goodsList {
        float: left;
        width: 234px;
        height: 280px;
        padding: 10px 0;
        margin: 0 0 14.5px 13.7px;
        background-color: white;
        transition: all 0.2s linear;
    }

    .goodsList:hover {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        transform: translate3d(0, -2px, 0);
    }

    a{ 
        text-decoration: none;
    }
    
    .goodsList img {
        display: block;
        width: 160px;
        height: 160px;
        margin: 0 auto;
    }

    .goodsList h2 {
        font-size: 14px;
        font-weight: 400;
        color: #333333;
        text-align: center;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 25px 10px 0;
    }

    .goodsList h3 {
        font-size: 12px;
        font-weight: 400;
        color: #b0b0b0;
        text-align: center;
        text-decoration: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 5px 10px;
    }

    .goodsList p {
        text-align: center;
        color: #ff6700;
        margin: 10px 10px 10px;
    }

    .goodsList .delete {
        margin-left: 0.5em;
        text-decoration: line-through;
        color: #b0b0b0;
    }
</style>