<template>
  <div>
    <p>这是登录页面</p>
    <button @click="loginApp" >点击登录</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods:{
    loginApp : function () {
      this.$router.push({path:'/main'})
    }
  }
}
</script>

<style scoped>

</style>
