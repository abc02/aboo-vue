<style lang="scss">
  .product-container {
    width: 595px;
    height: 397px;
  }
</style>

<template>
    <el-container>
      <good @redirectToCart="redirectToCart"> </good>
    </el-container>
</template>

<script>
  import Good from 'components/Good'
  import Cart from 'components/Cart'
  export default {
    name: 'Product',
    components: {
      'good': Good,
    },
    methods: {
      redirectToCart() {
        location.href = 'cart.html'
      }
    }
  }
</script>