/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-01-26 13:38:29
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-23 15:53:15
 */
export default {
    state: {
        user: "",
        show_login_flag: false   //控制登录组件的显示
    },

    getters: {
        getUser(state){
            return state.user;
        },

        getShowLoginFlag(state){
            return state.show_login_flag;
        }

    },

    mutations: {
        USER(state, user){
            state.user = user;
        },

        SHOW_LOGIN_FLAG(state, flag){
            state.show_login_flag = flag;
        }
    },

    actions: {
        setUser( {commit}, user){
            commit("USER", user);
        },
        setShowLoginFlag( {commit}, flag){
            commit("SHOW_LOGIN_FLAG", flag);
        }
    }
}