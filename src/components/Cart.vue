<style scoped>
  h4 {
    font-weight: 600;
  }
  .el-input-number {
    width: 120px;
  }
</style>

<template>
  <div>
    <el-container>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="商品" width="600">
        </el-table-column>
        <el-table-column prop="price" label="价格" width="200">
        </el-table-column>
        <el-table-column prop="number" label="数量" width="200">
          <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </el-table-column>
        <el-table-column prop="subtotal" label="小计" width="200">
        </el-table-column>
        <el-table-column prop="delete" width="80">
        </el-table-column>
      </el-table>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'Cart',
    data() {
      return {
        num1: 1,
        tableData: [{
          name: '商品昵称',
          price: 3299,
          number: 2,
          subtotal: 3299,
          delete: true
        }]
      }
    },
    methods: {
      redirectToCart() {
        this.$emit('redirectToCart')
      },
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>