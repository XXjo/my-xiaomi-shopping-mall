<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-06-15 17:37:12
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-24 16:42:56
-->
<template>
    <div>
        <div class="head">
            <div class="title">
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
        </div>
        <div class="detail">
            <!-- 轮播图 -->
            <el-carousel height="560px" style="width: 560px;">
              <el-carousel-item v-for="item in productImage">
                  <img :src="$target + item.product_picture" :alt="item.intro" style="height: 560px;"/>
              </el-carousel-item>
            </el-carousel>
            <!-- 右侧详情 -->
            <div class="content">
                <h1 class="name">{{product.product_name}}</h1>
                <p class="intro">{{product.product_intro}}</p>
                <p style="color: #ff6700;">小米自营</p>
                <p>
                    <span class="price">{{product.product_selling_price}}元</span>
                    <span v-show="product.product_selling_price != product.product_price" class="delete">{{product.product_price}}元</span>
                </p>
                <p class="line"></p>
                <div class="selected-list">
                    <p class="selected-name">{{product.product_name}}
                        <span class="selected-price">
                            <span>{{product.product_selling_price}}元</span>
                            <span v-show="product.product_selling_price != product.product_price" class="selected-delete">{{product.product_price}}元</span>
                        </span>
                    </p>
                    <p class="total">
                        总计：{{product.product_selling_price}}元
                    </p>
                </div>
                <div class="btn-box">
                    <el-button class="shopping-car-btn" @click="addShopCart">加入购物车</el-button>
                    <el-button class="favourite-btn" @click="addFavourite">
                        <i :class="favourite ? 'el-icon-star-on' : 'el-icon-star-off'"></i>
                        喜欢
                    </el-button>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex';
    export default {
        data() {
            return {
                productId: "",
                product: "",
                productImage: "",
                favourite: false
            }
        },

        created() {
            this.productId = this.$route.query.id;
            this.getDatail(this.productId);
            this.getImage(this.productId);
        },

        
        computed: {
            ...mapGetters({
                user: "getUser"
            })
        },
        methods: {
            ...mapActions(["setUser", "setShowLoginFlag", "addShoppingCar"]),
            getDatail(val) {
                this.$axios
                    .post("/api/product/getDetails", {productID: val})
                    .then(res => {
                        if(res.data.code === "001") {
                            this.product = res.data.Product[0];
                        }
                    })
                    .catch(error => {

                    })
            },

            getImage(val) {
                this.$axios
                    .post("/api/product/getDetailsPicture", {productID: val})
                    .then(res => {
                        if(res.data.code === "001") {
                            this.productImage = res.data.ProductPicture;
                        }
                    })
                    .catch(error => {

                    })
                    
            },

            addShopCart() {
                if(this.user) {
                    this.$axios
                        .post("/api/user/shoppingCart/addShoppingCart", {
                            user_id: this.user.user_id,
                            product_id: this.productId
                        })
                        .then(res => {
                            let code = res.data.code;
                            if(code === "001") {
                                this.addShoppingCar(res.data.addShoppingCar);
                                this.notifySuccess(res.data.msg);
                            }
                            else if(code === "002") {
                                this.addShoppingCar(this.productId);
                                this.notifySuccess(res.data.msg);
                            }
                            else {
                                this.notifyError(res.data.msg);
                            }
                        })
                        .catch(error => {
                            
                        })
                }
                else{
                    this.setShowLoginFlag(true);
                }
            },

            addFavourite() {
                this.favourite = !this.favourite;
            }
        }
    }
</script>
<style scoped>
    /*head */
    /* #region */
    .head {
        border: 1px solid #e0e0e0;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.07);
    }
    .head .title {
        max-width: 1226px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
    }
    .head .name {
        font-size: 18px;
        font-weight: 400;
        line-height: 60px;
        color: #424242;
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
    /* #endregion */

    /* detail-content */
    /* #region */
    .detail {
        max-width: 1226px;
        margin: 0 auto;
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .detail .content {
        width: 640px;
        margin-left: 80px;
    }

    .detail .content .name {
        font-size: 24px;
        font-weight: 400;
        color: #212121;
    }

    .detail .content .intro {
        line-height: 1.5;
        color: #b0b0b0;
    }

    .detail .content .price {
        font-size: 18px;
        line-height: 1;
        color: #ff6700;
    }

    .detail .content .delete {
        font-size: 14px;
        text-decoration: line-through;
        color: #b0b0b0;
        margin-left: 10px;
    }

    .detail .content .line {
        border-bottom: 1px solid #e0e0e0;
    }

    .detail .content .selected-list {
        background-color: #f9f9fa;
        padding: 30px;
        margin-bottom: 30px;
    }

    .detail .content .selected-list .selected-name {
        color: #616161;
        line-height: 30px;
        font-size: 14px;
    }

    .detail .content .selected-list .selected-price {
        float: right;
    }
    .detail .content .selected-list .selected-delete {
        margin-left: 10px;
        text-decoration: line-through;
    }

    .detail .content .selected-list .total {
        color: #ff6700;
        font-size: 24px;
        padding-top: 20px;
    }
    /* #endregion */

    /* detail-btn */
    /* #region */
    .detail .content .btn-box .el-button{
        height: 52px;
        font-size: 16px;
        color: #ffffff;
        border: none;
        transition: border 1s linear;
    }

    .detail .content .btn-box .shopping-car-btn {
        width: 300px;
        background-color: #ff6700;
        
    }

    .detail .content .btn-box .shopping-car-btn:active {
        border: 1px solid  #ff6700;
    }

    .detail .content .btn-box .favourite-btn {
        width: 140px;
        background-color: #b0b0b0;
        margin-left: 50px;
    }

    .detail .content .btn-box .favourite-btn:active {
        border: 1px solid  #ff6700;
    }

    .el-icon-star-on {
        color: red;
    }
    /* #endregion */

</style>
