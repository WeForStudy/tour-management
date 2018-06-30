import List from 'pages/admin/list'
import Add from 'pages/admin/add'
import Update from 'pages/admin/update'

export default [
  {
    path: '/alist',
    name: 'alist',
    component: List,
  },
  {
    path: '/adda',
    name: 'adda',
    component: Add,
  },
  {
    path: '/updatea',
    name: 'updatea',
    component: Update,
  },
]
