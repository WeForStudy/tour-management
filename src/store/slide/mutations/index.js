export default {
  collapse (state) {
    const flag = state.isCollapse
    state.isCollapse = !flag
  },
  // push (state) {
  //   state.list.push(Math.random())
  // },
  // remove(state, { index }){
  //   const arr = state.list
  //   state.list.splice(index, 1)
  // },
  // pop(state) {
  //   state.list.pop()
  // }
}