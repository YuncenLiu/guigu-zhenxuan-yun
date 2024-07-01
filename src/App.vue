<template>
  <div>
    Hello
    <h1>Hello</h1>
    <h2>Hello</h2>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'
import { onMounted } from 'vue'

onMounted(() => {
  request({
    url: '/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111',
    },
  }).then((res) => {
    console.log('onMounted', res)
  })
})
</script>

<style scoped lang="scss">
div {
  h2 {
    color: $color;
  }
}
</style>
