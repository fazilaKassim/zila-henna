import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAgile from 'vue-agile'

 
Vue.use(VueAgile)
Vue.prototype.$ebus = new Vue();


new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");

