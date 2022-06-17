<!--
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-15 20:28:36
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-16 15:00:26
 * @FilePath: \pcVue1\src\views\home\IndexHome.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div><p>首页</P></div>
</template>

<script lang='ts'>
import { reactive, toRefs, onBeforeMount, onMounted } from 'vue'
export default {
  setup () {
    console.log('1-开始创建组件-setup')
    const data = reactive({})
    onBeforeMount(() => {
      console.log('2.组件挂载页面之前执行----onBeforeMount')
    })
    onMounted(() => {
      console.log('3.-组件挂载到页面之后执行-------onMounted')
    })
    return {
      ...toRefs(data)
    }
  }
}

</script>
<style scoped lang='scss'>
</style>
