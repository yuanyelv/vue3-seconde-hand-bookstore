<!--
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-17 14:06:35
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-18 11:31:18
 * @FilePath: \pcVue1\src\layout\AppHeader\FullScreen.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-icon @click="toggleFullScreen">
    <FullScreen />
  </el-icon>
</template>

<script lang='ts' setup>
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}

</script>
<style scoped lang='scss'>

</style>
