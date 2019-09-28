<template>
  <div class="contentWrap">
    <div class="content">
      <!--<div class="contentTop">
        <div class="logoWrap">
          <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          <div class="img"></div>
        </div>
        <div class="btnWrap">
          <div class="phone">
            <i></i>
            <span @click="!showPhone">手机号快捷登录</span>
          </div>
          <div class="email">
            <i></i>
            <span @click="!showEmail">邮箱账号登录</span>
          </div>
        </div>
        <div class="loginWay">
          <div class="itemWrap">
        <span class="item">
          <i class="icon iconfont icon-weixin"></i>
          <span class="name">微信</span>
        </span>
          </div>
          <div class="itemWrap">
        <span class="item">
          <i class="icon iconfont icon-qq-copy"></i>
          <span class="name">QQ</span>
        </span>
          </div>
          <div class="itemWrap">
        <span class="item">
          <i class="icon iconfont icon-weibo"></i>
          <span class="name">微博</span>
        </span>
          </div>
        </div>
      </div>-->
      <div class="singIn">
        <div class="logo">
          <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <form>
          <div class="loginMsm" v-show="showPhone">
            <section class="number">
              <input type="text" placeholder="请输入手机号">
            </section>
            <section class="code">
              <input type="text" placeholder="请输入手机验证码">
              <span>获取验证码</span>
            </section>
            <section class="message">
              <span>遇到问题？</span>
              <span>使用密码验证登录</span>
            </section>
            <section class="clause">
              <input type="checkbox">
              <span>我同意 <span>《服务条款》</span>和 <span>《网易隐私政策》</span></span>
            </section>
          </div>
          <!--<div class="loginName" v-show="showName">
            <section class="number">
              <input type="text" placeholder="请输入手机号">
            </section>
            <section class="code">
              <input type="text" placeholder="请输入密码">
            </section>
            <section class="message">
              <span>忘记密码？</span>
              <span>短信登录</span>
            </section>
          </div>
          <div class="loginEmail" v-show="showEmail">
            <section class="number">
              <input type="text" placeholder="邮箱账号">
            </section>
            <section class="code">
              <input type="text" placeholder="密码">
            </section>
            <section class="message">
              <span>注册账号</span>
              <span>忘记密码</span>
            </section>
          </div>-->
          <button class="loginBtn">登录</button>
        </form>
        <div class="choseWay">
          <span>其他登录方式</span>
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "loginType",
    data(){
      return {
        showPhone:false,
        showName:false,
        showEmail:false
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .contentWrap
    height 100%
    background-color #F2F5F4
    .content
      .contentTop
        .logoWrap
          height rem(482)
          line-height rem(482)
          vertical-align center
          text-align center
          >img
            width rem(268)
            height rem(90)
            background-size 100% 100%
        .btnWrap
          height rem(220)
          padding 0 rem(40)
          margin-bottom rem(404)
          box-sizing border-box
          .phone
            height rem(94)
            background-color #dd1a2e
            margin-bottom rem(32)
            line-height rem(94)
            text-align center
            color #ffffff
            >i
              position relative
              top rem(10)
              display inline-block
              width rem(40)
              height rem(40)
              margin-right rem(16)
              background-image url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png")
              background-position 0 -.66667rem
              background-size .53333rem 3.86667rem
            >span
              font-size rem(28)
          .email
            height rem(94)
            border 1px solid #dd1a2e
            margin-bottom rem(32)
            line-height rem(94)
            text-align center
            color #dd1a2e
            >i
              position relative
              top rem(10)
              display inline-block
              width rem(40)
              height rem(40)
              margin-right rem(16)
              background-image url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png")
              background-position 0 0
              background-size .53333rem 3.86667rem
            >span
              font-size rem(28)


        .loginWay
          position: absolute;
          width: 100%;
          left: 0;
          bottom: 1.06667rem;
          height: .53333rem;
          text-align: center;
          .itemWrap
            height: .53333rem;
            border-right: 1px solid #979797;
            display: inline-block;
            text-align: center;
            padding: 0 .53333rem;
            .item
              height: .53333rem;
              position: relative;
              top: -.13333rem;
              box-sizing border-box
              .icon
                display: inline-block;
                font-size .37333rem
              .name
                font-size: .37333rem;
                line-height: .53333rem;
                height: .53333rem;
                color: #7F7F7F;
                margin-left: .06667rem;

      .singIn
        width 100%
</style>
