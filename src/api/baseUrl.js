let baseUrl = ''
const baseUrl1 = 'http://localhost:8089'
const baseUrl2 = 'http://39.105.98.177:8189'
const dev = process.env.NODE_ENV === 'development'
const test = process.env.NODE_ENV === 'test'
if (process.env.NODE_ENV === 'production') {
  // 线上
  baseUrl = baseUrl2
} else if (dev || test) {
  // 开发环境 & 测试环境
  baseUrl = baseUrl1
}
export default baseUrl
