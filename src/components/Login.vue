<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-01-28 13:14:37
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-09 17:14:57
-->
<template>
    <div>
        <el-dialog title="登录" center :visible.sync="is_show" :close-on-click-modal="false" width="20%">
            <el-form :model="user_info" :rules="rules" ref="login_form">
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
import { mapActions} from "vuex";

export default {
    data(){
        var validate_name = (rule, value, callback) => {
            if(value === ""){
                callback(new Error("用户名不能为空"))
            }
            const name_rule = /[a-zA-Z]\w{4,15}/
            if(name_rule.test(value)){
                callback();
            }
            else{
                callback(new Error("字母开头,长度5-16之间,允许字母数字下划线"));
            }
        }

        var validate_pwd = (rule, value, callback) => {
            if(value === ""){
                callback(new Error("密码不能为空"));
            }
            const pass_rule = /[a-zA-Z]\w{5,17}/
            if(pass_rule.test(value)){
                callback();
            }
            else{
                callback(new Error("字母开头,长度6-18之间,允许字母数字和下划线"));
            }
        }
        
        return{
            user_info:{
                name: "",
                password: ""
            },
            rules:{
                name:[
                    {validator: validate_name, trigger: 'blur'}
                ],
                password:[
                    {validator: validate_pwd, trigger: 'blur'}
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

            set() {
                this.$refs.login_form.resetFields();
                this.setShowLoginFlag(false);
            }

        }
    },

    methods: {
        ...mapActions(["setUserName", "setShowLoginFlag"]),
        login() {
            this.$refs.login_form.validate((valid) => {
                if(valid) {
                    this.$axios
                        .post("/api/users/login", {
                            userName: this.user_info.name,
                            password: this.user_info.password
                        })
                        .then(res => {
                            if(res.data.code === "001") {
                                this.setShowLoginFlag(false);
                                this.setUserName(this.user_info.name);
                                this.notifySuccess(res.data.msg);
                            }
                            else {
                                this.$refs.login_form.resetFields();
                                this.notifyError(res.data.msg);
                            }
                        })
                        .catch(error => {

                        })
                }
                else {
                    return false;
                }
            } )
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