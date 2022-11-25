import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home';
import login from '@/views/components/login';

Vue.use(Router)
// 获取原型对象上的push函数
const originalPush = Router.prototype.push
// 修改原型对象中的push方法
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/screenList',
            component: () => import('@/views/components/manage/manage'),
            name: 'manage',
            children: [
                {
                    path: '/screenList',
                    name: 'screenList',
                    component: () => import('@/views/components/manage/screenList')
                },
                {
                    path: '/imageList',
                    name: 'imageList',
                    component: () => import('@/views/components/manage/imageList')
                },
            ]

        },

        {
            path: '/home',
            name: 'home',
            component: home,
            redirect: '/smz',
            children: [
                {
                    path: '/smz',
                    name: 'smz',
                    component: () => import('@/views/smz')
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: login,

        }
    ]
})
export default router
