<style>
[v-cloak] {
  display: none;
}
</style>

<template>
  <div id="app" v-cloak>
      <Menu  activeIndex="2"/>
      <XXX />
      <Foot />
  </div>
</template>

<script>
import 'styles/common.scss'
import Menu from './Menu'
import XXX from './XXX'
import Foot from './Foot'
export default {
  name: 'app',
  components: {
    Menu,
    XXX,
    Foot
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>