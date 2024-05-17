<script lang="ts" setup>

const form = reactive({
  username: '',
  password: '',
})
const loading = ref(false)

const {login} = useAuth();
const handleLogin = async () => {
  try {
    loading.value = true
    await login({
      username: form.username,
      password: form.password,
    })
  } catch (e) {
  } finally {
    loading.value = false
  }
}

</script>

<template>
  <div>
    <div class="pt-5 space-y-6">
      <UIInput v-model="form.username" label="用户名" placeholder="请输入用户名" type="text"/>
      <UIInput v-model="form.password" label="密码" placeholder="请输入密码" type="password"/>
      <div>
        <button @click="handleLogin">登录</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>