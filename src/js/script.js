import Vue from 'vue';
import * as uiv from 'uiv';
Vue.use(uiv)

new Vue({
  el:'#app',
  data:{
    form: {
      name: '',
      version: '',
      author: '',
      license: '',
      description: '',
      repositoryType: '',
      repositoryURL: '',
      bugsURL: '',
      homepage: '',
    }
  },
  components: {
    uiv
  }
});
