<template>
  <div id="app" v-cloak>
    <Menu activeIndex="1" />
    <Swiper />
    <Aboo />
    <Foot :styles="footStyle" />
  </div>
</template>

<script>
  import 'normalize.css'
  import 'node_modules/fonts.css/fonts.css'
  import 'styles/common.scss'
  import 'animate.css'
  import 'element-ui/lib/theme-chalk/index.css'
  import Menu from './Menu'
  import Swiper from './Swiper'
  import Aboo from './Aboo'
  import Foot from './Foot'
  export default {
    name: 'Index',
    components: {
      Menu,
      Swiper,
      Aboo,
      Foot
    },
    data() {
      return {
        footStyle: {
          backgroundColor: "#f6655e",
          color: "#ffffff"
        }
      }
    },
    created() {
      let Mobile = /Mobile/i.test(navigator.userAgent)
      if (Mobile) {
        location.href = 'moblie.html'
      }
    }
  }
</script>
