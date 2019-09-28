<template>
  <div class="profile">
    <ProfileHeader></ProfileHeader>
    <div class="headerLine"></div>
    <LoginType></LoginType>

  </div>
</template>

<script>
  import ProfileHeader from 'components/profileHeader/profileHeader.vue';
  import LoginType from 'components/loginType/loginType.vue';
  export default {
    name: "profile",
    components:{
      LoginType,
      ProfileHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixin.styl"
  .profile
    width 100%
    height 100%
    .headerLine
      border-1px-bottom(red)

</style>
