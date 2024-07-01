<template>
  <div>
    Hello
    <h1>Hello</h1>
    <h2>Hello</h2>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { reqLogin } from '@/api/user'

onMounted(() => {
  reqLogin({ username: 'admin', password: '1111111' })
})
</script>

<style scoped lang="scss">
div {
  h2 {
    color: $color;
  }
}
</style>
