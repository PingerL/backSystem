#### 使用技术
- elment-ui, vueRouter, fetch

#### 第一天提交
- 完成基本布局
- 实现登陆页面，登陆跳转
#### 接下来
- 使用 token 来控制路由跳转

#### 问题解决
1. 一个用户名多个密码可以登陆的 bug
- 自己设计错误，不应该将用户名和密码分成两个数组，这样用户名和密码的校验就分开了，导致 bug
- 改正，使用一个 index 将两者结合起来，当找到用户名时，将该用户名所对应的索引一起保存，再通过索引来查找密码
2. 路由导航守卫报错 `RangeError: Maximum call stack size exceeded`
```
router.beforeEach((to,from,next) => {
  if(to.path === './') return next()
  const tokenStr = sessionStorage.getItem('TOKEN')
  if(!tokenStr) return next('./')
  next()
})
```
- 原因: 我路径写错了,浏览器进入了死循环,将 `'/'` 写成了 `'./'`
```
router.beforeEach((to,from,next) => {
  if(to.path === '/') return next()
  const tokenStr = sessionStorage.getItem('TOKEN')
  if(!tokenStr) return next('/')
  next()
})
```
- 总结：一般vue-router报错说明是路由配置出问题了，或者跳转调用路由的时候出现死循环，RangeError: Maximum call stack size exceeded是死循环出现的语句
3. 代码重构
重构前
```
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
```
重构后
```
fetch('./username.json').then(res=>res.json()).then(res=>{
  let data = res.data 
  let index = data.findIndex((item)=>{
    return item.name === this.info.name
  })
  if(index === -1) return this.$message('用户名输入错误')
  if (this.info.password !== data[index].password) return this.$message('密码输入错误')
  sessionStorage.setItem('TOKEN',data[index].token)
  this.$router.push('/user')
    this.$message({
    message: '登陆成功',
    type: 'success'
  })
})
```
4. 左侧页面二级菜单下拉后有 1px 的多出
- 原因：element-ui 中一级菜单的 `min-width: 199px;`,而二级菜单为`min-width: 200px;`
- 修改：`.el-submenu .el-menu-item {min-width: 199px;}`
5. 左侧菜单栏 icon 与文字不对齐
- 原因：App.vue中使用了 Avenir 图标
```
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
```
- 解决：将 Avenir 去掉，就对齐了
- 🌟总结：虽然解决了，但是不知道为什么？

