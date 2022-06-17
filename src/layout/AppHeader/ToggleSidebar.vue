<!--
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-16 17:07:18
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-16 18:30:58
 * @FilePath: \pcVue1\src\layout\AppHeader\ToggleSidebar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-icon @click="$store.commit('setIsCollapse',!$store.state.isCollapse)">
    <Fold />
  </el-icon>
</template>

<script lang='ts' setup>

</script>
<style scoped lang='scss'>
</style>
