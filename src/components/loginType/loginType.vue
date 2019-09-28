<template>
  <div class="contentWrap">
    <div class="content">
      <div class="contentTop" v-show="showLogin">
        <div class="logoWrap">
          <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          <div class="img"></div>
        </div>
        <div class="btnWrap">
          <div class="phone" @click="loginPhone">
            <i></i>
            <span>手机号快捷登录</span>
          </div>
          <div class="email" @click="loginEmail" >
            <i></i>
            <span>邮箱账号登录</span>
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
      </div>
      <div class="singIn" v-show="!showLogin">
        <div class="logo">
          <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <form>
          <div class="loginMsm login" v-show="showPhone">
            <section class="number">
              <input type="text" placeholder="请输入手机号" v-model="phone" name="phone" v-validate="`required|phone`">
              <span style="color: red" v-show="errors.has('phone')">{{errors.first('phone')}}</span>
            </section>
            <section class="code">
              <input type="text" placeholder="请输入手机验证码" v-model="code" name="code" v-validate="{required:true,regex:/^\d{6}$/}">
              <button :disabled="!isRightPhone || times >0" :class="{highLight:isRightPhone}" @click.prevent="getCode">{{times>0?`${times}s后重发`:"获取验证码"}}</button>
              <span style="color: red" v-show="errors.has('code')">{{errors.first('code')}}</span>
            </section>
            <section class="message">
              <span class="left">遇到问题？</span>
              <span class="right" @click="userLogin">使用密码验证登录</span>
            </section>
            <section class="clause">
              <input type="checkbox">
              <span>我同意 <a href="https://reg.163.com/agreement_mobile.shtml" style="color: blue">《服务条款》</a>和 <a href="https://reg.163.com/agreement_mobile_ysbh.shtml" style="color: blue">《网易隐私政策》</a></span>
            </section>
          </div>
          <div class="loginName login" v-show="showName">
            <section class="number">
              <input type="text" placeholder="请输入手机号" v-model="name" name="name" v-validate="`required`">
              <span style="color: red" v-show="errors.has('name')">{{errors.first('name')}}</span>
            </section>
            <section class="code">
              <input type="text" placeholder="请输入密码" v-model="pwd1" name="pwd1" v-validate="`required`">
              <span style="color: red" v-show="errors.has('pwd1')">{{errors.first('pwd1')}}</span>
            </section>
            <section class="message">
              <span>忘记密码？</span>
              <span @click="phoneLogin">短信登录</span>
            </section>
          </div>
          <div class="loginEmail login" v-show="showEmail">
            <section class="number">
              <input type="text" placeholder="邮箱账号" v-model="email" name="email" v-validate="`required|email`">
              <span style="color: red" v-show="errors.has('phone')">{{errors.first('phone')}}</span>
            </section>
            <section class="code">
              <input type="text" placeholder="密码" v-model="pwd2" name="pwd2" v-validate="`required`">
              <span style="color: red" v-show="errors.has('pwd2')">{{errors.first('pwd2')}}</span>
            </section>
            <section class="message">
              <a href="https://zc.reg.163.com/m/regInitialized?pd=yanxuan&pkid=QyOtTGv&pkht=you.163.com&tp=2&as=3&curl=https%3A%2F%2Fm.you.163.com%2Fucenter">注册账号</a>
              <a href="https://reg.163.com/resetpwd/index.do">忘记密码</a>
            </section>
          </div>
          <button class="loginBtn" @click.prevent="login">登录</button>
        </form>
        <div class="choseWay" @click="showProfile">
          <span>其他登录方式</span>
          <i class="iconfont icon-youjiantou icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'vant';
  const OK = 0;
  const ERROR = 1;
  export default {
    name: "loginType",
    data(){
      return {
        showLogin:true,
        showPhone:false,
        showName:false,
        showEmail:false,
        times:0,
        phone:"",
        code:"",
        pwd1:"",
        email:"",
        name:"",
        pwd2:""
      }
    },
    computed:{
      isRightPhone(){
        return /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/.test(this.phone)
      }
    },
    methods:{
      loginPhone(){
        this.showLogin = false;
        this.showPhone = true;
      },
      loginEmail(){
        this.showLogin = false;
        this.showEmail = true;
      },
      userLogin(){
        this.showLogin = false;
        this.showPhone = false;
        this.showName = true;
      },
      phoneLogin(){
        this.showLogin = false;
        this.showPhone = true;
        this.showName = false;
      },
      showProfile(){
        this.showLogin = true;
        this.showPhone = false;
        this.showName = false;
        this.showEmail = false;
      },
      async getCode(){
        //倒计时
        this.times = 30;
        const timer = setInterval(()=>{
          this.times--;
          if (this.times === 0){
            clearInterval(timer)
          }
        },1000)

        //发送请求
        const res = await this.$http.login.sendCode({
          phone:this.phone
        });
        (res.code === OK)&&(this.times = 0);
        (res.code === ERROR)&&(Toast.fail('验证码发送失败'))

      },
      async login(){
        if (this.showPhone){
          const success = await this.$validator.validateAll(["phone","code"]); // 对指定的所有表单项进行验证
          if(success){
            const res = await this.$http.login.loginSms({
              phone:this.phone,
              code:this.code
            })
            console.log(res);
          }
          /*(success && this.$http.login.loginSms({
            phone:this.phone,
            code:this.code
          }))*/
        } else if (this.showName){
          const success = await this.$validator.validateAll(["name","pwd1"]); // 对指定的所有表单项进行验证
          if(success){
            const res = await this.$http.login.loginSms({
              name:this.name,
              pwd1:this.pwd1
            })
            console.log(res);
          }
          /*(success && this.$http.login.loginSms({
            phone:this.phone,
            pwd:this.pwd
          }))*/
        }
      },
    }

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
        position fixed
        left 0
        top rem(88)
        width 100%
        height 100%
        background-color #ffffff
        .logo
          width 100%
          height rem(64)
          margin-top rem(56)
          text-align center
          >img
            width rem(192)
            height rem(64)
            background-size 100% 100%

        >form
          width 100%
          padding 0 rem(40)
          box-sizing border-box
          margin-top rem(100)
          .login
            width 100%
            box-sizing border-box
            font-size rem(28)
            position relative
            .number
              width 100%
              height rem(90)
              line-height rem(90)
              border-bottom 1px solid #7e8c8d
              margin-bottom rem(15)
            .code
              width 100%
              height rem(90)
              line-height rem(90)
              border-bottom 1px solid #7e8c8d
              position relative
              margin-bottom rem(15)
              >button
                display inline-block
                width rem(164)
                height rem(52)
                line-height rem(52)
                text-align center
                border 1px solid #7e8c8d
                position absolute
                right rem(20)
                top rem(20)
                background-color transparent
                &.highLight
                  color #2ca556
                  border-color #baffa8
            .message
              display flex
              justify-content space-between
              padding rem(40) 0 0 0
              margin-bottom rem(15)
            .clause
              position absolute
              top rem(450)
              display flex
              align-items center
              >input
                width rem(28)
                height rem(28)
                outline none
                border none
                background-color #ffffff
                margin-right rem(5)
          .loginBtn
            width 100%
            height rem(90)
            line-height rem(90)
            text-align center
            font-size rem(28)
            background-color #DD1A21
            margin-top rem(30)
            outline none
            border none
        .choseWay
          position absolute
          left 0
          right 0
          top rem(747)
          text-align center
          font-size rem(28)
          .icon
            font-size rem(28)
            margin-left rem(5)
</style>
