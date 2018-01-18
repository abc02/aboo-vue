
<template>
  <div id="app" v-cloak>
    <Menu />
    <div class="wraper">
      cart2
    </div>
    <Foot />
  </div>
</template>

<script>
  import Vue from 'vue'
  import {
    Row,
    Col,
    Button
  } from 'element-ui'
  import 'styles/common.scss'
  import 'element-ui/lib/theme-chalk/index.css'
  import Menu from './Menu'
  import Foot from './Foot'
  Vue.component(Row.name, Row)
  Vue.component(Col.name, Col)
  Vue.component(Button.name, Button)
  export default {
    name: 'Buy',
    components: {
      Menu,
      Foot
    },
    created() {
      this.$bus.on('add-todo', this.addTodo);
      this.$bus.once('once', () => console.log('This listener will only fire once'));
    },
    beforeDestroy() {
      this.$bus.off('add-todo', this.addTodo);
    },
    methods: {
      addTodo(newTodo) {
        this.todos.push(newTodo);
      }
    }
  }
</script>