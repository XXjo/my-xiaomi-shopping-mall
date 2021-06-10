/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-01-20 09:46:01
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-10 13:32:44
 */
module.exports = {
    lintOnSave:false, //关闭eslint检查
    publicPath: './',
    devServer: {
        open: true,
        port: 8888,
        //配置后端访问地址
        proxy:{
            "/api":{
                target: "http://106.15.179.105:3000/",
                changeOrigin: true,  //允许跨域
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}