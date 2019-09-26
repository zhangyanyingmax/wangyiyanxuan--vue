<template>
  <ul class="descList">
    <li v-for="item in descList">
      <img :src="item.icon" alt="">
      <span>{{item.desc}}</span>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';
const OK = 0;
  export default {
    name: "policyDescList",
    data(){
      return {
        descList: []
      }
    },
    async created(){
      const res = await axios.get("/policyDescList");
      // console.log(res);
      if (res.data.errno === OK){
        this.descList = res.data.data;
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixin.styl"
  .descList
    width 100%
    height rem(72)
    padding 0 rem(30)
    box-sizing border-box
    display flex
    justify-content space-around
    align-items center
    >li
      display flex
      align-items center
      >img
        width rem(32)
        height rem(32)
      >span
        font-size rem(24)
        margin-left rem(8)
</style>
