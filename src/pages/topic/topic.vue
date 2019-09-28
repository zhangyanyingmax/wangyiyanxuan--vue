<template>
  <div class="topic">
    <ProfileHeader>
      <template>
        <span class="active">发现</span>
        <span>甄选家</span>
      </template>
    </ProfileHeader>
  </div>
</template>

<script>
  import ProfileHeader from 'components/profileHeader/profileHeader.vue';
  export default {
    name: "topic",
    components:{
      ProfileHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixin.styl"
  .topic
    width 100%
    /deep/.header
      height rem(100)
      background-color #fafafa
      border-bottom 2px solid #000
      .headerMain
        height 100%
        .logo
          width rem(320)
          height 100%
          line-height rem(100)
          text-align center
          margin-left rem(50)
          >span
            font-size rem(28)
            display inline-block
            padding 0 rem(16)
            color #7F7F7F
            &.active
              font-size rem(40)
              color #b4282d
              font-weight bold
</style>
