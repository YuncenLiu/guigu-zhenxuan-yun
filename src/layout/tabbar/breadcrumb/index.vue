<template>
  <el-icon style="margin-left: 10px" @click="changeIcon">
    <component :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight" style="margin-left: 20px">
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <el-icon style="vertical-align: middle; margin-right: 5px">
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span style="vertical-align: middle">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import useLayOutSettingStore from '@/store/modules/setting'
//获取layout配置相关的仓库
let LayOutSettingStore = useLayOutSettingStore()
let $route = useRoute()

// 控制菜单折叠与打开的变量
let fold = ref(true)
const changeIcon = () => {
  console.log(123)
  //图标进行切换
  LayOutSettingStore.fold = !LayOutSettingStore.fold
}

const handler = () => {
  console.log($route)
}
</script>
<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<style scoped></style>
