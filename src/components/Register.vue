<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-01-29 14:08:25
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-10 15:25:56
-->
<template>
    <div>
        <el-dialog title="注册" center width="20%" :visible.sync="isShow" :close-on-click-modal="false">
            <el-form :model="register_info" ref="register_form" :rules="rules">
              <el-form-item prop="name">
                  <el-input v-model="register_info.name" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                  <el-input v-model="register_info.password" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item prop="confirm_password">
                  <el-input v-model="register_info.confirm_password" placeholder="请再次输入密码"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" @click="register">注册</el-button>
              </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
export default {
    //接受父组件传递的数据
    props: {
        show: Boolean
    },
    data() {
        //校验用户名规则
        var validate_name = (rule, value, callback) => {
            if(value === ""){
                return(callback(new Error("用户名不能为空")));
            }
            const name_rule = /[a-zA-Z]\w{4,15}/
            if(name_rule.test(value)){
                //判断用户名是否已经存在
                this.$axios
                .post("/api/users/findUserName", {
                    userName: this.register_info.name
                })
                .then(res =>{
                    if(res.data.code === "001"){
                        callback();
                    }
                    else{
                        callback(new Error(res.data.msg));
                    }
                })
                .catch(error =>{

                })
            }
            else{
                callback(new Error("字母开头,长度5-16之间,允许字母数字下划线"));
            }
        };
        //校验密码规则
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
        //校验再次密码规则
        var validate_confirm_pwd = (rule, value, callback) => {
            if(value === ""){
                callback(new Error("密码不能为空"));
            }
            const pass_rule = /[a-zA-Z]\w{5,17}/
            if(pass_rule.test(value)){
                if(value === this.register_info.password){
                    callback()
                }
                else{
                    callback(new Error("两次输入密码不一致"));
                }
            }
            else{
                callback(new Error("字母开头,长度6-18之间,允许字母数字和下划线"));
            }
        }

        return{
            isShow: false,
            register_info:{
                name: "",
                password: "",
                confirm_password: ""
            },
            rules:{
                name:[
                    {validator: validate_name, trigger: 'blur'}
                ],
                password: [
                    {validator: validate_pwd, trigger: 'blur'}
                ],
                confirm_password: [
                    {validator: validate_confirm_pwd, trigger: 'blur'}
                ]
            }
        }
    },
    //watch是用来监测数据的，其实每个函数都包含两个参数（newValue, oldValue）
    //watch监听的数据来源可以是data、computed、props
    watch: {
        show(newValue) {
            this.isShow = newValue;
        },

        isShow(newValue) {
            if(!newValue) {
                this.$refs.register_form.resetFields();
                this.$emit('fromRegister', newValue); //触发自定义事件fromRegister，从而达到将子组件的值传回父组件的目的
            }
        }
    },
    
    methods: {
        register(){
            this.$refs['register_form'].validate((valid) => {
                if (valid) {
                    this.$axios
                    .post("/api/users/register", {
                        userName: this.register_info.name,
                        password: this.register_info.password
                    })
                    .then(res => {
                        this.isShow = false;
                        if(res.data.code === "001") {
                            this.isShow = false;
                            this.notifySuccess(res.data.msg);
                        }
                        else {
                            this.notifuError(res.data.msg);
                        }
                    })
                    .catch(error => {
                        console.log("error")
                    })
                }
            })
        }
    }
};

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