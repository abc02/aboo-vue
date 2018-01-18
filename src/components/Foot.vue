<style lang="scss">
.footer {
  height: 20%;
  height: 20vh;
  .container {
    display: flex;
    justify-content: space-around;
    padding-top: 8px;
    padding-top: 1vh;
    li {
      display: flex;
      flex-direction: column;
      .title,.tel,.sub{
        margin-bottom: 8px;
        margin-bottom: 1vh;
      }
    }
  }
}
</style>

<template>
  <div class="footer" :style="styles">
    <div class="wraper">
      <ul class="container">
        <li>
          <h4 class="title">服务支持</h4>
          <p class="sub"><a href="./help.html">产品帮助</a></p>
        </li>
        <li>
          <h2 class="title">全国服务热线</h2>
          <h1 class="tel">0577-88789089</h1>
          <p class="sub">周一到周五9:00-17:00</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Foot",
  props: {
    styles: {
      type: Object,
      required: false,
      default: () => ({
        backgroundColor: '#ffffff',
        color: '#000000'
      })
    }
  }
};
</script>
