/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-16 15:11:33
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-16 18:43:34
 * @FilePath: \pcVue1\src\router\modules\Control.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-16 15:11:33
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-16 15:13:46
 * @FilePath: \pcVue1\src\router\modules\Control.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {

  path: '',
  name: '',
  component: RouterView,
  meta: {
    title: '管理模块'
  },
  children: [
    {
      path: 'abstractBook',
      name: 'abstractBook',
      component: () => import('../../views/Control/abstractBook/abstractBook.vue'),
      meta: {
        title: '抽象书管理'
      }
    }, {
      path: 'classificationBooks',
      name: 'classificationBooks',
      component: () => import('../../views/Control/classificationBooks/classificationBooks.vue'),
      meta: {
        title: '书籍分类管理'
      }
    }, {
      path: 'orderManage',
      name: 'orderManage',
      component: () => import('../../views/Control/orderManage/orderManage.vue'),
      meta: {
        title: '订单管理'
      }
    }, {
      path: 'physicalBook',
      name: 'physicalBook',
      component: () => import('../../views/Control/physicalBook/physicalBook.vue'),
      meta: {
        title: '实体书管理'
      }
    }, {
      path: 'userManage',
      name: 'userManage',
      component: () => import('../../views/Control/userManage/userManage.vue'),
      meta: {
        title: '用户管理'
      }
    }
  ]
}

export default routes
