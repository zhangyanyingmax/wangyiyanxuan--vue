<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuider v-if="$route.meta.showFooter"></FooterGuider>
  </div>
</template>

<script>
import FooterGuider from 'components/footerGuider/footerGuider';
export default {
  name: 'app',
  components:{
    FooterGuider
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#app
  height 100%
</style>
