<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage'
export default {
  mounted() {
    // storage.setItem('a', 1)
    // storage.setItem('user', {a: 1})
    storage.setItem('abc', {a:1}, 'user')
  }
}
</script>

<style>

</style>
