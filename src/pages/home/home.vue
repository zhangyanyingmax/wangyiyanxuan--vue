<template>
  <div class="home">
    <div class="top">
      <HomeHeader>
        <template slot="left">
          <img class="logo" src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="logo">
        </template>
        <template slot="right">
          <button class="btn">登录</button>
        </template>
      </HomeHeader>
      <nav class="nav">
        <div class="navUl" ref="navWrapper">
          <ul class="navList" ref="listWrapper" v-show="isShow">
            <li>推荐</li>
            <li>居家生活</li>
            <li>服饰鞋包</li>
            <li>美食酒水</li>
            <li>个护清洁</li>
            <li>母婴亲子</li>
            <li>运动旅行</li>
            <li>数码家电</li>
            <li>全球特色</li>
          </ul>
          <div class="mask"  v-show="!isShow">
            <div class="maskTop">
              <h3>全部频道</h3>
              <ul class="maskList">
                <li class="active">推荐</li>
                <li>居家生活</li>
                <li>服饰鞋包</li>
                <li>美食酒水</li>
                <li>个护清洁</li>
                <li>母婴亲子</li>
                <li>运动旅行</li>
                <li>数码家电</li>
                <li>全球特色</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="navLine"></div>
        <div class="navBtn" @click="showMask">
          <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png" alt="" ref="maskBtn">
        </div>
      </nav>
    </div>
    <div class="contentWrap" >
      <div style="width: 100%;height: 100%" ref="contentWrap">
        <div class="content" ref="content">
          <HomeSwiper class="swiper"></HomeSwiper>
          <PolicyDescList class="descList"></PolicyDescList>
          <div class="contentList">
            <KingKongList class="kingList"></KingKongList>
            <NewActivity class="newActivity"></NewActivity>
            <TagList class="tagList"></TagList>
            <CategoryList class="categoryList"></CategoryList>
            <!--<PopularList></PopularList>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import HomeSwiper from 'components/homeSwiper/homeSwiper.vue';
  import PolicyDescList from 'components/policyDescList/policyDescList.vue';
  import KingKongList from 'components/kingKongList/kingKongList.vue';
  import NewActivity from 'components/newActivity/newActivity.vue';
  import TagList from 'components/tagList/tagList.vue';
  import CategoryList from 'components/categoryList/categoryList.vue';
  import PopularList from 'components/popularList/popularList.vue';
  import HomeHeader from 'components/homeHeader/homeHeader.vue';
  export default {
    name: "home",
    data(){
      return {
        isShow: true,
        top:0
      }
    },
    methods:{
      initListScroll(){
        if (!this.listScroll){
          this.listScroll = new BScroll(this.$refs.navWrapper,{
            startX:0,
            scrollX:true
          })
        }else{
          this.listScroll.refresh();
        }
      },
      initContentScroll(){
        if (!this.homeScroll){
          this.homeScroll = new BScroll(this.$refs.contentWrap,{
            startY:0,
            scrollY:true,
            click:true
          })
        }else{
          this.homeScroll.refresh();
        }
      },
      showMask(){
        this.isShow = !this.isShow;
        const btn = this.$refs.maskBtn;
        if (this.isShow){
          btn.style.transform = "rotate(0deg)";
        } else{
          btn.style.transform = "rotate(180deg)";
        }
      }
    },
    components:{
      HomeHeader,
      HomeSwiper,
      PolicyDescList,
      KingKongList,
      NewActivity,
      TagList,
      CategoryList,
      PopularList
    },
    mounted(){
      this.$nextTick(() => {
        this.initListScroll();
      });
      this.$nextTick(() => {
        this.initContentScroll();
      })
    },
    updated(){
      this.$nextTick(() => {
        this.initListScroll();
      });
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixin.styl"
.home
  width 100%
  height 100%
  position relative
  .top
    position fixed
    top 0
    left 0
    height rem(148)
    background-color #ffffff
    z-index 99
    .nav
      width 100%
      height rem(60)
      position absolute
      top rem(88)
      left 0
      .navUl
        width 80%
        height 100%
        .navList
          white-space: nowrap;
          overflow hidden
          float: left;
          position relative
          z-index 1
          padding-left rem(30)
          li
            height: rem(60);
            line-height: rem(60);
            text-align: center;
            display: inline-block;
            font-size rem(28)
            padding 0 rem(20)
            &:nth-child(1)
              &:after
                content ""
                display block
                width rem(88)
                height 3px
                background-color #b4282d
                position absolute
                left rem(30)
                bottom 0
        .mask
          width 100%
          height 100%
          background-color rgba(0,0,0,.5)
          position fixed
          top 1.25rem
          left 0
          z-index 10
          .maskTop
            background-color #ffffff
            height rem(400)
            >h3
              height rem(60)
              line-height rem(60)
              font-size rem(28)
              padding-left rem(30)
            .maskList
              padding-top rem(24)
              >li
                width rem(150)
                height rem(56)
                line-height rem(56)
                text-align center
                float left
                font-size rem(24)
                border 1px solid #cccccc
                margin 0 0 rem(40) rem(30)
                &.active
                  border 1px solid #b4282d
                  color #b4282d


    .navLine
      position absolute
      z-index 2
      right rem(100)
      top 0
      width rem(60)
      height  rem(60)
      background-color #ffffff
    .navBtn
      position absolute
      background-color #ffffff
      z-index 99
      top 0
      right 0
      width rem(100)
      height rem(60)
      text-align center
      >img
        width rem(30)
        height rem(30)
        margin-top rem(15)
        transition .3s all linear
  .contentWrap
    width 100%
    height 100%
    box-sizing border-box
    padding rem(148) 0 rem(98)
    .content
      .contentList
        background-color #f3f3f3
        .kingList
          background-color #ffffff
        .newActivity
          margin rem(20) 0
          background-color #ffffff
        .tagList
          background-color #ffffff
          margin-bottom rem(20)
        .categoryList
          margin-bottom rem(20)
          background-color #ffffff




</style>
