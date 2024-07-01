<template>
  <!--  svg图标外侧容器节点，内部需要配合 use 使用-->
  <svg :width="width" :height="height">
    <!--    xlink:href 决定使用哪个图标， 属性值务必 #icon-图标名称 ，-->
    <!--    <use xlink:href="#icon-phone" width="40px" height="40px" fill="skyblue"></use>-->
    <use
      :xlink:href="prefix + name"
      :width="width"
      :height="height"
      :fill="color"
    ></use>
  </svg>
</template>

<script setup lang="ts">
let props = defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style scoped></style>
