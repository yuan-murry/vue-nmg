import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home';

Vue.use(Router)
// 获取原型对象上的push函数
const originalPush = Router.prototype.push
// 修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
    linkActiveClass:'active',
    routes: [
        {
            path: '/',
            redirect: '/smz'
        },
        {
            path: '',
            name: 'home',
            component: home,
            children: [
                {
                    path: '/smz',
                    name: 'smz',
                    component: () => import('@/views/smz')
                }
            ]
        }
    ]
})
export default router
