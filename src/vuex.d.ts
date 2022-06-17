/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-15 22:30:20
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-16 17:20:07
 * @FilePath: \pcVue1\src\vuex.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* eslint-disable no-unused-vars */
import { Store } from 'vuex'
import { ComponentCustomProperties } from 'vue'
import { State } from './store/index'

declare module '@vue/runtime-core' {

    // 为store提供类型声明
    interface ComponentCustomProperties {
         $store: Store<State>
    }
}
