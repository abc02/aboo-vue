import Vue from 'vue'
import VueBus from 'vue-bus'
import Product from 'components/Product.vue'
Vue.use(VueBus)
new Vue({
  el: '#app',
  render: h => h(Product)
})