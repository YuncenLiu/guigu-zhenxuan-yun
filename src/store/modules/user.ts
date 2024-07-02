//创建用户相关的小仓库
import {defineStore} from 'pinia'
import {loginFormData} from '@/api/user/type'
import {reqLogin} from "@/api/user";
import {GET_TOKEN, SET_TOKEN} from "@/utils/token";

//创建用户小仓库
let useUserStore = defineStore('User', {
    //小仓库存储数据地方
    state: () => {
        return{
            token: GET_TOKEN,//用户唯一标识token
        }
    },
    //异步|逻辑的地方
    actions: {
        async userLogin(data: loginFormData) {
            let result = await reqLogin(data);
            //登录请求:成功200->token
            //登录请求:失败201->登录失败错误的信息
            if (result.code == 200) {
                //pinia仓库存储一下token
                //由于pinia|vuex存储数据其实利用js对象
                this.token = (result.data.token as string);
                //本地存储持久化存储一份
                SET_TOKEN((result.data as string));
                //能保证当前async函数返回一个成功的promise
                console.log('token',this.token);
                return 'ok';
            }else{
                return Promise.reject(new Error(result.data.message))
            }
        }
    },
    // 计算属性
    getters: {},
})
//对外暴露获取小仓库方法
export default useUserStore
