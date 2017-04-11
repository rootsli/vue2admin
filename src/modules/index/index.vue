<style scoped>
  .full-screen {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .grid-content {
    border-radius: 4px;
    text-align: center;
    height: 36px;
    line-height: 36px;
  }

  .el-menu--horizontal .el-menu-item {
    float: right !important;
  }

  .el-menu{
    padding-right: 60px;
  }
</style>
<template>
  <div class="full-screen">
    <c-waves>
      <el-menu slot="header" theme="dark" default-active="1" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="2"><router-link to="/login"><i class="el-icon-share"></i>登录</router-link></el-menu-item>
        <el-menu-item index="1"><i class="el-icon-menu"></i>首页</el-menu-item>
      </el-menu>
      <div slot="center">
        <img src="../../assets/logo.png" />
        <div style="font-size: 46px;">vue2admin</div>
      </div>
    </c-waves>
  </div>
</template>
<script>
  import CWaves from 'components/CWaves'

  export default {
    components: {
      CWaves
    }
  }
</script>
