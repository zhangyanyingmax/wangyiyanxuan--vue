<template>
  <header class="header">
    <slot name="left"></slot>
    <div class="search" >
      <router-link to="/search">
        <img class="searchIcon" src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="">
        <span class="searchInput">搜索商品, 共23056款好物</span>
      </router-link>
    </div>
    <slot name="right"></slot>
  </header>
</template>

<script>
  export default {
    name: "homeHeader"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .header
    padding rem(16) rem(30)
    background-color #ffffff
    display flex
    align-items center
    .logo
      width rem(138)
      height rem(40)
      margin-right rem(20)
      margin-top rem(5)
    .search
      width rem(442)
      height rem(56)
      background-color #EDEDED
      display flex
      justify-content center
      align-items center
      .searchIcon
        width rem(28)
        height rem(28)
        margin-right rem(10)
      .searchInput
        font-size rem(28)
    .btn
      width rem(74)
      height rem(40)
      border 1px solid #b4282d
      border-radius rem(5)
      font-size rem(24)
      color #b4282d
      margin-left rem(16)
      margin-top rem(5)
      white-space nowrap
</style>
