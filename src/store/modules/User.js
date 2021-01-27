/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-01-26 13:38:29
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-01-27 14:19:03
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
        USER_NAME(state, name){
            state.user_name = name
        },

        SHOW_LOGIN_FLAG(state, flag){
            state.show_login_flag = flag
        }
    },

    actions: {
        setUserName( {commit}, name){
            commit("USER_NAME", name)
        },
        setShowLoginFlag( {commit}, flag){
            commit("SHOW_LOGIN_FLAG", flag)
        }
    }
}