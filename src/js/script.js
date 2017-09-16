import Vue from 'vue';
import * as uiv from 'uiv';
Vue.use(uiv)

new Vue({
  el:'#app',
  data:{
    message: 'example project'
  },
  components: {
    uiv
  }
});
