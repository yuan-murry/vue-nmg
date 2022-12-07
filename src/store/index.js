import Vue from 'vue'
import Vuex from 'vuex'
import Sever from "@/api/selfApi";
Vue.use(Vuex)
export default new Vuex.Store({
    state: { //唯一数据源，我理解为声明全局变量
        menus_blue: { part1: 'part1', part2: 'part2', part3: 'part3', part6: 'part6', part7: 'part7', part8: 'part8' },
        theme: "blue",
    },
    getters: {//针对state数据的过滤，

    },
    mutations: { //逻辑处理，但Mutation 必须是同步函数
        refreshMenu(state, obj) {
            console.log(obj,'我是obj')
            // 变更状态
            if (obj.themeName == 'theme_blue') {
                state.menus_blue = { ...state.menus_blue, ...obj.menus }
            }
        },
        async getMenus(state, theme) {
            await Sever.smz.getMenu({
                //请求参数
                themeName: theme,
            }).then(res => {
                if (res.menus != null) {
                    if (theme == "theme_blue") {
                        state.menus_blue = JSON.parse(res.menus)
                    }
                }
                // if (res.theme != null) {
                //     state.theme = res.theme
                //     document.getElementById("theme").href = `/css/skin_${res.theme}.css`;
                // }

            }).catch(err => {
                console.log(err)
            });
        },
        changeTheme(state, theme) {
            state.theme = theme
        }

    },
    actions: {//Action 类似于 mutation,Action 提交的是 mutation，而不是直接变更状态;Action 可以包含任意异步操作.
        refreshMenu(context, obj) {
            context.commit('refreshMenu', obj)
        },
        getMenus(context, theme) {
            context.commit('getMenus', theme)
        },
        changeTheme(context, theme) {
            context.commit('changeTheme', theme)
        }
    }
})
