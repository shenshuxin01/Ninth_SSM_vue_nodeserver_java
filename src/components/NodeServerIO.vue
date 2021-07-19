<template>
  <div>
    <h1>读取文件：通过node服务器读取文件</h1>
    <button @click="getNodeRead">点击获取node-读文件</button><br>
      {{p_node_read}}    <br>
    <hr>

    <h1>写入文件到：node服务端写文件</h1>

    <br>
    写入文件的内容：<input v-model="p_node_write"><br><br>
    <button @click="setNodeWrite">点击开始写入文件到node</button><br>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NodeServerIO",
  data(){
    return{
      p_node_read:'',
      p_node_write:''
    }
  },
  methods:{
    getNodeRead:function () {
      let url = '/read1/test1.file';
      axios.post(url).then(response => {
        this.p_node_read = response.data;
      })
    },
    setNodeWrite:function () {
      axios.post('/write1/test1.file',this.p_node_write).then(
          response =>{
            let status = response.status;
            if (status!=200){
              console.error('/write1/test1.file错误')
              console.error('/write1/test1.file错误')
              console.error('/write1/test1.file错误')
            }
          }
      )
    }
  }
}
</script>

<style scoped>

</style>
