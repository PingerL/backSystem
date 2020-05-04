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

