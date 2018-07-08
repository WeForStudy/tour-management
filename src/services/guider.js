import apis from '../api'
import http from '../http'


export const getAllGuiders = (params = {}) => {
  return http.get(apis.getAllGuiders, params)
  }
  
export const deleteGuiderById = (params = {}) => {
  return http.post(apis.deleteGuiderById, params)
  }