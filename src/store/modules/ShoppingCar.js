/*
 * @Description: 
 * @Version: 1.0
 * @Autor: XuXiaoling
 * @Date: 2021-06-23 16:33:40
 * @LastEditors: XuXiaoling
 * @LastEditTime: 2021-06-24 16:44:38
 */
export default {
    state: {
        shoppingCar: []
    },

    getters: {
        getShoppingCar(state) {
            return state.shoppingCar;
        },

        getShoppingCarNum(state) {
            let num = 0;
            state.shoppingCar.forEach(ele => {
                num += ele.num;
            });
            return num;
        }
    },

    mutations: {
        SHOPPINGCAR(state, shoppingCar) {
            state.shoppingCar = shoppingCar;
        },

        ADDSHOPPINGCAR(state, value) {
            if(value instanceof Array) {
                state.shoppingCar.push(value[0]);
            }
            else {
                state.shoppingCar.forEach(ele => {
                    if(ele.productID === value) {
                        ele.num += 1;
                    }
                });
            }
        }
    },

    actions: {
        setShoppingCar({ commit }, shoppingCar) {
            commit("SHOPPINGCAR", shoppingCar);
        },

        addShoppingCar( { commit }, value) {
            commit("ADDSHOPPINGCAR", value);
        }
    }
}