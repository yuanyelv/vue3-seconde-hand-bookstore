<!--
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-16 13:05:04
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-19 13:20:40
 * @FilePath: \pcVue1\src\layout\compoonents\AppMenu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    :collapse="$store.state.isCollapse"
    router
  >
    <div class="header-text">
      <img
        src="../../assets/logo.png"
        alt=" "
        style="width: 20px; position: relative; top: 5px; margin: 5px;"
      >
      <b
        style="color: white;"
        v-show="$store.state.logoTextShow"
      >尚禾农业科技</b>
    </div>
    <el-menu-item
      index="booksPublished"
    >
      <el-icon><HomeFilled /></el-icon>
      <span>信息中心</span>
    </el-menu-item>
    <el-sub-menu index="Control">
      <template #title>
        <el-icon><Menu /></el-icon>
        <span>管理模块</span>
      </template>

      <el-menu-item index="userManage">
        <el-icon><User /></el-icon>
        用户管理
      </el-menu-item>
      <el-menu-item index="classificationBooks">
        <el-icon><Edit /></el-icon>
        权限管理
      </el-menu-item>

      <el-menu-item index="abstractBook">
        <el-icon><Tickets /></el-icon>
        布局管理
      </el-menu-item>
      <el-menu-item index="physicalBook">
        <el-icon><Loading /></el-icon>
        移动卡管理
      </el-menu-item>
      <el-menu-item index="orderManage">
        <el-icon><Tickets /></el-icon>
        订单管理
      </el-menu-item>
    </el-sub-menu>

    <el-menu-item index="bookRecycle">
      <el-icon><ShoppingBag /></el-icon>
      <span>产品中心</span>
    </el-menu-item>
    <el-menu-item index="serviceManage">
      <el-icon><Avatar /></el-icon>
      <span>客服中心</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang='ts' setup>
// import { store } from '@/store'
// import { onMounted } from 'vue'

// onMounted(() => {
//   if (store.state.isCollapse === false) {
//     logoTextShow = true
//   } else {
//     logoTextShow = false
//   }
// })

</script>
<style scoped lang='scss'>
.el-menu {
    border-right: none;
}

.el-menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.header-text{
  height: 60px;
  line-height: 60px;
  text-align: center;
}
</style>
