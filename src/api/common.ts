/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-18 13:32:52
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-20 09:30:12
 * @FilePath: \pcVue1\src\api\common.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-18 13:32:52
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-18 15:21:21
 * @FilePath: \pcVue1\src\api\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { store } from '@/store'
import request from '@/utils/request'
import { IUserManage, ILoginResponse } from './types/common'

export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/captcha_pro',
    params: {
      stamp: Date.now()
    },
    responseType: 'blob' // 请求获取图片数据
  })
}

export const login = (data: {
  account: string
  pwd: string
  imgcode: string
}) => {
  return request<ILoginResponse>({
    method: 'POST',
    url: '/login',
    data
  })
}

export const getUserManage = (username: string, id: string, phone: string) => {
  return request<IUserManage>({
    method: 'GET',
    url: '/user/page?pageNum=' + store.state.pageNum + '&pageSize=' + store.state.pageSize + '&username=' + username + '&phone=' + phone + '&id=' + id
  })
}
