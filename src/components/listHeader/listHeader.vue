<template>
  <div class="titleWrap">
    <div class="title">
      <span class="left">{{title}}</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "listHeader",
    props:{
      title:String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .title
    padding 0 rem(30)
    box-sizing border-box
    height rem(100)
    .left
      font-size rem(32)
      color #333333
      line-height rem(100)
    .right
      float right
      display block
      line-height rem(100)
      font-size rem(28)
      .iconfont
        font-size rem(28)
        margin rem(-5) 0 0 rem(8)
</style>
