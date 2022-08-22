import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

export interface State {
    count: number
    isCollapse: boolean
    logoTextShow: boolean
    pageNum: number
    pageSize: number
    username: string
}

//  为<script>提供类型声明
export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state () {
    return {
      count: 1,
      isCollapse: false,
      logoTextShow: true,
      pageNum: 1,
      pageSize: 10,
      username: ''
    }
  },
  mutations: {
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    }
  }
})

// 定义自己的useStore组合函数
export function useStore () {
  return baseUseStore(key)
}
