//创建用户相关的小仓库
import { defineStore } from 'pinia'
import { loginFormData, loginResponseData } from '@/api/user/type'
import { reqLogin, reqUserInfo } from '@/api/user'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'
import { UserState } from '@/store/modules/types/type'

import { constantRoute } from '@/router/routes'

//创建用户小仓库
let useUserStore = defineStore('User', {
  //小仓库存储数据地方
  state: (): UserState => {
    return {
      //用户唯一标识token
      token: GET_TOKEN,
      // 仓库存储菜单路由
      menuRoutes: constantRoute,
    }
  },
  //异步|逻辑的地方
  actions: {
    // 用户登录
    async userLogin(data: loginFormData) {
      let result: loginResponseData = await reqLogin(data)
      //登录请求:成功200->token
      //登录请求:失败201->登录失败错误的信息
      if (result.code == 200) {
        //pinia仓库存储一下token
        //由于pinia|vuex存储数据其实利用js对象
        this.token = result.data.token as string
        //本地存储持久化存储一份
        SET_TOKEN(result.data as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
    // 获取用户信息
    async userInfo() {
      // 获取用户信息进行存储
      // let result = await reqUserInfo()
      // console.log(result)
    },
  },
  // 计算属性
  getters: {},
})
//对外暴露获取小仓库方法
export default useUserStore
