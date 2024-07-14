<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#001529" text-color="white">
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
      <!--      <el-scrollbar class="scrollbar">-->
      <!--        &lt;!&ndash; 菜单组件&ndash;&gt;-->
      <!--        <el-menu :collapse="LayOutSettingStore.fold?true:false" :default-active="$route.path" background-color="#001529" text-color="white"-->
      <!--                 active-text-color="yellowgreen">-->
      <!--          &lt;!&ndash;根据路由动态生成菜单&ndash;&gt;-->
      <!--          <Menu :menuList="userStore.menuRoutes"></Menu>-->
      <!--        </el-menu>-->
      <!--      </el-scrollbar>-->
    </div>
    <div class="layout_tabbar">456</div>
    <div class="layout_main">123</div>
  </div>
</template>

<script setup lang="ts">
//引入左侧菜单logo子组件
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'

// 获取用户小仓库中的 路由信息
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    color: white;
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    transition: all 0.3s;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }
  }

  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    top: 0px;
    left: $base-menu-width;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;

    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
