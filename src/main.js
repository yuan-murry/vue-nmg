import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import './assets/less/index.less';
import * as echarts from 'echarts'
import utils from "./lib/utils";
import hint from '@/common/hint' // message提示
import store from '@/store/index.js'
import walden from "@/assets/json/walden.json";
import wonderland from "@/assets/json/wonderland.json";
echarts.registerTheme("red", walden);
echarts.registerTheme("blue", wonderland);

Vue.prototype.$echarts = function (el) {
    return echarts.init(el, null, {renderer: 'svg'})
}
Vue.prototype.$hint = hint
Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(utils)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
