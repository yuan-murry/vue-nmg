import fetch from './fetch'
export default {
  //实名制模块
  smz: {
    getTest(params) {
      return fetch.get('/api/testvue.do', params)
    },
    getMenu(params) {
      return fetch.get('/api/query/menu.do', params)
    },
    saveMenu(params) {
      return fetch.post('/api/query/saveMenu.do', params)
    },
    saveTheme(params) {
      return fetch.post('/api/query/saveTheme.do', params)
    }
  }
}
