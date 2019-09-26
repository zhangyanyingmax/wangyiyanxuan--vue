<template>
  <div class="newActivity">
    <div class="title">
      <span class="text">新人专享礼</span>
    </div>
    <div class="content">
      <div class="left">
        <div class="text">新人专享礼包</div>
        <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
      </div>
      <ul class="right" >
        <li>
          <div class="subtitle">{{newActivity[0].title}}</div>
          <div class="tag">{{newActivity[0].subTitle}}</div>
          <img :src="newActivity[0].showPicUrl" alt="">
        </li>
        <li>
          <div class="subtitle">{{newActivity[1].title}}</div>
          <div class="tag">{{newActivity[1].tag}}</div>
          <img :src="newActivity[1].showPicUrl" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  const OK = 0;
  export default {
    name: "newActivity",
    data(){
      return {
        newActivity: [{},{}]
      }
    },
    async created(){
      const res = await axios.get("/indexActivityModule");
      // console.log(res);
      if (res.data.errno === OK){
        this.newActivity = res.data.data;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixin.styl"
.newActivity
  width 100%
  padding-bottom rem(30)
  .title
    padding 0 rem(30)
    height rem(90)
    text-align center
    .text
      display block
      height rem(90)
      line-height rem(90)
      text-align center
      font-size rem(32)
      position relative
      &:before
        content ""
        display block
        width rem(24)
        height rem(3)
        background-color #333333
        position absolute
        left rem(220)
        top rem(40)
      &:after
        content ""
        display block
        width rem(24)
        height rem(3)
        background-color #333333
        position absolute
        right rem(220)
        top rem(40)

  .content
    padding-left rem(30)
    overflow hidden
    .left
      float left
      width rem(343)
      height rem(434)
      background-color #F9E9C5
      .text
        font-size rem(32)
        padding rem(30) 0 0 rem(30)
      >img
        width rem(258)
        height rem(258)
        margin-top rem(50)
        margin-left rem(20)

    .right
      float left
      margin-left rem(5)
      >li
        width rem(343)
        height rem(215)
        position relative
        margin 0 rem(4) rem(4) 0
        padding rem(20) 0 0 rem(30)
        box-sizing border-box
        .subtitle
          font-size rem(32)
          color #333333
        .tag
          font-size rem(24)
          color #7F7F7F
          margin-top rem(10)
        >img
          width rem(200)
          height rem(200)
          position absolute
          right 0
          bottom 0
        &:nth-child(1)
          background-color #ffc5c5
          margin-bottom rem(5)
        &:nth-child(2)
          background-color #ffe9ac
          .tag
            width rem(120)
            height rem(32)
            background-color #CBB693
            padding 0 rem(10)
</style>
