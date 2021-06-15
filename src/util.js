
/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-02-05 17:45:23
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-15 15:13:01
 */


//Vue自定义函数挂到全局
exports.install = function(Vue) {
    Vue.prototype.$target = "http://106.15.179.105:3000/"
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