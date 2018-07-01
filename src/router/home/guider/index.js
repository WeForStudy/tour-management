import List from 'pages/guider/list'
import Add from 'pages/guider/add'
import Update from 'pages/guider/update'

export default [
  {
    path: '/glist',
    name: 'glist',
    component: List,
  },
  {
    path: '/addg',
    name: 'addg',
    component: Add,
  },
  {
    path: '/updateg',
    name: 'updateg',
    component: Update,
  },
]
