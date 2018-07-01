import List from 'pages/user/list'
import Add from 'pages/user/add'
import Update from 'pages/user/update'

export default [
  {
    path: '/ulist',
    name: 'ulist',
    component: List,
  },
  {
    path: '/addu',
    name: 'addu',
    component: Add,
  },
  {
    path: '/updateu',
    name: 'updateu',
    component: Update,
  },
]
