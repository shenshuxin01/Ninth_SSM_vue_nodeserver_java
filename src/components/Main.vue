<template>
<div>
  <router-link to="/nodeIO">点我进入node——IO</router-link>
  <h1>开始向数据库插入数据</h1>
  输入数据： <input v-model="p_data"><br/>
  <button @click="ddlDB">上传数据</button>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Main",
  data(){
    return{
      p_data:''
    }
  },
  methods:{
    ddlDB:function (){
      axios.post('/Ninth_SSM_Demo_war/ninth/setName.do',
                 {'p_name':this.p_data}
      ).then(function (response) {
        let status = response.status;
        if (status!=200){
          console.error('Main.vue报错了')
          console.error('Main.vue报错了')
          console.error('Main.vue报错了')
        }else {
          alert('成功')
          console.log('Main.vue成功')
          console.log('Main.vue成功')
          console.log('Main.vue成功')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
