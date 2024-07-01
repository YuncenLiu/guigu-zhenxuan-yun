<template>
  <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
  <el-button type="success" size="default" :icon="Edit">编辑按钮</el-button>
  <el-button type="danger" size="default" :icon="Delete">删除按钮</el-button>
  <h2>{{data.VITE_APP_TITLE}}</h2>
  <el-pagination
    :page-size="[100, 200, 300, 400]"
    :small="small"
    :disabled="disabled"
    :background="background"
    layout="total,sizes,prev,pager,next,jumper"
    :total="400"
  />
</template>

<script setup lang="ts">
import { Plus, Edit, Delete } from '@element-plus/icons-vue'
import {reactive} from "vue"

let data = reactive(import.meta.env)

console.log('test',import.meta.env)
</script>

<style scoped></style>
