<template>
  <div class="admin">
    <el-container class="container-box">
      <el-header class="header">
        <h1>后台管理系统</h1>
        <el-button  class="logout">退出</el-button>
      </el-header>
      <el-container class="body">
        <el-aside width="200px" class="aside">
          <el-menu
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-user"></i>
                <router-link :to="{path:'/user'}" tag="span">用户管理</router-link>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <router-link slot="title" :to="{path:'/root'}" tag="span">权限管理</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-goods"></i>
              <router-link slot="title" :to="{path:'/product'}" tag="span">商品管理</router-link>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-document"></i>
              <router-link slot="title" :to="{path:'/order'}" tag="span">订单管理</router-link>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-setting"></i>
              <router-link slot="title" :to="{path:'/setting'}" tag="span">系统设置</router-link>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less" scoped>
.admin {
  height: 100%;
  .container-box {
    height: 100%;
    .header {
      background-color: #999;
      color: white;
      line-height: 60px;
      position: relative;
      .logout {
        position: absolute;
        top: 10px;
        right: 30px;
      }
    }
    .body {
      .aside {
        background-color: #eee;
        .el-submenu .el-menu-item {
          min-width: 199px;
        }
      }
      .main {
      }
    }
  }
}

</style>> 