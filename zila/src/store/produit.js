import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
Vue.use(Vuex);

export default ({
  namespaced: true,
  state: {
   produits: []
},

mutations : {
  setProduits(state, produits){
    state.produits = produits;
  }
},

getters : {
  produits(state){
    return state.produits;
  }
},

actions : {
  exemple(context){
    return "lala";
  },

  getProduits(context){
    //appel back must async . async tj avec await . await tj avant axios
    // const produits = await axios.get(process.env.VUE_APP_BACKEND_URL + "/produit");
    // context.commit("getAll",produits.data);
    // // console.log(produits);
    // return produits;

    return new Promise((resolve, reject) => {
      axios
        .get(process.env.VUE_APP_BACKEND_URL + "/produit")
        .then(res => {
          context.commit("setProduits", res.data);
          resolve(res);
        })
        .catch(err => {
          // auth.deleteLocalAuthToken();
          context.commit("setProduits",null);
          reject(err);
        });
    });

  },

  signin(context, userInfos) {
    return new Promise((resolve, reject) => {
      handler
        .post("/users/connexion", userInfos)
        .then(res => {
          auth.setLocalAuthToken(res.data.token);
          context.commit("setCurrent", res.data.user);
          resolve(res);
        })
        .catch(err => {
          auth.deleteLocalAuthToken();
          context.commit("setCurrent", null);
          reject(err);
        });
    });
  },
}

  

});
