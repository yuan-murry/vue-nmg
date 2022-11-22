import Vue from 'vue'
import Vuex from 'vuex'
import Sever from "@/api/selfApi";
Vue.use(Vuex)
export default new Vuex.Store({
    state: { //唯一数据源，我理解为声明全局变量
        menus: { part1: 'part1', part2: 'part2', part3: 'part3', part6: 'part6', part7: 'part7', part8: 'part8' },
        theme: "blue",
    },
    getters: {//针对state数据的过滤，

    },
    mutations: { //逻辑处理，但Mutation 必须是同步函数
        refreshMenu(state, newMenu) {
            // 变更状态
            state.menus = { ...state.menus, ...newMenu }
        },
        async getMenus(state) {
            await Sever.smz.getMenu({
                //请求参数
                dep_code: "45000",
            }).then(res => {
                console.log(res)
                if (res.menus != null) {
                    state.menus = JSON.parse(res.menus)
                }
                if (res.theme != null) {
                    state.theme = res.theme
                    document.getElementById("theme").href = `/css/skin_${res.theme}.css`;
                    // let script = document.createElement("script");
                    // script.type = "text/javascript";
                    // script.src = `/js/bg_${res.theme}.js`;
                    // script.id = "theme_bg";
                    // document.getElementsByTagName("body")[0].appendChild(script);
                }

            }).catch(err => {
                console.log(err)
            });
        },
        changeTheme(state, theme) {
            state.theme = theme
        }

    },
    actions: {//Action 类似于 mutation,Action 提交的是 mutation，而不是直接变更状态;Action 可以包含任意异步操作.
        refreshMenu(context, newMenu) {
            context.commit('refreshMenu', newMenu)
        },
        getMenus(context) {
            context.commit('getMenus')
        },
        changeTheme(context, theme) {
            context.commit('changeTheme', theme)
        }
    }
})
