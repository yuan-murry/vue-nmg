import Cookies from 'js-cookie'

const serverTime = 'machine-sign'
const user = 'login'
const token = 'machine-token'

// serverTime
export function getServerTime() {
  return Cookies.get(serverTime)
}

export function setServerTime(diffTime) {
  return Cookies.set(serverTime, diffTime)
}

export function removeServerTime() {
  return Cookies.remove(serverTime)
}

//token
export function getToken() {
  return Cookies.get(token)
}

export function setToken(data) {
  return Cookies.set(token, data)
}

export function removeToken() {
  return Cookies.remove(token)
}

// user
export function getUser() {
  return Cookies.get(user)
}

export function setUser(data) {
  return Cookies.set(user, data)
}

export function removeUser() {
  return Cookies.remove(user)
}

