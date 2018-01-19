<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#f4f4f4" text-color="#000000" active-text-color="#f6655e">
    <el-container>
      <el-row class="el-row" type="flex" justify="end">
        <el-menu-item index="1" @click="redirectToIndex">首页</el-menu-item>
        <el-menu-item index="2" @click="redirectToHelp">帮助</el-menu-item>
        <el-menu-item index="3" @click="redirectToProduct">商城</el-menu-item>
        <el-menu-item index="4" @click="redirectToProfile">登录</el-menu-item>
      </el-row>
    </el-container>
  </el-menu>
</template>

<script>
  export default {
    name: "NavigationBar",
    props: ['activeIndex'],
    methods: {
      redirectToIndex() {
        if (this.activeIndex == 1) return
        location.href = 'index.html'
      },
      redirectToHelp() {
        if (this.activeIndex == 2) return
        location.href = 'help.html'
      },
      redirectToProduct() {
        if (this.activeIndex == 3) return
        location.href = 'product.html'
      },
      redirectToProfile() {
        if (this.activeIndex == 4) return
        location.href = 'profile.html'
      }
    }
  };
</script>
