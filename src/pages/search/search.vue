<template>
  <div class="search">
    <div class="header">
      <form action="/" class="input">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
  </div>
</template>

<script>
  import { Search } from 'vant';
  export default {
    name: "search",
    data(){
      return {
        value:""
      }
    },
    methods:{
      onSearch(){

      },
      onCancel(){
        this.$router.back()
      }
    },
    components:{
      [Search.name]:Search
    }
  }
</script>
<!--van-search__content van-search__content&#45;&#45;square-->
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixin.styl"
  .search
    width 100%
    height 100%
    .header
      height rem(88)
      padding 0 rem(30)
      .van-search__content
        width rem(604)
        height rem(56)
        padding 0 rem(20)
        .van-field__left-icon
          width rem(30)
          height rem(30)
          .van-icon
            font-size rem(30)!important
        .van-field__control
          font-size rem(24)
      .van-search__action
        font-size rem(28)
</style>
