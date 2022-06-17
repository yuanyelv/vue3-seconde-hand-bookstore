<!--
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-16 17:03:02
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-16 19:29:41
 * @FilePath: \pcVue1\src\layout\AppHeader\BreadcrumbsIndex.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-16 17:03:02
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-16 19:05:17
 * @FilePath: \pcVue1\src\layout\AppHeader\Breadcrumbs.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="item in routes"
      :key="item.path"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang='ts' setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

console.log(router.currentRoute.value.matched)

const routes = computed(() => {
  return router.currentRoute.value.matched.filter(item => item.meta.title)
})
</script>
<style scoped lang='scss'>
</style>
