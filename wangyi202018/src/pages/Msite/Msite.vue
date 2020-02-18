<template>
   <header>
     
     <div class="up">
       
        <a class="logo" href="http://m.you.163.com/"></a>
        <input type="text">
     </div>
     <div class="down">
      <ul class="List">
        <li> <a href="">推荐</a></li>
        <li> <a href="">居家生活</a></li>
        <li> <a href="">服饰鞋包</a></li>
        <li> <a href="">美食酒水</a></li>

       <a href="" class="iconfont icon-xiangxia"></a>
      </ul>



     </div>
     <div class="swiper-container">
       <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/fab8d20a9f2f0917b0407d7975f88c9b.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/100b633b1b237e0102458bbf4d851cb9.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/d07b67ea9c932581b4f77d4d4557d0f3.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/e2369c2ca966a30cf7befe65886f8b73.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/0c5c338874b7a0348142b29fd1775fc6.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/011457496bbfe7a7430640a8e56338ab.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/5891a3b478e4cfdc9d47a50e4d9d367b.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/b2595d342733647008a941ad3ba9914d.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0">
          </div>
      </div>
       <div class="swiper-pagination"></div>
    </div>
   </header>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.css'
  export default {
    mounted(){
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: 5000,//可选选项，自动滑动
      pagination : {
        el:'.swiper-pagination',
        
      },
      loop:true
    })
  }
  }
  
</script>

<style lang="stylus" scoped>

   header
     width 100%
     height 148px
     .up
       width 150px
       height 78px
       .logo
         width 138px
         height 40px
     .down
       .List
         width 100%
         li
           a
              float left
            
                  
             
     .swiper-container
       width 100%
       height 370px
      /deep/.swiper-pagination
       >span.swiper-pagination-bullet-active
            background #B4282D
     

 
</style>
