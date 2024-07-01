### 1、引入 Element-Plus

[Element 官网](http://element-plus.org/zh-CN/guide/quickstart.html)

引入国家化组件，解决代码飘红问题

```js
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
```

### 2、src 别名配置

给 src 配置别名，使用 @ 代替 src

视频中添加配置，即可以在 main.ts 中直接使用 `import App from '@/App.vue'` ，这段也得加，不然 IDEA 爆红，虽然可以运行！

```json
"compilerOptions": {
  "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
  "paths": { //路径映射，相对于baseUrl
    "@/*": [
      "src/*"
    ]
  },
}
```

实际上需要通过其他方法解决：[摘抄来自掘金](https://juejin.cn/post/7246940748168085564)

安装依赖

```sh
pnpm install --save --dev @types/node
```

在 `vite.config.ts` 配置文件中添加，然后重启就生效

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
})
```

### 3、使用环境变量

创建 `.env.development` 文件，然后在组件中使用

```js
console.log('test', import.meta.env)
```

也可以在构建的时候配置不同构建模式

```json
{
  "build:test": "vue-tsc --noEmit --skipLibCheck && vite build --mode test",
  "build:pro": "vue-tsc --noEmit --skipLibCheck && vite build --mode production"
}
```

### 4、svg 图片配置

安装 `pnpm install vite-plugin-svg-icons -D`

配置在 defineConfig > plugins 下

```js
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

createSvgIconsPlugin({
  iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
  symbolId: 'icon-[dir]-[name]',
}),
```

`main.ts` 里配置 `import 'virtual:svg-icons-register'`

#### 4.1、注册全局组件

在 main.ts 中引入 `components/index.ts` 文件

```js
// 引入自定义插件，注册整个项目全局
import globalComponent from '@/components'
// 安装自定义插件, 会主动把 @/components/index.ts 里面的 install() 引入进来
app.use(globalComponent)
```

把所有需要暴露出去的组件，通过 index.ts 暴露出去，做到统一管理

```js
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
```

然后在任意地方使用 index.ts 中的组件，组件名为上面代码的 `import` 名

### 5、集成SASS

单独要用的话可以执行这个

```sh
pnpm add sass sass-loader -D
```

main.ts 中引入 sass 文件

```
//引入模板的全局的样式  
import '@/style/index.scss'
```

此时 sass 文件中的变量还不能到处引用，创建 `/styles/variable.scss` 文件

在 `vite.config.ts` 文件配置如下 在 `defineConfig` 下

```js
//scss全局变量一个配置  
css: {  
  preprocessorOptions: {  
    scss: {  
      javascriptEnabled: true,  
      additionalData: '@import "./src/styles/variable.scss";',  
    },  
  },  
},
```

### 6、mock数据

[vite-plugin-mock 官网](https://github.com/vbenjs/vite-plugin-mock/blob/main/README.zh_CN.md)  只在开发阶段使用，上线之后，就不用了

