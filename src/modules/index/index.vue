<style scoped>
  .bg-purple-dark {
    background: #99a9bf;
  }

  .grid-content {
    border-radius: 4px;
    text-align: center;
    height: 36px;
    line-height: 36px;
  }
</style>
<template>
  <div>
    <el-row>
      <el-col :span="8">&nbsp;</el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-dark">
          这是首页，点击跳转到<router-link to="/login">登录页面</router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
