<template>
  <div class="cateList">
    <HomeHeader class="header"></HomeHeader>
  </div>
</template>

<script>
  import HomeHeader from 'components/homeHeader/homeHeader.vue';
  export default {
    name: "cateList",
    components:{
      HomeHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixin.styl"
  .cateList
    width 100%
    .header
      /deep/.search
        width 9.893333rem
</style>
