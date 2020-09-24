<template>
  <div id="condition-bg">
    <section id="condition">
      <h1>Condition d'utilisation</h1>
     
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    created() {
      console.log(this.$store.getters["user/current"]);
    },
    currentUser() {
      const userInfos = this.$store.getters["user/current"]; // récupère l'user connecté depuis le store/user
      return userInfos; // retourne les infos, desormais accessible dans le component sous le nom currentUser
    },
  },
};
</script>

<style scoped>
#condition-bg {
  background: url("../assets/img/flower.jpg");
  height: auto;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px;
}
#condition {
  width: 70%;
  background: white;
  margin: auto;
  height: 80vh;
}
h1 {
  color: black;
  text-align: center;
  padding: 40px;
}
</style>
