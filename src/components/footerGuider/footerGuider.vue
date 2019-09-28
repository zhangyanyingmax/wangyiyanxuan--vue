<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" :class="{on:$route.path === '/home'}" @click="goto('/home')">
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path === '/cateList'}" @click="goto('/cateList')">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path === '/topic'}" @click="goto('/topic')">
      <span class="item_icon">
        <i class="iconfont icon-icon"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path === '/cart'}" @click="goto('/cart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path === '/profile'}" @click="goto('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    name: "footerGuider",
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    background-color #fff
    width 100%
    height rem(98)
    display flex
    align-items center
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin rem(5)
      color #999999
      &.on
        color #b4282d
      span
        font-size rem(24)
        margin-top rem(7)
        .iconfont
          font-size rem(40)
</style>
