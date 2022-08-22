<!--
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-15 22:54:25
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-19 14:33:52
 * @FilePath: \pcVue1\src\layout\AppLayout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <AppMenuVue />
      </el-aside>
      <el-container>
        <el-header><AppHeaderVue /></el-header>
        <el-main style="padding:1px 20px 20px 20px ">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import AppMenuVue from './compoonents/AppMenu.vue'
import AppHeaderVue from './AppHeader/AppHeader.vue'

</script>
<style scoped lang='scss'>
.el-header{
    background-color: #c6ced6;
    color: #333;
    font-weight:bolder;
}

.el-aside{
    background-color: #304156;
    width: auto;
}

.el-container {
    height: 100vh;
}
</style>
