<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-01-29 14:08:25
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-01-29 18:08:54
-->
<template>
    <div>
        <el-dialog title="注册" center width="20%" :visible.sync="isShow" :rules="rules">
            <el-form :model="register_info" ref="register_form">
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
        return{
            isShow: false,
            register_info:{
                name: "",
                password: "",
                confirm_password: ""
            },
            rules:{
                name:[
                    {required: true, message:'用户名不为空', trigger: 'blur'}
                ],
                password: [
                    {required: true, message:'密码不为空', trigger: 'blur'}
                ],
                confirm_password: [
                    {required: true, message:'密码不为空', trigger: 'blur'}
                ]
            }
        }
    },
    watch: {
        //将从父组件那儿得到的值赋给isShow
        show(val) {
            this.isShow = val;
        },
        //将子组件的值传递给父组件
        isShow(val) {
            this.$refs["register_form"].resetFields();
            this.$emit("success", val);
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
                        console.log("register", res.data)
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