
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

export default {
  components : {
    Footer,
    Header
  }
}
</script>

<style lang="scss">

</style>
