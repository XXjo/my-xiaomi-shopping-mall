<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-01-28 13:14:37
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-01-28 17:52:26
-->
<template>
    <div>
        <el-dialog title="登录" center :visible="is_show" width="20%">
            <el-form :model="user_info" :rules="rules" ref="loginForm">
            <!-- el-form-item中的prop，与el-input中v-model的user_info.* 名字需要相同，否则满足规则提醒的文字也不会消失 -->
            <el-form-item prop="name">
                <el-input v-model="user_info.name" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="user_info.password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
            </el-form-item>
            </el-form>
        </el-dialog>
    </div>

</template>

<script>
// import { mapActions} from "vuex";

export default {
    data(){
        return{
            user_info:{
                name: "",
                password: ""
            },
            rules:{
                name:[
                    {required: true, message:'用户名不为空', trigger: 'blur'}
                ],
                password:[
                    {required: true, message:'密码不为空', trigger: 'blur'}
                ]
            }
        }
    },

    created(){
        
    },

    computed: {
        is_show: {
            get() {
                return this.$store.getters.getShowLoginFlag;
            },
            // set(val) {
            //     return
            // }
        }
    },

    methods: {
        login() {
            console.log(this.user_info)
            console.log(this.$refs.loginForm)
        }
    }
}
</script>

<style scoped>
.el-button--primary:focus, 
.el-button--primary:hover,
.el-button--primary {
    width: 100%;
    background-color: #ff6700;
    color: #fff;
    border-color: #ff6700;
}

</style>