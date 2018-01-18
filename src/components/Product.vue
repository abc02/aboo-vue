<style lang="scss">
  #app {
    height: 70%;
    height: 70vh;
  }
  .product-container {
    width: 595px;
    height: 397px;
  }
  .el-row {
    margin-top: 20px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>

<template>
  <div id="app" v-cloak>
    <Menu />
    <div class="wraper">
      <el-row :gutter="40" class="el-row">
        <el-col :span="12">
          <el-carousel :interval="5000" height="450px">
            <el-carousel-item v-for="(product, index) in products" :key="index">
              <div class="product-container">
                <img :src="product" alt="">
              </div>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="12">
          <el-row class="el-row">
            <h1>"晓" Spark</h1>
          </el-row>
          <el-row class="el-row">
            <h2>¥3299</h2>
          </el-row>
          <el-row class="el-row">
            <p>邮费:<span>免邮</span></p>
          </el-row>
          <el-row class="el-row">
            <p>掌上起落，手势控制，一键短片，手掌大小的“晓” Spark，让你尽享飞行乐趣。</p>
          </el-row>
          <el-row class="el-row">
            <h1>套餐</h1>
          </el-row>
          <el-row class="el-row">
            <el-button>套餐一</el-button>
            <el-button>套餐二</el-button>
          </el-row>
          <el-row class="el-row">
            <h1>选择套装</h1>
          </el-row>
          <el-row class="el-row">
            <el-button>￥3299</el-button>
            <el-button>￥6499</el-button>
          </el-row>
          <el-row class="el-row">
            <p>温馨提示：“晓” Spark单机不包含遥控器，可通过移动设备遥控或手势控制。</p>
          </el-row>
          <el-row type="flex" justify="space-between" class="el-row">
            <el-col :span="3">
              套餐一
            </el-col>
            <el-col :span="3">
              3299
            </el-col>
          </el-row>
          <el-row type="flex" align="middle" class="el-row">
            <el-col :span="3">
              <h1>总计</h1>
            </el-col>
            <el-col :span="3">
              <span>3299</span>
            </el-col>
          </el-row>
          <el-row class="el-row">
            <el-button type="primary" @click="ToCart">加入购物车</el-button>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <Foot />
  </div>
</template>

<script>
  import Vue from 'vue'
  import {
    Row,
    Col,
    Button,
    Carousel,
    CarouselItem
  } from 'element-ui'
  import 'styles/common.scss'
  import 'element-ui/lib/theme-chalk/index.css'
  import Product01 from 'assets/product-01.jpg'
  import Product02 from 'assets/product-02.jpg'
  import Product03 from 'assets/product-03.jpg'
  import Menu from './Menu'
  import Foot from './Foot'
  
  Vue.component(Row.name, Row)
  Vue.component(Col.name, Col)
  Vue.component(Button.name, Button)
  Vue.component(Carousel.name, Carousel)
  Vue.component(CarouselItem.name, CarouselItem)
  export default {
    name: 'Product',
    components: {
      Menu,
      Foot
    },
    data() {
      return {
        products: [
          Product01, Product02, Product03
        ]
      }
    },
    created() {
      this.$bus.on('add-todo', '123');
      this.$bus.once('once', () => console.log('This listener will only fire once'));
    },
    beforeDestroy() {
      this.$bus.off('add-todo', '123');
    },
    methods: {
      ToCart: () => {
        console.log(this)
        // this.$bus.emit('add-todo', {
        //   text: '321'
        // });
        // location.href = "cart.html"
      }
    }
  }
</script>