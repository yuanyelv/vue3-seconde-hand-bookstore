<!--
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-15 20:28:24
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-18 19:25:53
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
      <!-- <div class="login-form__header">
        <img
          class="login-logo"
          src="../../assets/logo.png"
          alt="vue3"
        >
      </div> -->
      <div class="loginForm">
        <b>登录</b>
      </div>
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
      <el-form-item prop="imgcode">
        <div class="imgcode-wrap">
          <el-input
            v-model="user.imgcode"
            placeholder="请输入验证码"
          />
          <img
            class="imgcode"
            alt="验证码"
            :src="CaptchaSrc"
            @click="loadCaptcha"
          >
        </div>
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
import { getCaptcha, login } from '../../api/common'
import { useRouter } from 'vue-router'

const router = useRouter()
const CaptchaSrc = ref('')
const form = ref<InstanceType<typeof ElForm> | null>(null) // 初始是null
const user = reactive({
  account: 'admin',
  pwd: '123456',
  imgcode: ''
})
const loading = ref(false)
const rules = ref({
  accout: [
    { required: true, message: '请输入账号', trigger: 'change' }
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ],
  imgcode: [
    { required: true, message: '请输入验证码', trigger: 'change' }
  ]
})

onMounted(() => {
  loadCaptcha()
})

const loadCaptcha = async () => {
  const data = await getCaptcha()
  CaptchaSrc.value = URL.createObjectURL(data)
}

const handleSubmit = async () => {
  // 表单验证
  const value = await form.value?.validate()
  if (!value) {
    return false
  }
  // 验证通过，展示loading
  loading.value = true
  // 请求提交
  const data = login(user)
  console.log(data)
  router.replace({
    name: 'home'
  })
  // 处理响应
}

</script>
<style scoped lang='scss'>
// .login-container {
//     min-width: 400px;
//     height:100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: #333;
// }
.login-container {
  height: 100vh;
  background-image: linear-gradient(to bottom right,#FC466B,#3F5EFB);
  overflow: hidden;
   min-width: 300px;
   display: flex;
   justify-content: center;
   align-items: center;
}

.login-form {
    padding:30px;
    border-radius: 6px;
    background: #fff;
    min-width: 350px;
    height: 300;
    margin: 200px auto;
    widows: 350;
}
// .login-form__header {
//   width: 400px;
//   display: table-cell; /*主要是这个属性*/
//   vertical-align: middle;
//   text-align: center;
// }
.loginForm{
  margin: 2px 0;
  text-align: center;
  font-size: 24px;
}
</style>
