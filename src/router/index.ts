// 通过 vue-router 插件实现模版路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoute } from '@/router/routes'

// 创建路由器
const router = createRouter({
  // 路由模式 hash
  history: createWebHashHistory(),
  // 引入常量路由
  routes: constantRoute,
  // 滚动行为, 路由配置完后，还需要配置到 main.ts 中注册使用
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
