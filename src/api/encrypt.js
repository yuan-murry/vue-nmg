import qs from 'qs'
import md5 from 'js-md5' // md5
import { getServerTime } from '@/common/auth'

// 获取有效时间
function getSeverTrueTime() {
  var serverTime = getServerTime('serverTime')
  // 最新时间戳-时间差=有效时间戳
  return new Date().getTime() - serverTime
}

// 获取需要加密的数据 sole值
export function getSole() {
  var nowDate = new Date()
  var year = nowDate.getFullYear()
  var month =
        nowDate.getMonth() + 1 < 10
          ? '0' + (nowDate.getMonth() + 1)
          : nowDate.getMonth() + 1
  var day =
        nowDate.getDate() < 10 ? '0' + nowDate.getDate() : nowDate.getDate()
  return year + '5616' + month + '' + day
}

// 对象排序，并把复杂对象转成字符串
export function formatObj(obj) {
  const keys = Object.keys(obj).sort()
  const newObj = {
		params: {},
		hasParams: {}
	}
  keys.forEach(item => {
		if(obj[item] !== null && obj[item] !== ""){
			newObj.params[item] = obj[item];
			(typeof obj[item] === 'object') ? (newObj.hasParams[item] = JSON.stringify(obj[item])) : (newObj.hasParams[item] = obj[item])
		}
  })
  return newObj
}

export function setSign(params) {
  const yan = getSole()
  const time = getSeverTrueTime()
  let hasParams
  params ? (hasParams = formatObj(params)) : (hasParams = {})
  const md5Par = params
    ? `${qs.stringify(hasParams.hasParams)}&${yan}&time=${time}`
    : `&${yan}&time=${time}`
  params = Object.assign({}, hasParams.params, {
    sign: md5(decodeURIComponent(md5Par)),
    time: time
  })
  return params
}

export function setSignOther(params) {
  const yan = getSole()
  let hasParams
  params ? (hasParams = formatObj(params)) : (hasParams = {})
  const md5Par = params
    ? `${qs.stringify(hasParams)}&${yan}`
    : `&${yan}`
		
  params = Object.assign({}, params, {
    sign: md5(decodeURIComponent(md5Par))
  })
  return params
}
