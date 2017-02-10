<style scoped>
  .main-container {
    position: absolute;
    top: 70px;
    left: 230px;
    right: 0;
    bottom: 0;
    overflow: hidden;
    -webkit-transition: all .28s ease-out;
    transition: all .28s ease-out;
    will-change: transform
  }

  .main-wrapper.sidebar-mini .main-container {
    left: 60px;
  }

  /* 顶部通知 */
  .top-notice {
    padding: 0;
    min-width: 730px;
    background-color: #fff;
    height: 30px;
    line-height: 30px;
  }

  .sdp-container-scroll {
    position: absolute;
    width: auto;
    top: 38px;
    bottom: 8px;
    left: 8px;
    right: 8px;
    overflow: auto;
    /* overflow-y: auto; */
    -moz-transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  .content-container {
    position: relative;
    padding: 0;
    min-width: 763px;
  }

  .top-notice i.icon-toggle-menu {
    border-right: 1px solid #ebebeb;
    padding: 0 10px;
    display: inline-block;
    color: #999999;
    cursor: pointer;
    font-size: 20px;
  }

  .top-notice .icon-notice {
    font-weight: 800;
    color: #32353a;
    font-size: 14px;
    margin-left: 5px;
    position: relative;
  }

  .top-notice .icon-notice i {
    font-weight: normal;
    margin-right: 5px;
    font-size: 20px;
    color: #999999;
    float: left;
  }
</style>
<template>
  <main class="main-container">
    <div class="top-notice">
      <a @click="toggleMenu" class="fl"><i class="v2 icon-toggle-menu" :class="{'v2-slidebar-packup':!menuIsFold,'v2-slidebar-packup-copy':menuIsFold}"></i></a>
      <span class="icon-notice fl"><i class="v2 v2-announcement"></i>公告：</span>
    </div>
    <div class="sdp-container-scroll">
      <div class="content-container height100">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: mapGetters([
      'menuIsFold'
    ]),
    methods: mapActions([
      'toggleMenu'
    ])
  }
</script>
