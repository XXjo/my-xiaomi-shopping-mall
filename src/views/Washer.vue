<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-06-15 11:11:55
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-24 16:18:29
-->
<template>
    <div class="main">
        <div class="goods">
            <GoodsList :goodsList="goodsList"></GoodsList>
        </div>
    </div>
</template>
<script>
    import GoodsList from '@/components/GoodsList'
    export default {
        components: {
            GoodsList
        },

        data() {
            return {
                categoryId: [4],
                currentPage: 1,
                pageSize: 15,
                goodsList: ""
            }
        },

        created() {
            this.$axios
                .post("/api/product/getProductByCategory", {
                    categoryID: this.categoryId,
                    currentPage: this.currentPage,
                    pageSize: this.pageSize
                })
                .then(res => {
                    if(res.data.code === "001") {
                        this.goodsList = res.data.Product;
                    }
                })
        }
    }
</script>
<style scoped>
    /* 解决由于浮动引起的高度坍塌问题 */
    .main::after {
        content: "";
        display: block;
        height: 0;
        clear: both;
    }
    .main {
        background-color: #f5f5f5;
    }

    .goods {
        max-width: 1240px;
        margin: 0 auto;
        padding-top: 14.5px;
    }
</style>