import Vue from 'vue'
import VueBus from 'vue-bus'
import Cart from 'components/Cart.vue'

Vue.use(VueBus)
new Vue({
  el: '#app',
  render: h => h(Cart)
})