import fetch from './fetch'
export default {
  //实名制模块
  smz: {
    getTest(params) {
      return fetch.get('/api/testvue.do', params)
    },
    getMenu(params) {
      return fetch.get('/api/query/menu.do', params)
    }
  }
}
