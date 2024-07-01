// 进行 axios 二次封装，请求与响应拦截
import axios from 'axios'
import { ElMessage } from 'element-plus'

// 1、利用axios 对象的 create 方法，创建 axios 实例，有利于配置路径、超时时间
let request = axios.create({
  // .env.xxx  配置的基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 响应超时时间
  timeout: 5000,
})

// 2、request 实例添加请求与响应拦截器
request.interceptors.request.use((config) => {
  // config 配置对象， headers 属性请求头，经常给服务器端携带公共参数
  // 返回配置文件
  return config
})

// 3、响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    // 失败回调，处理 http 网络错误
    let message = ''
    let status = error.response.status
    switch (status) {
      case 401:
        message = 'token 过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器嗝屁了'
        break
      default:
        message = '网络出问题了'
    }
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(error)
  },
)

// 对外暴露
export default request
