import 'normalize.css'
import 'animate.css'
import 'styles/common.scss'
import 'node_modules/fonts.css/fonts.css'
import 'element-ui/lib/theme-chalk/index.css'

import Vue from 'vue'
import ElementUI from 'element-ui'
import NavigationBar  from 'components/NavigationBar'
import Product  from 'components/Product'
import Foot from 'components/Foot'

Vue.use(ElementUI)
new Vue({
  el: '#app',
  components: {
    'navigation-bar': NavigationBar,
    'product': Product,
    'foot': Foot
  },
})