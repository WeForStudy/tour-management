import apis from '../api'
import http from '../http'

export const getPublicKey = (params = {}) => {
  return http.get(apis.getPublicKey, params)
}

export const RSALogin = (params = {}) => {
  return http.post(apis.RSALogin, params)
}
