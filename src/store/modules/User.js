/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-01-26 13:38:29
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-01-26 17:55:04
 */
export default {
    state: {
        user_name: "",
        show_login_flag: false
    },

    getters: {
        getUserName(state){
            return state.user_name
        },

        getShowLoginFlag(state){
            return state.show_login_flag
        }

    },

    mutations: {
        setUserName(state, name){
            state.user_name = name
        },

        setShowLoginFlag(state, flag){
            state.show_login_flag = flag
        }
    },

    actions: {

    }
}