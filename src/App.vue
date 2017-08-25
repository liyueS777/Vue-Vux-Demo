<template>
  <div class="app">
    <!--<transition name="slide">-->
      <router-view class="child-view"></router-view>
    <!--</transition>-->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
/*@import '~vux/src/styles/reset.less';*/

.app {
  height: 100%;
  width: 100%;
  .child-view {
    width: 100%;
    background-color: #fbf9fe;
    /*position: absolute;*/
    /*z-index: 999;*/
  }
  background-color: #fbf9fe;
  .slide-leave-active,.slide-enter-active {
    transition: all .3s cubic-bezier(.55,0,.1,1);
  }
  .slide-enter,.slide-leace-to {
    opacity: 0;
    transform:translate3d(100%,0,0);
  }
}
</style>
