<template>
  <div class="tagList">
    <div class="title">
      <span class="left">品牌制造商直供</span>
      <a href="#" class="right">
        <span class="more">更多</span>
        <i class="iconfont icon-youjiantou"></i>
      </a>
    </div>
    <ul class="list">
      <li v-for="item in tagList">
        <a href="#">
          <h4>{{item.name}}</h4>
          <span>{{item.floorPrice}} 元起</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';
  const OK = 0;
  export default {
    name: "tagList",
    data(){
      return {
        tagList: []
      }
    },
    async created(){
      const res = await axios.get("/tagList");
      console.log(res);
      if (res.data.errno === OK){
        this.tagList = res.data.data;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixin.styl"
  .tagList
    width 100%
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


    .list
      padding 0 rem(26) rem(26) rem(30)
      >li
        width rem(343)
        height rem(260)
        margin 0 rem(4) rem(4) 0
        float left


</style>
