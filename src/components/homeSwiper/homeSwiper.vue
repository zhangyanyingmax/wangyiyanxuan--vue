<template>
  <div class="home-swiper">
    <van-swipe :autoplay="3000" indicator-color="red" @change="onChange">
      <van-swipe-item v-for="(item,index) in focusList" :key="index">
        <img class="picture"  :src="item.picUrl" alt="">
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">
        <i class="line" v-for="(item,index) in focusList" :key="index" :class="{active:currenIndex === index}"></i>
      </div>
    </van-swipe>
  </div>
</template>

<script>
  import {Swipe, SwipeItem} from 'vant';
  import axios from 'axios';
  const OK = 0;
  export default {
    name: "homeSwiper",
    data(){
      return {
        focusList: [],
        currenIndex:0
      }
    },
    methods:{
      onChange(index) {
        // console.log(this.currenIndex, index);
        this.currenIndex ++;
        // console.log(this.currenIndex, index);
        if (this.currenIndex === 8){
          this.currenIndex = 0;
        }
      }
    },
    components:{
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem
    },
    async created(){
      const res = await axios.get("/focusList");
      // console.log(res);
      if (res.data.errno === OK){
        this.focusList = res.data.data;
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixin.styl"
.home-swiper
  width 100%
  height rem(370)
  .picture
    width 100%
    height rem(370)
    background-size 100% 100%
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
      background-color #cecece
      margin-right rem(10)
      &.active
        background-color #b4282d


</style>
