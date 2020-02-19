<template>
  <div id="footerContainer">
      <div :class="{active: $route.path === '/msite'}" @click="goPath('/msite')"  class="guideItem">
          <i  class="iconfont icon-shouye"></i>
          <span>首页</span>
      </div>
      <div :class="{active: $route.path === '/sort'}"  @click="goPath('/sort')" class="guideItem">
          <i  class="iconfont icon-fenlei"></i>
          <span>分类</span>
      </div>
      <div :class="{active: $route.path === '/buy'}" @click="goPath('/buy')" class="guideItem">
          <i  class="iconfont icon-mairu"></i> 
          <span>值得买</span>
      </div>
       <div :class="{active: $route.path === '/cart'}"  @click="goPath('/cart')" class="guideItem">
          <i  class="iconfont icon-gouwuche"></i>
          <span>购物车</span>
      </div>
      <div :class="{active: $route.path === '/personal'}"  @click="goPath('/personal')" class="guideItem">
          <i  class="iconfont icon-profile"></i> 
          <span>个人</span>
      </div>
     

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods: {
          goPath(path){
           path !== this.$route.path && this.$router.push(path)
           

          }
      },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  #footerContainer
    display flex
    position fixed
    width 100%
    height 97px
    left 0
    bottom 0
    border-top 1px solid #eee
    box-sizing border-box
    background #fff
    .guideItem
      width 20%
      height 50%
      margin-top 10px
      text-align center
      display flex
      flex-direction  column
      &.active
        color #B4282D
      .iconfont
        font-size 40px
        line-height 50px
    
        
</style>
