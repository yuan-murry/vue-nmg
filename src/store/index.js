import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: { //唯一数据源，我理解为声明全局变量
        menus: { part1: 'part1', part2: 'part2', part3: 'part3', part6: 'part6', part7: 'part7', part8: 'part8' }
    },
    getters: {//针对state数据的过滤，

    },
    mutations: { //逻辑处理，但Mutation 必须是同步函数
        refreshMenu(state, newMenu) {
            // 变更状态
            state.menus = { ...state.menus, ...newMenu }
        },
        getMenus(state, menus) {
            state.menus = menus
        }
    },
    actions: {//Action 类似于 mutation,Action 提交的是 mutation，而不是直接变更状态;Action 可以包含任意异步操作.
        refreshMenu(context, newMenu) {
            context.commit('refreshMenu', newMenu)
        },
        getMenus(context, menus) {
            context.commit('getMenus', menus)
        }
    }
})
