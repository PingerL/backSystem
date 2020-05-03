<template>
  <div class="admin">
    <header>
      <h1>后台管理系统</h1>
    </header>
    <section class="body-wrapper">
      <div class="sidebar">
        <ul>
          <li><router-link :to="{path:'/user'}" >用户管理</router-link></li>
          <li><router-link :to="{path:'/root'}" >权限管理</router-link></li>
          <li><router-link :to="{path:'/product'}" >商品管理</router-link></li>
          <li><router-link :to="{path:'/order'}" >订单管理</router-link></li>
          <li><router-link :to="{path:'/setting'}" >系统设置</router-link></li>
        </ul>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </section>
    <footer>
      版权信息
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
 .admin {
  //  background-color: #666;
   header {
     background-color: #666;
     color: white;
     padding: 10px;
     height: 66px;
   }
    .body-wrapper {
      display: flex;
      height: calc(100vh - 116px);
      .sidebar {
        width: 200px;
        background-color: #999;
        li {
          padding: 20px;
          background-color: #ccc;
          border-bottom: 1px solid white;
        }
      }
      .main {
        flex: 1;
      }
  }
  footer{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
    line-height: 50px;
    background-color: #666;
    width: 100%;
    color: white;
  }
 }
</style>> 