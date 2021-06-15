<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-01-20 09:43:21
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-15 16:56:35
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

            </div>
            <div class="electricAppliance"></div>
            <div class="fitting"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                carousel: ""
            }
        },

        created() {
            this.$axios
                .post("/api/resources/carousel")
                .then(res => {
                    this.carousel = res.data.carousel;
                })
                .catch(err => {

                })
        }
    }
</script>

<style>
    .carousel {
        margin: 0 auto;
        max-width: 1226px;
    }
</style>
