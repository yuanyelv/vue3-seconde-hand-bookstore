/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-15 20:29:30
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-16 19:46:35
 * @FilePath: \pcVue1\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '../layout/AppLayout.vue'
import Control from './modules/Control'
import booksPublished from './modules/booksPublished'
import booksRecycle from './modules/booksRecycle'
import serviceManage from './modules/serviceManage'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('../views/home/indexHome.vue')
      },
      Control,
      booksPublished,
      booksRecycle,
      serviceManage
    ]

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/indexLogin.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 页面进度条
router.beforeEach(() => {
  nprogress.start()
})

router.afterEach(() => {
  nprogress.done()
})

export default router
