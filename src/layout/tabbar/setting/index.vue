<template>
  <el-button
    size="small"
    icon="Refresh"
    circle
    @click="updateRefresh"
  ></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <img
    :src="userStore.avatar"
    alt="logo"
    style="width: 24px; height: 24px; margin: 0 10px; border-radius: 50%"
  />
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import useUserStore from '@/store/modules/user'
import useLayOutSettingStore from '@/store/modules/setting'
let layOutSettingStore = useLayOutSettingStore()
let userStore = useUserStore()
//获取路由器对象
let $router = useRouter()
//获取路由对向
let $route = useRoute()
// 点击刷新
const updateRefresh = () => {
  layOutSettingStore.refresh = !layOutSettingStore.refresh
}

// 全屏方法
const fullScreen = () => {
  // DOM对象的一个属性，用来判断当前是不是全屏模式
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

//退出登录点击回调
const logout = async () => {
  //第一件事情:需要向服务器发请求[退出登录接口]******
  //第二件事情:仓库当中关于用于相关的数据清空[token|username|avatar]
  //第三件事情:跳转到登录页面
  await userStore.userLogout()
  //跳转到登录页面
  $router.push({ path: '/login', query: { redirect: $route.path } })
}
</script>

<style scoped></style>
