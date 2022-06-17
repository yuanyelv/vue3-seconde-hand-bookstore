<!--
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-16 17:01:10
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-16 20:01:06
 * @FilePath: \pcVue1\src\layout\AppHeader\AppHeader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-space size="large">
    <ToggleSidebar />
    <BreadcrumbsIndexVue />
  </el-space>
  <el-space size="large">
    <FullScreenVue />
  </el-space>
</template>

<script lang='ts' setup>
import ToggleSidebar from './ToggleSidebar.vue'
import BreadcrumbsIndexVue from './BreadcrumbsIndex.vue'
import FullScreenVue from './FullScreen.vue'

</script>
<style scoped lang='scss'>

* {
    font-size: 25px;
    cursor: pointer;
}

</style>
