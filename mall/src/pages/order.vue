<template>
  <div>
    <OrderHeader></OrderHeader>
    <router-view></router-view>
    <NavFooter></NavFooter>
  </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import NavFooter from '../components/NavFooter'
export default {
  name: 'order',
  components: {
    OrderHeader,
    NavFooter
  }
}
</script>

<style>

</style>
