<template>
  <div id="app">
    <Menu />
    <Swiper />
    <Aboo />
    <Footer />
  </div>
</template>

<script>
import Menu from './Menu'
import Swiper from './Swiper'
import Aboo from './Aboo'
import Footer from './Footer'
export default {
  name: 'app',
  components: {
    Menu,
    Swiper,
    Aboo,
    Footer
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@charset "utf-8";
*{
    box-sizing: border-box;
    &:after,&:before{
        box-sizing:border-box;
    }
}
body,
div,
section,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
li {
    margin: 0;
    padding: 0;
}
html {
    -ms-touch-action: none;
}
body {
    *cursor: default;
	// overflow: hidden;
}
li{
    list-style: none;
}
a{
    text-decoration: none;
    color:inherit;
    border: none;
    outline: none;
}

img {
    display: block;
    // border:none;
    width:100%;
    height: 100%;
}
.wraper {
    margin: 0 auto;
    width: 1280px;
    max-width: 1280px;
    height: 100%;
}
</style>
