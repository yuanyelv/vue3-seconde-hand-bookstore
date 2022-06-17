/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-15 22:41:03
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-15 22:41:24
 * @FilePath: \pcVue1\src\utils\request.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

const request = axios.create({
  baseURL: 'https://'
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})
export default request
