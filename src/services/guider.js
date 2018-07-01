import apis from '../api'
import http from '../http'

export const getAllGuiders = (params = {}) => {
  return http.get(apis.getAllGuiders, params)
}

export const deleteGuiderById = (params = {}) => {
  return http.post(apis.deleteGuiderById, params)
}

export const addGuider = (params = {}) => {
  return http.post(apis.addGuider, params)
}

export const singleGuider = (params = {}) => {
  return http.post(apis.singleGuider, params)
}
export const updateGuider = (params = {}) => {
  return http.post(apis.updateGuider, params)
}
