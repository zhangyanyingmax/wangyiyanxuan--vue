<template>
  <div class="cart">
    <header class="header">
      <span class="left">购物车</span>
      <div class="right">
        <span>领券</span>
      </div>
    </header>
    <ul class="list">
      <li>
        <i></i>
        <span>30天无忧退货</span>
      </li>
      <li>
        <i></i>
        <span>48小时快速退款</span>
      </li>
      <li>
        <i></i>
        <span>满88元免邮费</span>
      </li>
    </ul>
    <div class="content">
      <div class="contentMain">
        <div class="img"></div>
        <div class="text">
          <div>去添加点什么吧</div>
          <van-button type="danger" class="login">登录</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Button} from 'vant';
  export default {
    name: "cart",
    components:{
      [Button.name]:Button
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixin.styl"
.cart
  width 100%
  height 100%
  .header
    height rem(88)
    line-height rem(88)
    padding 0 rem(30)
    background-color #ffffff
    overflow hidden
    .left
      font-size rem(36)
      float left
    .right
      width rem(90)
      font-size rem(30)
      color #b4282d
      position absolute
      top 0
      right rem(30)
  .list
    position relative
    z-index 1
    height rem(70)
    padding 0 rem(30)
    background-color #eeeeee
    display flex
    justify-content space-between
    align-items center
    >li
      display flex
      align-items center
      >i
        display block
        width rem(10)
        height rem(10)
        border 1px solid #f33737
        border-radius 50%
        margin-right rem(6)
      >span
        font-size rem(24)
  .content
    position fixed
    top rem(88)
    left 0
    bottom 0
    width 100%
    z-index 0
    background-color #f4f4f4
    text-align center
    .contentMain
      position: absolute;
      top: -.66667rem;
      right: 0;
      bottom: 0;
      left: 0;
      height: 4rem;
      margin: auto;
      .img
        display: inline-block;
        vertical-align: middle;
        width: 3.30667rem;
        height: 3.30667rem;
        margin-bottom: .10667rem;
        background-size: 3.30667rem 3.30667rem;
        background-position: center center;
        background-repeat: no-repeat;
        background-image url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png")

      .text
        margin-top rem(-20)
        >div
          font-size rem(28)
          margin-bottom rem(50)
          color #999999
        .login
          width rem(480)
          height rem(92)
          font-size rem(30)
          margin 0 rem(135)
          background-color #b4282d




</style>
