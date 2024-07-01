import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

//引入svg需要用到插件
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig((command) => {
    return {
        plugins: [
            vue(),
            createSvgIconsPlugin({
                iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
                symbolId: 'icon-[dir]-[name]',
            }),
            viteMockServe({
                // 保证开发阶段可以使用
                localEnabled: command === 'serve'
            }),
        ],
        resolve: {
            alias: {
                '@': path.resolve('src'),
            },
        },
        //scss全局变量一个配置
        css: {
            preprocessorOptions: {
                scss: {
                    javascriptEnabled: true,
                    additionalData: '@import "src/styles/variable.scss";',
                },
            },
        }
    }
})
