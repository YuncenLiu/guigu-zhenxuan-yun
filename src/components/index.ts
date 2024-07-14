import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 全局组件对象
const allGlobalComponent = { SvgIcon, Pagination }
// 对外暴露插件对象
export default {
  install(app: any) {
    // 第一种 注册项目全部的全局组件
    Object.keys(allGlobalComponent).forEach((key) => {
      // app.component(key, allGlobalComponent[key])
    })
    // 第二种注册全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
