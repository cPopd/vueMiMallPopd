<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      res: {}
    }
  },
  mounted() {
    // 本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res) =>{
    //   this.res = res
    //   console.log(this.res)
    // })
    // 2.通过 easy-mock 模拟数据
    // 3.本地集成 mockjs实现模拟数据
    this.axios.get('/user/login').then((res) => {
      this.res = res
      console.log(this.res)
    })
  }
}
</script>

<style>

</style>
