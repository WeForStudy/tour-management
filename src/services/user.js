import apis from '../api'
import http from '../http'

export const getAllUsers = (params = {}) => {
  return http.get(apis.getAllUsers, params)
}

export const deleteUserById = (params = {}) => {
  return http.post(apis.deleteUserById, params)
}

export const addUser = (params = {}) => {
  return http.post(apis.addUser, params)
}

export const singleUser = (params = {}) => {
  return http.post(apis.singleUser, params)
}
export const updateUser = (params = {}) => {
  return http.post(apis.updateUser, params)
}
