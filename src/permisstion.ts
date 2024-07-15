//路由鉴权:鉴权,项目当中路由能不能被的权限的设置(某一个路由什么条件下可以访问、什么条件下不可以访问)
import router from '@/router'
//引入进度条样式
// pnpm i progress
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import setting from '@/setting'
import useUserStore from './store/modules/user'
import pinia from './store'
import * as path from 'path'
let userStore = useUserStore(pinia)

//全局守卫:项目当中任意路由切换都会触发的钩子
//全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
  document.title = `${setting.title} - ${to.meta.title}`
  nprogress.start()
  let token = userStore.token
  let username = userStore.username
  console.log('router-beforeEach 全局前置路由', token)
  if (token) {
    if (to.path == '/login') {
      next({ path: '/' })
    } else {
      if (username) {
        next()
      } else {
        try {
          await userStore.userInfo()
          next()
        } catch (error) {
          await userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})

//全局后置守卫
router.beforeEach((to: any, from: any) => {
  nprogress.done()
})
