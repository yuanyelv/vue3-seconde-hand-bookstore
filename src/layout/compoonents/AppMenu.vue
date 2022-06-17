<!--
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-16 13:05:04
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-16 17:45:29
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
        <el-icon><Tickets /></el-icon>
        书籍分类管理
      </el-menu-item>

      <el-menu-item index="abstractBook">
        <el-icon><Edit /></el-icon>
        抽象书管理
      </el-menu-item>
      <el-menu-item index="physicalBook">
        <el-icon><Management /></el-icon>
        实体书管理
      </el-menu-item>
      <el-menu-item index="orderManage">
        <el-icon><Tickets /></el-icon>
        订单管理
      </el-menu-item>
    </el-sub-menu>

    <el-menu-item
      index="booksPublished"
    >
      <el-icon><CirclePlus /></el-icon>
      <span>书籍发布</span>
    </el-menu-item>
    <el-menu-item index="bookRecycle">
      <el-icon><Refresh /></el-icon>
      <span>书籍回收</span>
    </el-menu-item>
    <el-menu-item index="serviceManage">
      <el-icon><Avatar /></el-icon>
      <span>客服中心</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang='ts' setup>

</script>
<style scoped lang='scss'>
.el-menu {
    border-right: none;
}

.el-menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
