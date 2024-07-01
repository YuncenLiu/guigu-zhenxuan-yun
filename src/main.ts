import { createApp } from 'vue'
import './style.css'

// 引入 element-plus 插件样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置 element-plus 国际化
// 解决代码飘红问题，
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import App from '@/App.vue'



// 获取实例对象
const app = createApp(App)
// 安装 element-plus 插件
app.use(ElementPlus, {
  // element-plus 国际化配置
  locale: zhCn,
})

// svg 插件需要的配置代码
import 'virtual:svg-icons-register'
// 注册全局组件
// import SvgIcon from '@/components/SvgIcon/index.vue'
// app.component('SvgIcon',SvgIcon)

// 引入自定义插件，注册整个项目全局
import globalComponent from '@/components'
// 安装自定义插件, 会主动把 @/components/index.ts 里面的 install() 引入进来
app.use(globalComponent)


app.mount('#app')
