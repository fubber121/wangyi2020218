<template>
  
    <header class="header">
      <img class="logo" src="../../common/image/indexLogo-a90bdaae6b.webp" alt="">
      <div class="searchInput">
         <i class="iconfont icon-sousuo"></i>
         <input type="text" placeholder="搜索商品" placeholder-class="placholder" disabled>
      </div>
      <span>登录</span>
    </header>
  
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    display flex
    width 100%
    height 88px
    padding 10px
    vertical-align middle

    .logo
      width 138px
      height 40px
      margin 10px 30px 
    .searchInput
      height 80px
      width 440px
      background #ededed
      position relative
      border-radius 10px
      .iconfont
        font-size 30px
        position absolute
        left 10px
        top 25%
      input
        border-radius 10px
        height 80px
        width  390px
        margin-left 50px
      .placeholder
        font-size  24px
        color #666
    span     
      width 74px
      height 80px
      color #b4282d
      line-height  80px
      text-align center
      font-size 16px
      margin 0 20px   
</style>
