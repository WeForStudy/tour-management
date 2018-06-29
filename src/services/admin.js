import apis from '../api'
import http from '../http'
export const onLogin = (params = {}) => {
  return http.post(apis.onLogin, params)
}
export const getAllAdmins = (params = {}) => {
  return http.get(apis.getAllAdmins, params)
}

export const deleteAdminById = (params = {}) => {
  return http.post(apis.deleteAdminById, params)
}
