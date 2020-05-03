import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../components/admin/user.vue'
import Root from '../components/admin/root.vue'
import Detail from '../components/admin/detail.vue'
import Admin from '../components/admin/admin.vue'
import Product from '../components/admin/product.vue'
import Order from '../components/admin/order.vue'
import Setting from '../components/admin/setting.vue'
import Project from '../components/project/project'


Vue.use(VueRouter)
const VueRouterPush = VueRouter.prototype.push 
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

  const routes = [
    {path:'/',component:Project},
    {path:'/admin',component:Admin,children:[
      {path:'/user',component:User},
      {path:'/user/detail/:id',component:Detail,props:true},
      {path:'/root',component:Root},
      {path:'/product',component:Product},
      {path:'/order',component:Order},
      {path:'/setting',component:Setting}
    ]}
    
 
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
