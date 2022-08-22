/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-15 22:41:03
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-20 01:33:55
 * @FilePath: \pcVue1\src\utils\request.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: 'http://localhost:8080/'
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
  if (response.data.status !== 200) {
    ElMessage.error(response.data.msg || '请求失败')
  }
  return response
}, function (error) {
  return Promise.reject(error)
})
// export default <T = any>(config: AxiosRequestConfig) => {
//   return request(config).then(res => {
//     return (res.data.data || res.data || res) as T
//   })
// }
export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return res.data as T
  })
}
