import fetch from './fetch'
export default {
  //实名制模块
  smz: {
    getTest(params) {
      return fetch.get('/api/testvue', params)
    },
    getMenu(params) {
      return fetch.get('/api/menu', params)
    },
    saveMenu(params) {
      return fetch.post('/api/saveMenu', params)
    },
    saveOrUpdateImg(params) {
      return fetch.post('/api/saveOrUpdateImg', params)
    },
    getAllImg(params) {
      return fetch.get('/api/getAllImg', params)
    },
    delImg(params) {
      return fetch.delete('/api/delImg/' + params)
    },
    getImgByTheme(params) {
      return fetch.get('/api/getImgByTheme', params)
    },
    saveTheme(params) {
      return fetch.post('/api/saveTheme', params)
    },
    saveSort(params) {
      return fetch.post('/api/saveSort', params)
    }
  }
}
