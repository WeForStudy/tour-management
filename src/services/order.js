import apis from '../api'
import http from '../http'

export const getAllOrders = (params = {}) => {
  return http.get(apis.getAllOrders, params)
}

export const deleteOrderById = (params = {}) => {
  return http.post(apis.deleteOrderById, params)
}

export const addOrder = (params = {}) => {
  return http.post(apis.addOrder, params)
}

export const singleOrder = (params = {}) => {
  return http.post(apis.singleOrder, params)
}
export const updateOrder = (params = {}) => {
  return http.post(apis.updateOrder, params)
}
