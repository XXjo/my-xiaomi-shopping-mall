<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-01-20 09:43:21
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-17 17:26:19
-->
<template>
    <div class="home">
        <el-carousel class="carousel" height="460px">
          <el-carousel-item v-for="item in carousel" :key="item.carousel_id">
              <img :src="$target + item.imgPath" :alt="item.describes" style="height: 460px;"/>
          </el-carousel-item>
        </el-carousel>
        <div class="main-bg">
            <div class="main">
                <div class="phone">
                    <h1>手机</h1>
                    <div class="list-img">
                        <img :src="$target +'public/imgs/phone/phone.png'" />
                    </div>
                    <div class="list-goods">
                        <GoodsList :goodsList="phoneList" class="list"></GoodsList>
                    </div>

                </div>
                <div class="electricAppliance">
                    <h1>家电</h1>
                    <div class="list-img">
                        <ul>
                            <li>
                                <img :src= "$target +'public/imgs/appliance/appliance-promo1.png'" />
                            </li>
                            <li>
                                <img :src= "$target +'public/imgs/appliance/appliance-promo2.png'"/>
                            </li>
                        </ul>
                    </div>
                    <div class="list-goods">
                        <GoodsList :goodsList="applianceList" class="list"></GoodsList>
                    </div>
                </div>
                <div class="fitting">
                    <h1>配件</h1>
                    <div class="list-img">
                        <ul>
                            <li>
                                <img :src= "$target +'public/imgs/accessory/accessory-promo1.png'" />
                            </li>
                            <li>
                                <img :src= "$target +'public/imgs/accessory/accessory-promo2.png'"/>
                            </li>
                        </ul>
                    </div>
                    <div class="list-goods">
                        <GoodsList :goodsList="fittingList" class="list"></GoodsList>
                    </div>
                </div>
            </div>
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
                carousel: "",
                phoneList: "",
                applianceList: "",
                fittingList: ""
            }
        },

        created() {
            //获取轮播数据
            this.$axios
                .post("/api/resources/carousel")
                .then(res => {
                    this.carousel = res.data.carousel;
                })
                .catch(err => {

                })
            this.getList("手机", "phoneList");
            this.getList(["电视机", "空调", "洗衣机"], "applianceList", "/api/product/getHotProduct");
            this.getList(["保护套", "保护膜", "充电器", "充电宝"], "fittingList", "/api/product/getHotProduct");

        },

        methods: {
            getList(categoryName, val, url) {
                url = url !== undefined? url : "api/product/getPromoProduct";
                this.$axios
                    .post(url, {categoryName})
                    .then(res => {
                        if(res.data.code === "001")
                            this[val] = res.data.Product;
                    })
                    .catch(err => {
                        
                    })
            }
        }
    }
</script>

<style scoped>
    .carousel {
        margin: 0 auto;
        max-width: 1226px;
    }

    .main-bg {
        background-color: #f5f5f5;
        padding-bottom: 20px;

    }

   /* 解决浮动子元素造成父元素高度坍塌的问题 */
    /* #region */
    .main-bg::after, .phone::after, .fitting::after, .electricAppliance::after{
        content: "\0020";
        display: block;
        height: 0;
        clear: both;
    }
     /* #endregion */

     .main {
        max-width: 1226px;
        margin: 0 auto;
    }

    .main h1 {
        font-size: 22px;
        font-weight: 200;
        line-height: 58px;
        color: #333;
        margin: 20px 0 0 0;
    }

    .main .list-img {
        float: left;
    }
    
    .main .list-img img {
        width: 234px;
        height: 615px;

    }

    .main .list-img li img {
        width: 234px;
        height: 300px;
    }

    .main .list-img ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    .main .list-img li {
        width: 234px;
        height: 300px;
        margin-bottom: 14.5px;
    }

    .main .list-goods {
        height: 615px;
        width: 991px;
        float: left;
    }

</style>
