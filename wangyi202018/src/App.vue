<template>
  <div id="appContainer">
    <router-view></router-view>
    <FooterGuide/> 
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name:'app',
    components: {FooterGuide}
  }
</script>

<style lang="stylus">
  #appContainer
    width  100%
    height 100%
 
</style>
