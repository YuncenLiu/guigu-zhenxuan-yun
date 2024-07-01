<script setup lang="ts">
// @ts-ignore
import HelloWorld from './components/HelloWorld.vue'
import { Plus, Edit, Delete } from '@element-plus/icons-vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
  <el-button type="success" size="default" :icon="Edit">编辑按钮</el-button>
  <el-button type="danger" size="default" :icon="Delete">删除按钮</el-button>
  <el-pagination
    :page-size="[100, 200, 300, 400]"
    :small="small"
    :disabled="disabled"
    :background="background"
    layout="total,sizes,prev,pager,next,jumper"
    :total="400"
  />
  <HelloWorld msg="Vite + Vue + HelloWorld" />
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
