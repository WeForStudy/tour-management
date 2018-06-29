import apis from '../api'
import http from '../http'

export const getAllUsers = (params = {}) => {
  return http.get(apis.getAllAdmins, params)
}
