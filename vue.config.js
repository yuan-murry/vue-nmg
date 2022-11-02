const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
module.exports = {
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
    ],
    publicPath: './',
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    chainWebpack: config => {
        // 移除 prefetch 插件 （首次加载无需一次性全部加载所有的chunk）
        config.plugins.delete('prefetch')
        config.plugin('html').tap(args => {
            args[0].title = '内蒙古机构编制数字一体化平台' // 浏览器title
            return args
        })
        // 添加别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
    },
    devServer: {
        // host: '192.168.1.108', // 设置ip或者localhost访问
        port: 9000,
        hot: true, // 开启热更新
        overlay: false, // 开启报错提示显示在浏览器遮罩层
        historyApiFallback: false, // 设置vue-router的模式是history
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: process.env.VUE_APP_BASE_API || 'http://localhost:8082',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                    // pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
                    // pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
                }
            }
        }
    }
}