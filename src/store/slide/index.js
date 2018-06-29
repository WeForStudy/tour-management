import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
export default {
  state,
  // 暴露给外部显示的一些状态
  getters,
  // 暴露给外部使用的方法
  actions,
  // 真正对数据进行操作的地方
  mutations,
}

// import shop from '../../api/shop'

// // initial state
// const state = {
//   all: []
// }

// // getters
// const getters = {
//   allProducts: state => state.all
// }

// // actions
// const actions = {
//   getAllProducts ({ commit }) {
//     shop.getProducts(products => {
//       commit('setProducts', products)
//     })
//   }
// }

// // mutations
// const mutations = {
//   setProducts (state, products) {
//     state.all = products
//   },

//   decrementProductInventory (state, { id }) {
//     const product = state.all.find(product => product.id === id)
//     product.inventory--
//   }
// }

