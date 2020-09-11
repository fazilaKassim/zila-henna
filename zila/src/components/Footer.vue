<template>
  <footer>
    <section id="footer">
      <article class="footer footer-logo">
        <img src="../assets/img/logo.png" alt="" class="footer-logo" />
      </article>
      <article class="footer footer-info">
        <h2 class="footer-titre">INFORMATION</h2>
        <router-link to="#">Contact</router-link>
        <router-link to="#">Condition d'utilisation</router-link>
        <router-link to="#">Mention légales</router-link>
        <router-link to="#">A propos</router-link>
      </article>
      <article class="footer footer-menu">
        <h2 class="footer-titre">PLAN DU SITE </h2>
        <router-link to="#">Boutique</router-link>
        <router-link to="#">Galerie</router-link>
        <router-link to="#">Tarifs</router-link>
        <router-link to="#">Rendez-vous</router-link>
      </article>
      <article class="footer footer-rs">
          <a href="https://www.instagram.com/zilahenne/" target="_blank"><img src="../assets/img/insta.png" alt="" class="rs-logo" /></a>
          <a  href="https://www.facebook.com/ZilaHenne/" target="_blank"><img src="../assets/img/fb.png" alt="" class="rs-logo" /></a>
           <a  href="https://www.facebook.com/ZilaHenne/" target="_blank">  <img src="../assets/img/snap.png" alt="" class="rs-logo" /></a>
      </article>
    </section>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {

  width: 100%;
  height: 20vh;
 
}
#footer {
  width: 100%;
  height:300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 0px;

   
}
h2{
    color:rgb(200, 156, 98) ;
    font-size: 18px;
     font-family: "Bellota", cursive;
     

}

/* logo */
article.footer-logo {
  grid-area: 1 / 1 / 2 / 2;
}

.footer-logo {
  width: 150px;
  margin: auto;
}

/* section information*/
article.footer-info,
.footer-menu {
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* section menu */
article.footer-menu {
  grid-area: 1 / 3 / 2 / 4;
}


/* section reseau sociaux */
article.footer-rs {
  grid-area: 1 / 4 / 2 / 5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.rs-logo{
  width:60px;
 margin:10px;
};
</style>
