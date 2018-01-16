<style>
.menu-container{
  display: flex;
  justify-content: flex-end;
}
</style>

<template>
<el-menu :default-active="activeIndex" 
  class="el-menu-demo" 
  mode="horizontal" 
  @select="handleSelect" 
  background-color="#f4f4f4" 
  text-color="#000000" 
  active-text-color="#f6655e">
  <div class="wraper">
    <div class="menu-container">
      <el-menu-item index="1"><a href="./index.html">首页</a></el-menu-item>
      <el-menu-item index="2"><a href="./help.html">帮助</a></el-menu-item>
    </div>
  </div>
</el-menu>
</template>

<script>
import Vue from 'vue'
import { Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'

Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
export default {
  name: "navBar",
  data() {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
};
</script>
