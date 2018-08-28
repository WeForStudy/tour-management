

// 集中管理路由，所有的接口地址：
// 	1.整个应用用到了哪些接口一目了然
// 	2.接口地址可能变化，方便管理

const prefix = ''
export default(config => {
	return Object.keys(config).reduce((copy, name) => {
	  copy[name] = `${prefix}${config[name]}`
	  return copy
	}, {})
})({

  // admin block
  'onLogin': '/api/admin/login',
  'getAllAdmins': '/api/admin/list',
  'deleteAdminById': '/api/admin/del',
  'addAdmin': '/api/admin/add',
  'singleAdmin': '/api/admin/single',
  'updateAdmin': '/api/admin/update',

  // user block
  'getAllUsers': '/api/user/list',
  'deleteUserById': '/api/user/del',
  'addUser': '/api/user/add',
  'singleUser': '/api/user/single',
  'updateUser': '/api/user/update',

   // guider block
   'getAllGuiders': '/api/guider/list',
   'deleteGuiderById': '/api/guider/del',
   'addGuider': '/api/guider/add',
   'singleGuider': '/api/guider/single',
   'updateGuider': '/api/guider/update',

   // order block
   'getAllOrders': '/api/order/list',
   'deleteOrderById': '/api/order/del',
   'addOrder': '/api/order/add',
   'singleOrder': '/api/order/single',
   'updateOrder': '/api/order/update', 


  // rsa block
  'getPublicKey': '/api/rsa/getKey',
  'RSALogin': '/api/rsa/login',
})
