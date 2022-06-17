/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-16 16:15:55
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-16 19:21:01
 * @FilePath: \pcVue1\src\router\modules\serviceManage.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {

  path: '/serviceManage',
  name: '',
  component: () => import('../../views/serviceManage/serviceManage.vue'),
  meta: {
    title: '客服中心'
  }
}

export default routes
