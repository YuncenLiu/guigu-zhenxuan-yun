import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

const f = () => {
  console.log(' 这是 没有格式化的代码 ')
}

f()
