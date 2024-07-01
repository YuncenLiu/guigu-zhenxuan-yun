import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'

// 全局组件对象
const allGlobalComponent = { SvgIcon, Pagination }
// 对外暴露插件对象
export default {
  install(app) {
    // 注册项目全部的全局组件
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
    })
  },
}
