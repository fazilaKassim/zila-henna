 <template>
  <nav id="nav-mobile" :class="isActive && 'is-active'">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  created() {
    // $on prend un event-custom en param 1 (string)
    // et exécute un callback (param2) quand l'event survient...
    this.$ebus.$on("toggle-nav-mobile", () => {
      console.log(
        "hey : je suis nav mobile et je réagis à l'event custom <<toggle-nav-mobile>>"
      );
      this.isActive = !this.isActive;
    });
  }
};
</script>

<style lang="scss" scoped>
#nav-mobile {
  top: 90px;
  position: fixed;
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 90px);
  background: #2c3e50;
  transform: translateX(-220px);
  transition: transform 0.5s ease-in-out;

  a {
    font-weight: bold;
    color: whitesmoke;
    margin: 0 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#nav-mobile.is-active {
  transform: translateX(0);
}
</style>
