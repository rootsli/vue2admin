<style scoped>
  .header {
    position: absolute;
    width: 100%;
    text-align: right;
    right: 0;
    top: 0;
    /*padding: 5px 120px;*/
  }

  .header a {
    color: #ffffff !important;
  }

  .center {
    position: absolute;
    text-align: center;
    top: 36%;
    left: 40%;
    height: 320px;
    width: 420px;
    color: #9cd7d1;
  }

  .canvas-container {
    height: 100%;
    width: 100%;
    flex: 1;
    background-image: linear-gradient(70deg, #2061c2 0, #0d0525 100%);
  }
</style>
<template>
  <div id="waves_container" class="canvas-container">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
  </div>
</template>
<script>
  import waves from './js/cwaves'

  export default {
    mounted(){
      waves.init('waves_container');
    },
    beforeDestroy(){
      waves.removeEvent();
    }
  }
</script>
