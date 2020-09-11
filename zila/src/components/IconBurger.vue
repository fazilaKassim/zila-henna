<template>
  <font-awesome-icon id="burger" icon="bars" @click="toggleNavMobile" />
</template>

<script>
// https://github.com/FortAwesome/vue-fontawesome
// import Vue from "vue";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars);
Vue.component("font-awesome-icon", FontAwesomeIcon);

export default {
  methods: {
    toggleNavMobile() {
      console.log("clicked burger", this.$ebus);
      this.$ebus.$emit("toggle-nav-mobile");
    }
  }
};
</script>

<style scoped>
#burger {
  cursor: pointer;
}
</style>