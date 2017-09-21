import Vue from 'vue';
import * as uiv from 'uiv';
Vue.component('vueTypeahead', require('vuejs-autocomplete'));

Vue.use(uiv)

new Vue({
  el: '#app',
  data: {
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
      devDependencies: '',
      dependencies: '',
    },
    function() {
      return {
        label: '',
        value: '',
        value1: '',
        myTemplate: '<div><h3>{{team}}</h3><h4>Custom Template</h4></div>',
        localValues: ['Dhaka', 'Rangpur', 'Rajshahi', 'Sylhet', 'Khulna']
      }
    },
  },
  components: {
    uiv
  },
  methods: {
    done: function(data) {
      console.log(data);
    }
  }
});

const app = new Vue({
  el: '#app',
  data: function() {
    return {
      label: '',
      value: '',
      value1: '',
      myTemplate: '<div><h3>{{team}}</h3><h4>Custom Template</h4></div>',
      localValues: ['Dhaka', 'Rangpur', 'Rajshahi', 'Sylhet', 'Khulna']
    }
  },

});
