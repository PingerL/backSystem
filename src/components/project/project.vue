<template>
<!-- 项目根路径 -->
  <div class="project">
    <div class="login-box">
      <el-form ref="form" :model="info" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model.trim="info.username" placeholder="请输入用户名" >
            <i slot="prefix" class="el-input__icon iconfont icon-user"></i>
          </el-input>
         </el-form-item>
        <el-form-item prop="password">
          <el-input v-model.trim="info.password" placeholder="请输入密码"  show-password>
            <i slot="prefix" class="el-input__icon iconfont icon-mima"></i>
          </el-input>
         </el-form-item>
        <div class="btn">
          <el-button type="primary" @click="loginHandle">登陆</el-button>
          <el-button type="info" >重置</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      info:{
        username:'admin',
        password:'admin'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods:{
    loginHandle(){
      if(!this.info.username || !this.info.password) {
        this.$message('用户名或者密码不能为空')
        return
      }
      fetch('./username.json').then(res=>res.json()).then(res=>{
        let name =[],
            password = [],
            token=[]
        let data = res.data
        data.forEach((item) => {
          name.push(item.username)
          password.push(item.password)
          token.push(item.token)
        })
        let index = name.findIndex(name => {
          return name === this.info.username
        }) 
        if(index === -1) return this.$message('用户名输入错误')
        if (this.info.password !== password[index]) return this.$message('密码输入错误')
        sessionStorage.setItem('TOKEN',token[index])
        this.$router.push('/user')
         this.$message({
          message: '登陆成功',
          type: 'success'
        });
      })
    }
  }
}
</script>

<style lang="less" scoped> 
  .project {
    position: relative;
    height: 100%;
    background-color: #666;
    .login-box {
      width: 500px;
      padding: 50px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: #fff;
      .btn {
        display: flex;
        justify-content: flex-end;
        button {
          margin-left: 20px;
        }
      }
  }
  }
</style>