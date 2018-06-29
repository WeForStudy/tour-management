import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:1200'
// 允许跨域情况下携带cookie
axios.defaults.withCredentials = true
// 设置超时时间
axios.defaults.timeout = 100000
// 标识这是一个 ajax 请求
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// axios拦截器
axios.interceptors.response.use(response => {
	if (response.data.retCode === 200 || response.data.retCode === '200') {
		return response.data.retValue || response.data
	}
	else {
    throw new Error(response.data.msg || '服务异常')
	}
})

export default axios
