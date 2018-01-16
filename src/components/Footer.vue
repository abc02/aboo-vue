<style lang="scss">
$color-fonts: white;
#footer {
  background-color: #f6655e;
  color: $color-fonts;
  height: 20%;
  height: 20vh;
  .container {
    display: flex;
    justify-content: space-around;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title,.tel,.sub{
        color: rgba($color: $color-fonts, $alpha: 0.7);
        margin-bottom: 8px;
        margin-bottom: 1vh;
      }
    }
  }
}
</style>

<template>
  <div id="footer">
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
    <!-- <li class="footer-item">
          <ul>
            <li>
              <h4>服务支持</h4>
            </li>
            <li>
              <a href="./help.html">售后服务</a>
            </li>
          </ul>
        </li>
        <li class="footer-item contact">
          <ul>
            <li>
              <h2>全国服务热线</h2>
            </li>
            <li>
              <h1>0577-88789089</h1>
            </li>
            <li>
              <p>周一到周五9:00-17:00</p>
            </li>
          </ul>
        </li> -->
  </div>
</template>

<script>
export default {
  name: "footer"
};
</script>
