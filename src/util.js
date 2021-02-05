/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-02-05 17:45:23
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-02-05 18:02:00
 */


//Vue自定义函数挂到全局
exports.install = function(Vue){
    Vue.prototype.notifySuccess = function(msg){
        this.$notify({
            title: '成功',
            message: msg,
            type: 'success',
            offset: 100
        })
    }
}