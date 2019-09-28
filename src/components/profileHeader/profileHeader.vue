<template>
  <div class="header">
    <div class="headerMain">
      <router-link to="/home" class="home"></router-link>
      <router-link to="/home" class="logo">
        <slot>
          <i></i>
        </slot>
      </router-link>
      <div class="right">
        <router-link to="/search" class="search">
          <i></i>
        </router-link>
        <router-link to="/cart" class="cart">
          <i></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "profileHeader"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .header
    height rem(88)
    padding 0 rem(16) 0 rem(24)
    .headerMain
      height rem(88)
      display flex
      justify-content space-between
      align-items center
      .home
        width: .64rem;
        height: .58667rem;
        background-position: 0 -.98667rem;
        display: inline-block;
        vertical-align: middle;
        background-image url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png")
        background-repeat: no-repeat;
        background-size: 2.29333rem 5.6rem;
      .logo
        >i
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          margin: auto;
          margin-top rem(20)
          width: 2.29333rem;
          height: .72rem;
          background-position: 0 -1.70667rem;
          display: inline-block;
          vertical-align: middle;
          background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png");
          background-repeat: no-repeat;
          background-size: 2.29333rem 5.6rem;
      .right
        margin-right rem(5)
        .search
          display inline-block
          width rem(64)
          height rem(64)
          margin-right rem(20)
          >i
            position: relative;
            bottom: 0;
            width: .85333rem;
            height: .85333rem;
            background-position: 0 -4.74667rem;
            display: inline-block;
            vertical-align: middle;
            background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png");
            background-repeat: no-repeat;
            background-size: 2.29333rem 5.6rem;
        .cart
          display inline-block
          width rem(64)
          height rem(64)
          >i
            position: relative;
            width: .85333rem;
            height: .85333rem;
            background-position: 0 0;
            display: inline-block;
            vertical-align: middle;
            background-image: url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png");
            background-repeat: no-repeat;
            background-size: 2.29333rem 5.6rem;
</style>
