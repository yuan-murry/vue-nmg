import axios from 'axios'
import { Message } from 'iview'
import hint from '@/common/hint'
import { getToken } from '@/common/auth' // 获取时间差和token
import { setSign } from './encrypt'

const Util = {}
Util.ajax = axios.create({
  timeout: 50000
})

Util.ajax.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
}
// const options = {
//   lock: true,
//   text: '加载中...',
//   spinner: 'el-icon-loading',
//   background: 'rgba(0, 0, 0, 0.3)'
// }
Util.ajax.interceptors.request.use(
  async (config) => {
    // start loading

    const token = getToken() // 如果有token，向请求头部添加参数
    if (token) {
      // 向请求头内加入用户token
      config.headers.Authorization = token
    }
    config.baseURL = '/api'
    config.method === 'get' ? config.params = setSign(config.params) : config.data = setSign(config.data)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

Util.ajax.interceptors.response.use(
  (response) => {
    // console.log('&&&&',response)
    /**
     * 在这里做loading 关闭
     */
    const responseType = response.request.responseType
    if (responseType === 'blob') {
      // 如果是返回的是流，直接返回
      return response
    } else {
      const { status, message, data } = response
      // console.log('###',data)

      if (status != 200) {
        Message({
          message: message,
          type: 'error',
          duration: 5 * 1000
        })
        return Promise.reject('error')
      } else {
        return data
      }
    }
    // return response
  },
  (error) => {
    // 请求失败也把loading关闭
    const response = error.response
    if (response) {
      if (response.status === 400) {
        // 处理400错误
        return hint.erro('错误的请求!')
      } else if (response.status === 401) {
        // 处理401错误
      } else if (response.status === 403) {
        // 处理403错误
        return hint.erro('禁止访问!')
      } else if (response.status === 404) {
        // 处理404错误
        return hint.erro('请求失败！,未找到此方法')
      } else if (response.status === 413) {
        // 处理413权限不足
        return hint.erro('权限不足!')
      } else if (response.status === 500) {
        // 处理500错误
        return hint.erro('后端数据处理异常!')
      }
    }
    // MessageBox({
    //   title: '提示',
    //   message: '网络不佳',
    //   callback: (action) => {
    //     console.log(action)
    //     loading.close()
    //   }
    // })
    return Promise.reject(response)
  }
)

export default {
  post(url, data) { // post请求
    return Util.ajax({
      method: 'post',
      url: url,
      data: data,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },

  get(url, data) { // get请求
    return Util.ajax({
      method: 'get',
      url: url,
      params: data
    })
  },

  blob(url, data) { // 返回流的请求
    return Util.ajax({
      method: 'post',
      url: url,
      params: data,
      responseType: 'blob'
    })
  }
}
