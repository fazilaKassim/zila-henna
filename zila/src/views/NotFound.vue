<template>
  <div id="not-found">
    <section id="content-found">
      <h1>Oups, une erreur c'est produite !!</h1>
      <img src="../assets/img/404-error.jpg" alt="" />

      <h2>Cette page est introuvable !!</h2>
      <p>
        La page que vous tentez d'afficher n'existe pas ou une autre erreur
        s'est produite. <br /></p> <p>
        Vous pouvez revenir à la page précédente ou aller à la
        <router-link to="/"> page d'accueil</router-link>.
      </p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
#not-found {
  background: url("../assets/img/flower.jpg");
  height: auto;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px;
}
#content-found {
  width: 70%;
  background: white;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 70px;
}
h1 {
  color: black;
  text-align: center;
  padding: 40px;
}
a {
  color: var(--gld);

}
</style>
