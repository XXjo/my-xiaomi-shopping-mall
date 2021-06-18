<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-06-15 17:37:12
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-18 17:52:44
-->
<template>
    <div>
        <div class="head">
            <h2 class="name">{{product.product_name}}</h2>
            <div class="tag">
                <el-button type="text">概述</el-button>
                <span>|</span>
                <el-button type="text">参数</el-button>
                <span>|</span>
                <el-button type="text">安装须知</el-button>
                <span>|</span>
                <el-button type="text">售后政策</el-button>
                <span>|</span>
                <el-button type="text">F码通道</el-button>
                <span>|</span>
                <el-button type="text">咨询客服</el-button>
                <span>|</span>
                <el-button type="text">用户评价</el-button>
            </div>
        </div>
        <div class="test">
            fbfghbfgh
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                productId: "",
                product: ""
            }
        },
        created() {
            this.productId = this.$route.query.id;
            this.getDatail(this.productId);
        },
        methods: {
            getDatail(val) {
                this.$axios
                    .post("/api/product/getDetails", {productID: val})
                    .then(res => {
                        if(res.data.code === "001") {
                            this.product = res.data.Product[0];
                        }
                    })
            }
        }
    }
</script>
<style>
    .head {
        border: 1px solid #e0e0e0;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
    .head .name {
        font-size: 18px;
        font-weight: 400;
        line-height: 60px;
        color: #424242;
        margin-left: 30px;
   
    }

    .head .tag {
        margin-right: 30px;
    }

    .head .el-button--text  {
        color: #616161;
    }

    .head .el-button--text :hover {
        color: #ff6700;
    }

    .head span {
        margin: 0 5px;
    }

    .test {
        height: 1463px;
    }

</style>