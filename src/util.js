const { from } = require("core-js/fn/array")

/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-02-05 17:45:23
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-02-08 18:00:55
 */


//Vue自定义函数挂到全局
exports.install = function(Vue) {
    Vue.prototype.notifySuccess = function(msg) {
        this.$message({
            showClose:true,
            message: msg,
            type: 'success'
        })
    }

    Vue.prototype.notifyError = function(msg) {
        this.$message({
            showClose:true,
            message: msg,
            type: 'error'
        })
    }
}