<template>
  <div class="hello">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  created() {
    this.init1();
  },
  methods:{
    init1 : function () {
      this.$router.push({path:'/login'})
    }
  }
}
</script>

