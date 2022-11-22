import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import './assets/less/index.less';
import * as echarts from 'echarts'
import utils from "./lib/utils";
import hint from '@/common/hint' // message提示
import store from '@/store/index.js'
import Viewer from 'v-viewer'
import walden from "@/assets/json/walden.json";
import wonderland from "@/assets/json/wonderland.json";
echarts.registerTheme("red", walden);
echarts.registerTheme("blue", wonderland);

Vue.prototype.$echarts = function (el) {
  return echarts.init(el, null, { renderer: 'svg' })
}
Vue.prototype.$hint = hint
Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(utils);
Vue.use(Viewer);
Viewer.setDefaults({
  Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
