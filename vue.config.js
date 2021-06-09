/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-01-20 09:46:01
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-09 16:41:43
 */
module.exports = {
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