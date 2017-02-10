<style>
  .main-wrapper {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .main-header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    padding: 0;
    background-color: #09C;
    z-index: 8000;
    min-width: 860px;
  }

  /* 页内样式 */
  .home-page-center {
    height: 100%;
  }

  .single-page-center {
    padding: 8px;
    box-sizing: border-box;
  }

  .home-section-wrap {
    padding: 8px;
    position: relative;
  }

  .home-section-wrap-bottom {
    min-height: -moz-calc(100% - 130px);
    min-height: -webkit-calc(100% - 130px);
    min-height: calc(100% - 130px);
    margin: 8px;
    background-color: #fff;
  }

  .page-center-wrap-bottom {
    min-height: -moz-calc(100% - 16px);
    min-height: -webkit-calc(100% - 16px);
    min-height: calc(100% - 16px);
    background-color: #fff;
  }

  .page-center-wrap-bottom .home-section-env, .home-section-wrap-bottom .home-section-env, .home-section-wrap-right .home-section-env {
    padding: 8px !important;
  }

  .home-section-wrap-right {
    min-height: -moz-calc(50% - 32px);
    min-height: -webkit-calc(50% - 32px);
    min-height: calc(50% - 32px);
    margin: 8px;
    background-color: #fff;
  }

  .home-section-env {
    background-color: #fff;
    padding: 16px;
    position: relative;
    border-radius: 4px;
  }
</style>
<template>
  <div class="main-wrapper main-sidebar-l" :class="{'sidebar-mini':menuIsFold}">
    <header class="main-header"></header>
    <c-menu></c-menu>
    <c-main></c-main>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import CMenu from 'components/CMenu'
  import CMain from 'components/CMain'

  export default {
    computed: mapGetters([
      'menuIsFold'
    ]),
    components:{
      CMenu,
      CMain
    }
  }
</script>
