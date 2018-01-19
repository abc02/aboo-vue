<style lang="scss" scoped>
  .el-row{
    text-align: center;
  }
</style>

<template>
  <div :style="styles">
    <el-container>
      <el-footer height="20vh">
        <el-row class="el-row">
          <el-col :span="12">
            <h4>服务支持</h4>
          </el-col>
          <el-col :span="12">
            <h2>全国服务热线</h2>
          </el-col>
        </el-row>
        <el-row class="el-row">
          <el-col :span="12">
            <h4>产品帮助</h4>
          </el-col>
          <el-col :span="12">
            <h2>0577-88789089</h2>
          </el-col>
        </el-row>
         <el-row class="el-row">
          <el-col :span="12" :offset="12">
            <p>周一至周五 9:00-17:00</p>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
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
