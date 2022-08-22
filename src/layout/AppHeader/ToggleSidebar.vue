<!--
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-17 14:06:35
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-19 13:21:17
 * @FilePath: \pcVue1\src\layout\AppHeader\ToggleSidebar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-16 17:07:18
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-19 13:14:29
 * @FilePath: \pcVue1\src\layout\AppHeader\ToggleSidebar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-icon @click="asideFlex">
    <Fold />
  </el-icon>
</template>

<script lang='ts' setup>
import { useStore } from '../../store'
const store = useStore()
const asideFlex = () => {
  store.commit('setIsCollapse', !store.state.isCollapse)
  if (store.state.isCollapse === true) {
    store.state.logoTextShow = false
  } else {
    store.state.logoTextShow = true
  }
}

</script>
<style scoped lang='scss'>
</style>
