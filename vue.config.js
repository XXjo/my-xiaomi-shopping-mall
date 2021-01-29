/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-01-20 09:46:01
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-01-29 15:39:49
 */
module.exports = {
    devServer: {
        open: true,
        port: 8888,
        //配置后端访问地址
        proxy:{
            "/api":{
                target: "http://47.115.85.237:3000/",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}