<template>
  <div>
    <!--  分页器全局组件 -->
    <el-pagination
      :page-size="[100, 200, 300, 400]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total,sizes,prev,pager,next,jumper"
      :total="400"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
