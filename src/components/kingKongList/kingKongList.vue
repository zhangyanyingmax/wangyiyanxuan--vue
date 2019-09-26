<template>
  <ul class="kingKongList">
    <li v-for="item in kingKongList">
      <img :src="item.picUrl" alt="">
      <div>{{item.text}}</div>
    </li>
  </ul>
</template>

<script>
  import axios from 'axios';
  const OK = 0;
  export default {
    name: "kingKongList",
    data(){
      return {
        kingKongList:[]
      }
    },
    async created(){
      const res = await axios.get("/kingKongList");
      // console.log(res);
      if (res.data.errno === OK){
        this.kingKongList = res.data.data
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixin.styl"
  .kingKongList
    width 100%
    overflow hidden
    >li
      width rem(110)
      height rem(156)
      margin rem(10) rem(20)
      box-sizing border-box
      float left
      >img
        width rem(110)
        height rem(110)
      >div
        font-size rem(24)
        text-align center
        margin-top rem(10)
</style>
