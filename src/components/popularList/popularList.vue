<template>
  <div class="popularList">
    <ListHeader :title="`人气推荐`">
      <template>
        <a href="" class="right" >
          <span class="more">更多</span>
          <i class="iconfont icon-youjiantou">
            <a href=""></a>
          </i>
        </a>
      </template>
    </ListHeader>
    <a href="" class="mainTop" >
      <div class="left">
        <img :src="popularList[0].showPicUrl" alt="">
      </div>
      <div class="right">
        <div class="one">{{popularList[0].itemTagList[0].name}}</div>
        <div class="tow">{{popularList[0].name}}</div>
        <div class="three">{{popularList[0].simpleDesc}}</div>
        <div class="four">￥{{popularList[0].retailPrice}}</div>
      </div>
    </a>
    <ul class="mainBottom">
      <li class="list">
        <a href="">
          <div class="first">
            <img src="" alt="">
          </div>
          <div class="second">
            <span></span>
            <span>￥</span>
          </div>
          <div class="third">
            <span></span>
            <span></span>
          </div>
          <div class="fourth">

          </div>
          <div class="fifth"></div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  import ListHeader from 'components/listHeader/listHeader.vue';
  const OK = 0;
  export default {
    name: "popularList",
    data(){
      return {
        popularList: [{},{},{},{}]
      }
    },
    components:{
      ListHeader
    },
    async created(){
      const res = await axios.get("/popularItemList");
      console.log(res);
      if (res.data.errno === OK){
        this.popularList = res.data.data;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixin.styl"
  .popularlist
    width 100%
    .mainTop
      width 100%
      height rem(280)
      margin 0 .4rem .2667rem
      display flex
      flex-flow row nowrap
      align-items center
      background-color #FEF0DF
      .left
        width rem(280)
        height rem(280)
        >img
          width rem(280)
          height rem(280)
          background-size 100% 100%



</style>
