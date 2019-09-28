<template>
  <div class="categoryList">
    <ListHeader :title="`类目热销榜`"></ListHeader>
    <div class="list">
      <div class="top">
        <a :href="item.targetUrl" class="main"  v-for="(item,index) in categoryList" :key="index">
          <div class="left">
            <span>{{item.categoryName}}</span>
          </div>
          <div class="right">
            <img :src="item.picUrl" alt="">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import _ from 'lodash';
  const OK = 0;
  import ListHeader from 'components/listHeader/listHeader.vue';
  export default {
    name: "categoryList",
    data(){
      return {
        categoryList: [{},{},{},{},{},{},{},{},{},{}]
      }
    },
    components:{
      ListHeader
    },
    async created(){
      const res = await axios.get("/categoryList");
      // console.log(res);
      if (res.data.errno === OK){
        this.categoryList = res.data.data;
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixin.styl"
.categoryList
  width 100%
  .list
    width 100%
    padding 0 rem(20) rem(30) rem(20)
    box-sizing border-box
    overflow hidden
    .top
      /*width rem(340)
      height rem(200)
      display inline*/
      .main
        width rem(340)
        height rem(200)
        &:nth-child(1),&:nth-child(2)
          display inline-block
          width rem(340)
          height rem(200)
          margin 0 rem(10) rem(10) 0
          &:nth-child(1)
            background-color #F9F3E4
          &:nth-child(2)
            background-color #EBEFF6
          .left
            position: relative;
            padding-left: .32rem;
            color: #333;
            font-family: PingFangSC-Medium;
            font-size: .37333rem;
            margin-top: .88rem;
            z-index: 5;
            float left
            >span
              display: inline-block;
              position: relative;
              &:before
                content: '';
                position: absolute;
                left: 0;
                bottom: -.21333rem;
                width: .64rem;
                height: .05333rem;
                background: #333;

          .right
            width rem(200)
            height rem(200)
            float left
            >img
              width rem(200)
              height rem(200)
              background-size 100% 100%
        &:nth-child(3),&:nth-child(4),&:nth-child(5),&:nth-child(6),&:nth-child(7),&:nth-child(8),&:nth-child(9),&:nth-child(10)
          display: block;
          width: 2.2rem;
          height: 2.4rem;
          background: #F5F5F5;
          border-radius: .05333rem;
          float: left;
          margin: 0 .13333rem .13333rem 0;
          box-sizing border-box
          .left
            margin-top: .13333rem;
            text-align: center;
            font-size: .32rem;
            color: #333;
            font-family: PingFangSC-Medium;
            >span
              display inline-block
              margin-top rem(15)
          .right
            width rem(120)
            height rem(120)
            line-height 2.4rem
            vertical-align middle
            text-align center
            >img
              width 100%
              height 100%
              background-size 100% 100%


</style>
