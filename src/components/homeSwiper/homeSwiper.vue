<template>
  <van-swipe :autoplay="3000" indicator-color="red" class="swipe-wrap">
    <van-swipe-item class="swipe-item">
      <img src="https://yanxuan.nosdn.127.net/a412dcf435135e294edbcad885786060.jpg?imageView&quality=75&thumbnail=750x0" alt="">
    </van-swipe-item>
    <van-swipe-item>
      <img src="https://yanxuan.nosdn.127.net/a412dcf435135e294edbcad885786060.jpg?imageView&quality=75&thumbnail=750x0" alt="">
    </van-swipe-item>
    <van-swipe-item>
      <img src="https://yanxuan.nosdn.127.net/a412dcf435135e294edbcad885786060.jpg?imageView&quality=75&thumbnail=750x0" alt="">
    </van-swipe-item>
    <van-swipe-item>
      <img src="https://yanxuan.nosdn.127.net/a94a7fe5ae37149aa304144c87dc3188.jpg?imageView&quality=75&thumbnail=750x0" alt="">
    </van-swipe-item>
    <van-swipe-item>
      <img src="https://yanxuan.nosdn.127.net/5258f72ed5652d42f3eb07e3f6077014.png?imageView&quality=75&thumbnail=750x0" alt="">
    </van-swipe-item>
    <van-swipe-item>
      <img src="https://yanxuan.nosdn.127.net/570e4ceffc3c1c9e02d060e91a5f229f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
    </van-swipe-item>
    <van-swipe-item>
      <img src="https://yanxuan.nosdn.127.net/dcde0a26e79861fe54baee8ddeab2053.jpg?imageView&quality=75&thumbnail=750x0" alt="">
    </van-swipe-item>
    <van-swipe-item>
      <img src="https://yanxuan.nosdn.127.net/7d874fbc2320cd2ea8c124b61a75b15c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
    </van-swipe-item>
    <div class="custom-indicator" slot="indicator">
      <i class="line van-swipe__indicator " v-for="item in [1,2,3,4,5,6,7,8]"></i>
    </div>
  </van-swipe>
</template>

<script>
  import {Swipe, SwipeItem} from 'vant';
  export default {
    name: "homeSwiper",
    components:{
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem
    }
  }
</script>
<!--van-swipe__indicator van-swipe__indicator&#45;&#45;active-->
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixin.styl"
.swipe-wrap
  width 100%
  position relative
  .swipe-item
    width 100%
    >img
      width 100%
  .custom-indicator
    width 100%
    height rem(4)
    position absolute
    bottom .4rem
    display flex
    justify-content center
    align-items center
    .line
      display inline-block
      width rem(40)
      height rem(4)
      background-color #cccccc
      margin-right rem(10)
      &.van-swipe__indicator
        background-color #7e8c8d
      &.van-swipe__indicator&--active
        background-color palevioletred

</style>
