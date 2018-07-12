import List from 'pages/order/list'
import Add from 'pages/order/add'
import Update from 'pages/order/update'

export default [
  {
    path: '/olist',
    name: 'olist',
    component: List,
  },
  {
    path: '/addo',
    name: 'addo',
    component: Add,
  },
  {
    path: '/updateo',
    name: 'updateo',
    component: Update,
  },
]
