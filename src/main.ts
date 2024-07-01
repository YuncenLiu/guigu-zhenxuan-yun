import { createApp } from 'vue'
import './style.css'

// 引入 element-plus 插件样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置 element-plus 国际化
// 解决代码飘红问题，
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import App from './App.vue'


// 获取实例对象
const app = createApp(App)
// 安装 element-plus 插件
app.use(ElementPlus,{
  // element-plus 国际化配置
  locale: zhCn
})
app.mount('#app')
