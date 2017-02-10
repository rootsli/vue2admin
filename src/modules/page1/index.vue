<style scoped>
  @import "../../css/vars.css"; /* 引入预定义变量 */
  .post-css-test{
    transform: rotateY(360deg);
    box-shadow: 0 0 3px 5px rgba(222, 222, 222, .3);
    display: flex;
    color: var(--color-main);
  }
</style>
<template>
  <div class="height100">
    <div class="home-page-center single-page-center base">
      <div class="home-section-wrap page-center-wrap-bottom">
        <div class="home-section-env">
          <h1>page1</h1>
          <div  class="post-css-test">PostCSS Testing: hello world!</div>
        </div>
      </div>
    </div>
  </div>
</template>

