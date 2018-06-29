import HomePage from 'pages/home'
import DashBoardRoutes from './dashboard'
import UserRoutes from './user'
import GuiderRoutes from './guide'

export default [
  { 
    path: '/home', 
    component: HomePage,
    name: 'home',
    children: [
      ...UserRoutes,
      ...DashBoardRoutes,
      ...GuiderRoutes,
    ],
  },
]
