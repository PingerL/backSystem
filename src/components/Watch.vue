<template>
  <div class="watch">
    <h3> 这是 watch 侦听器的例子 </h3>
    <div>
      <label>用户名：<input type="text" v-model.lazy="userName"> <span :class="{ used: isUsed }">{{tip}}</span></label>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tip:'',
      userName:'',
      isUsed:false,
      nameList:[]
    }
  },
  created(){
    // this.getData()
  },
  methods:{
   getData(){
     // 这里的相对路径是相对首页index.html而言的
      fetch('./username.json').then(res=>res.json()).then(res=>{
        res.data.forEach(item=>{
          this.nameList.push(item.username)
        })
      })
    },
    async checkNameHandle(name){
      let res = await fetch('./username.json')
      let res1 = await res.json()
      res1.data.forEach(item=>{
          this.nameList.push(item.username)
        })
      // 一般来说，这里都是去请求后端的接口，为异步的，我们使用 setTimeout 来模拟
      /*
      setTimeout(()=>{
        if(!name.trim()) {
          this.tip = "用户名不能为空"
          this.isUsed = true
          return
        }
        if(name === "admin"){
          this.tip = "用户名已注册，请更换其它"
          this.isUsed = true
        } else {
          this.tip = "该用户名可以使用"
          this.isUsed = false
        }
      },0)
      */
     if(!name.trim()){
       this.tip = "用户名不能为空"
       this.isUsed = true
       return
     }
     if(this.nameList.includes(name)){
       this.tip = "用户名已注册，请重新输入"
       this.isUsed = true
     } else {
       this.tip = "该用户名可以使用"
       this.isUsed = false
     }

  },
  },
  watch:{
    userName: function(val){
      return this.checkNameHandle(val)
    }
  }
}

</script>

<style lang="less" scoped>
  .watch {
    border: 1px dotted black;
    padding: 10px;
    input {
      outline: none;
    }
    span {
      font-size: 10px;
      color: green;
      &.used{
        color: red;
      }
    }
  }
</style>
