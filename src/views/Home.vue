<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-01-20 09:43:21
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-16 16:27:16
-->
<template>
    <div class="home">
        <el-carousel class="carousel" height="460px">
          <el-carousel-item v-for="item in carousel" :key="item.carousel_id">
              <img :src="$target + item.imgPath" :alt="item.describes" style="height: 460px;"/>
          </el-carousel-item>
        </el-carousel>
        <div class="main">
            <div class="phone">
                <h1>手机</h1>
                <div>
                    <img :src="$target +'public/imgs/phone/phone.png'" />
                    <GoodsList :goodsList="phoneList"></GoodsList>
                </div>
            </div>
            <div class="electricAppliance"></div>
            <div class="fitting"></div>
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
                phoneList: ""
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
            console.log(this.phoneList);
            console.log(this.$route);
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

<style>
    .carousel {
        margin: 0 auto;
        max-width: 1226px;
    }
    .main {
        max-width: 1226px;
        margin: 0 auto;
    }

    .main img {
        height: 615px;
        float: left;
    }



</style>
