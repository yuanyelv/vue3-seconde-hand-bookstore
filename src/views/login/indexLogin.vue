<!--
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-15 20:28:24
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-17 11:38:49
 * @FilePath: \pcVue1\src\views\login\indexLogin.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :rules="rules"
      ref="form"
      :model="user"
      @submit.prevent="handleSubmit"
    >
      <el-form-item prop="account">
        <el-input
          v-model="user.account"
          placeholder="请输入用户名"
        />
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="user.pwd"
          type="password"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          :loading="loading"
          native-type="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'

const form = ref<InstanceType<typeof ElForm> | null>(null) // 初始是null
const user = reactive({
  account: 'admin',
  pwd: '123456'
})
const loading = ref(false)
const rules = ref({
  accout: [
    { required: true, message: '请输入账号', trigger: 'change' }
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ]
})

onMounted(() => {
  console.log(form.value)
})

const handleSubmit = async () => {
  // 表单验证
  const value = await form.value?.validate()
  if (!value) {
    return false
  }
  // 验证通过，展示loading
  loading.value = true
  // 请求提交
  // 处理响应
}

</script>
<style scoped lang='scss'>
.login-container {
    min-width: 400px;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-form {
    padding:30px;
    border-radius: 6px;
    background: #fff;
    min-width: 350px;
}
</style>
