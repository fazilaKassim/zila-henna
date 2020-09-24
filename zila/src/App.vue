
<template>
  <div id="app">
    <Header />
         <main id="main-content">
  
      <router-view />
    </main>
    <Footer />
    
  </div>
</template>

<script>

import Footer from "../src/components/Footer"
import Header from "../src/components/Header"
import auth from "@/auth";
export default {
  beforeCreate() {
    const currentUser = this.$store.getters["user/current"];
    const token = auth.getLocalAuthToken();

    if (token && !currentUser) {
      // console.log("TOKEN OF LOCAL STORAGE : ", token)
      this.$store.dispatch("user/getUserByToken");
    }
  },
  components : {
    Footer,
    Header
  },



}
</script>

<style lang="scss">

</style>
