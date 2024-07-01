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
