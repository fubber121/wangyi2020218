import Vue from 'vue'
import 'lib-flexible/flexible'

import router from './router'
import {Search } from 'mint-ui'

import GHeader from './components/GHeader/Gheader.vue'


import App from './App.vue'

Vue.component(Search.name, Search)
// Vue.component('GHeader',Gheader)
Vue.component('GHeader',GHeader)
Vue.config.productionTip = false

import 'swiper/css/swiper.min.css'

new Vue({
  el:'#app',
  components: {App},
  template:'<App />',
  router
})
