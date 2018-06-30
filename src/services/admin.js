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

export const addAdmin = (params = {}) => {
  return http.post(apis.addAdmin, params)
}

export const singleAdmin = (params = {}) => {
  return http.post(apis.singleAdmin, params)
}
export const updateAdmin = (params = {}) => {
  return http.post(apis.updateAdmin, params)
}
