<template>
  <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
  <el-button type="success" size="default" :icon="Edit">编辑按钮</el-button>
  <el-button type="danger" size="default" :icon="Delete">删除按钮</el-button>
  <h2>{{ data.VITE_APP_TITLE }}</h2>
  <svg-icon name="phone" color="red" width="50px" height="50px"></svg-icon>
  <pagination />
</template>

<script setup lang="ts">
import { Plus, Edit, Delete } from '@element-plus/icons-vue'
import { reactive } from 'vue'
let data = reactive(import.meta.env)
</script>

<style scoped></style>
