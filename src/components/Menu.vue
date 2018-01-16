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
  background-color="#f4f4f4" 
  text-color="#000000" 
  active-text-color="#f6655e">
  <div class="wraper">
    <div class="menu-container">
      <el-menu-item index="1" @click="ToIndex">首页</el-menu-item>
      <el-menu-item index="2" @click="ToHelp">帮助</el-menu-item>
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
  props: ['activeIndex'],
  methods: {
    ToIndex() {
      location.href = 'index.html'
    },
    ToHelp() {
      location.href = 'help.html'
    }
  }
};
</script>
