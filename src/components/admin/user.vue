<template>
  <div class="user">
    <h3>用户管理区域</h3>
    <ul>
      <li class="user-title">
        <span>编号</span>
        <span>姓名</span>
        <span>年龄</span>
        <a>操作</a>
      </li>
      <li v-for="item in list" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
        <span>{{ item.age }}</span>
        <a href="javascript:0" @click="goDetail(item.id)">{{item.detail}}</a>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  data(){
    return {
      id:1,
      list:[
        {id:1,name:"张三",age:22,detail:"详情"},
        {id:2,name:"李四",age:21,detail:"详情"},
        {id:3,name:"王五",age:19,detail:"详情"},
        {id:4,name:"小白",age:34,detail:"详情"},
      ]
    }
  },
  methods: {
    goDetail(id){
      this.$router.push(`/user/detail/${id}`)
    }
  }
}
</script>

<style lang="less" scoped>
  .user {
    padding: 10px;
    ul {
      .user-title {
        background-color: #ccc;
      }
      li {
        display: flex;
        padding: 10px;
        span,a {
          flex: 1;
        }
      }

    }
  }
</style>