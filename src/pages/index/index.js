import 'normalize.css'
import 'animate.css'
import 'styles/common.scss'
import 'node_modules/fonts.css/fonts.css'
import 'element-ui/lib/theme-chalk/index.css'

import Vue from 'vue'
import ElementUI from 'element-ui'
import NavigationBar  from 'components/NavigationBar'
import Swiper from 'components/Swiper'
import ProductIntroduction  from 'components/ProductIntroduction'
import Foot from 'components/Foot'

Vue.use(ElementUI)
new Vue({
  el: '#app',
  components: {
    'navigation-bar': NavigationBar,
    'swiper': Swiper,
    'product-introduction': ProductIntroduction,
    'foot': Foot
  },
  data: {
    footStyle: {
      backgroundColor: "#f6655e",
      color: "#ffffff"
    }
  },
  created() {
    let Mobile = /Mobile/i.test(navigator.userAgent)
    if (Mobile) {
      location.href = 'moblie.html'
    }
  }
})