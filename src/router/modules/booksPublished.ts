import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {

  path: '/booksPublished',
  name: '',
  component: () => import('../../views/booksPublished/booksPublished.vue'),
  meta: {
    title: '书籍发布'
  }
}

export default routes
