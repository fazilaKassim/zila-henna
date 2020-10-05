import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import produit from "./produit";

// READ THE DOC !!!
// https://vuex.vuejs.org/fr/api/
// https://vuex.vuejs.org/fr/api/#modules

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    produit,
    user
  }
});
