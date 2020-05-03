<template>
  <div class="detail">
    详情页面 用户ID为 {{id}}
    <button @click="goBack">返回</button>
  </div>
</template>

<script>
export default {
 props:['id'],
 methods:{
   goBack(){
     this.$router.go(-1)
   }
 }
}
</script>

<style>

</style>