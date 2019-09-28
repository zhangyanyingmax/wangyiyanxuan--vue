<template>
  <div class="tagList">
    <ListHeader :title="`品牌制造商直供`">
      <template>
        <a href="https://m.you.163.com/manufacturer/list" class="right" >
          <span class="more">更多</span>
          <i class="iconfont icon-youjiantou">
          </i>
        </a>
      </template>
    </ListHeader>
    <ul class="list">
      <li v-for="item in tagList" :style="{backgroundImage:'url(' + item.webIndexVerticalPicUrl + ')'}">
        <a href="https://m.you.163.com/item/manufacturer?tagId=1080000&page=1&size=100"  >
         <div class="text">
           <h4>{{item.name}}</h4>
           <span>{{item.floorPrice}} 元起</span>
         </div>
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
    name: "tagList",
    data(){
      return {
        tagList: []
      }
    },
    components:{
      ListHeader
    },
    async created(){
      const res = await axios.get("/tagList");
      // console.log(res);
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
    .list
      width 100%
      position: relative;
      overflow: hidden;
      background: #fff;
      margin-bottom: .26667rem;
      padding: 0 .34667rem .34667rem .4rem;
      box-sizing border-box
      >li
        display inline-block
        position: relative;
        margin: 0 .05333rem .05333rem 0;
        width: 4.57333rem;
        height: 3.46667rem;
        overflow: hidden;
        background-color: #eee;
        border-radius: .05333rem;
        background-size 100% 100%
        text-align center
        box-sizing border-box
        >a
          .text
            padding-top rem(23)
            >h4
              font-size rem(28)
              margin-bottom rem(3)
            >span
              font-size rem(24)



</style>
