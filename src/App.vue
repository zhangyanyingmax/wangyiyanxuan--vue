<template>
  <div id="app">
    <div class="contentWrap">
      <div class="content">
        <router-view></router-view>
      </div>
      <FooterGuider v-if="$route.meta.showFooter" class="footer"></FooterGuider>
    </div>
  </div>
</template>

<script>
import FooterGuider from 'components/footerGuider/footerGuider';
export default {
  name: 'app',
  components:{
    FooterGuider
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#app
  width 100%
  height 100%
  .contentWrap
    width 100%
    height 100%
    .content
      width 100%
      height 100%

    .footer
      position fixed
      left 0
      bottom 0
</style>
