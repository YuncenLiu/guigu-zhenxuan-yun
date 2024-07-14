<template>
  <template v-for="(item, index) in menuList" :key="item.path">
    <!--    没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item
        v-if="!item.meta.hidden"
        :index="item.path"
        @click="goRoute"
      >
        <!-- 放外面的原因 el-menu 添加了 collapse 插槽导致图标丢失 -->
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <!--    有子路由但是只有一个 -->
    <template v-if="item.children && item.children.length === 1">
      <el-menu-item
        v-if="!item.children[0].meta.hidden"
        :index="item.children[0].path"
      >
        <template #title>
          <el-icon>
            <component :is="item.children[0].meta.icon"></component>
          </el-icon>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>

    <el-sub-menu
      v-if="item.children && item.children.length > 1"
      :index="item.path"
    >
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <!--      递归组件 需要起名字 所以需要重新起一个 script 标签 -->
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>

  <!--   静态案例

      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">数据大屏</el-menu-item>
      <el-sub-menu index="3">
        <template #title>
          <span>权限管理</span>
        </template>
        <el-menu-item index="3-1">用户管理</el-menu-item>
        <el-menu-item index="3-2">角色管理</el-menu-item>
        <el-menu-item index="3-3">菜单管理</el-menu-item>
      </el-sub-menu>
    -->
</template>

<script setup lang="ts">
// 获取父组件传递过来的 全路路由组件
defineProps(['menuList'])
import { useRouter } from 'vue-router'

let $router = useRouter()

const goRoute = (vc: any) => {
  // console.log(vc.index)
  //  路由跳转
  $router.push(vc.index)
}
</script>

<script lang="ts">
export default {
  name: 'Menu',
}
</script>

<style scoped lang="scss"></style>
