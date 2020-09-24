<template>
  <header>
    <div id="head">
      <div class="grid-container">
            <!-- <IconBurger /> -->
        <div class="search">
          <input type="search" name="search" id="search" placeholder="search" />
          <!--input search -->

          <router-link to="#">
            <!--link vers la page des resultats de recherche-->
            <img src="../assets/img/loupe.png" alt="" class="icon-loupe" />
            <!--icon loupe search -->
          </router-link>
        </div>

        <div class="logo">
          <router-link to="index.html" id="logo">
          ZILA HENNE
            <!-- <img src="../assets/img/logo.png"> -->
          </router-link>
        </div>

        <div class="icon-log">
          <!-- icon connexion et panier -->
          <ul class="icon two">
            <li>
              <router-link  to="Connexion"> <!-- v-if="!isSignedIn" -->
                <img
                  src="../assets/img/profillogo.png"
                  alt=""
                  class="icon flex-vertical"
              /></router-link>

            <li>
              <!-- <router-link  v-if="isSignedIn" to="/dashboard">
                <img
                  src="../assets/img/profillogo.png"
                  alt=""
                  class="icon flex-vertical"
              /></router-link> -->
              <!-- panier -->
            </li>
            <li>
              <router-link to="Inscription">
                <img
                  src="../assets/img/panier.png"
                  alt=""
                  class="icon flex-vertical"
              /></router-link>
              <!-- icon panier -->
            </li>
          </ul>
        </div>
        <hr />
        <!--trait de separation entre la navbar et le logo  -->
        <div class="navbar">
          <!--navigation bar  -->
          <nav role="navigation" >
            <ul class="nav-links">
              <li><router-link to="/">Accueil</router-link></li>
              <li><router-link to="/boutique">Boutique </router-link></li>
              <li><router-link to="/galerie">Galerie</router-link></li>
              <li><router-link to="/tarifs">Tarifs</router-link></li>
              <li><router-link to="/rendezVous">Rendez-vous</router-link></li>
            </ul>
          </nav>
        </div>

<!-- credit to mohit bajoria (npmjs.com)-->
         <Slide id="menu-burger" noOverlay :closeOnNavigation="true" width="400">
      
            <ul class="nav-links">
              <li><router-link to="/">Accueil</router-link></li>
              <li><router-link to="/boutique">Boutique</router-link></li>
              <li><router-link to="/galerie">Galerie</router-link></li>
              <li><router-link to="/tarifs">Tarifs</router-link></li>
              <li><router-link to="/rendezVous">Rendez-vous</router-link></li>
            </ul>
      
    </Slide>

      </div>
    </div>
  </header>
</template>

<script>
import vue from "vue";
import auth from "@/auth";
import { Slide } from 'vue-burger-menu';
// import IconBurger from "@/components/IconBurger"

export default {
    data() {
    return {
      auth,
      isActive: false
    };
  },
//   computed: {
//   isSignedIn() {
//     return Boolean(this.$store.getters["user/current"]);
//   },

  components: {
      Slide // Register your component
  }
// }
};
</script>

<style lang="scss" >
body {
  background: black;
}

header {
  width: 100%;
  margin-top: 10px;
  min-width: 500px;
}
.flex-vertical {
  display: flex;
  flex-direction: row;
}

#head {
  display: flex;
  // flex-direction: row;

  height: auto;
  padding: 50px 100px 0px;
}

.grid-container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 0.5fr 0.1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

// search
.search {
  padding-top: 20px;
  grid-area: 1 / 1 / 3 / 6;

}
#search {
  background-color: black;
  height: 30px;
  border-bottom: 1px solid rgb(200, 156, 98);
  border-top: inherit;
  border-left: inherit;
  border-right: inherit;
  outline: 0;
    min-width:60px;
  max-width: 150px;
  color: white;
}

#search::placeholder {
  font-family: "Bellota", cursive;
  color: rgb(200, 156, 98);
  margin: 20px;
}
.icon-loupe {
  width: 30px;
  list-style: none;
}
// logo
.logo {
  grid-area: 1 / 2 / 2 / 3;
  width: 100%;
  text-align: center;

}


#logo {
  text-decoration: none;
  height: auto;
  font-size: 36px;
  font-weight: 700;
  color: white;

}

// icon connexion

.icon-log {
  grid-area: 1 / 3 / 2 / 4;
}
.icon {
  display: flex;
  flex-direction: row;
  list-style: none;
  float: right;
  justify-content: center;
  align-items: center;
}

.icon li a img {
  width: 65px;
  padding-left: 25px;
}

// trait de separation

hr {
  grid-area: 2 / 1 / 3 / 4;
  border: 0.5px solid rgba(200, 156, 98, 40%);
  opacity: 40%;
  overflow: visible;
  margin: auto;
  width: 58%;
}

// navbar
.navbar {
  grid-area: 3 / 1 / 4 / 4;
  width: 100%;
 }

nav {
  width: 50%;
margin: auto;
  height: auto;
}
#menu-burger{
display: none;
}
ul.nav-links {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  color: white;
}



a {
  text-decoration: none;
  color: white;
}

ul.nav-links li {
  width: 120px;
  padding: 20px 0px;
  text-align: center;
  cursor: pointer;
  color: white;
}

ul.nav-links a {
  font-size: 18px;
  color: white;
  text-decoration: none;
}
ul.nav-links a:hover {
  font-size: 18px;
  color: rgb(194, 140, 69);
  text-decoration: none;
}

 @media screen and( max-width: 866px ){
 div.search{
   display: none;
 }




 //navbar


div.navbar{
  display: none;
}

#menu-burger{
  display: inherit;
}
.bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color:rgb(200, 156, 98);
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }

    //button fermer
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: rgb(200, 156, 98);
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }

    //
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 100; /* Stay on top */
      top: 0;
      left: 0;
      background-color: black; /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }
 
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    nav.bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 25px;
    }
    // .bm-item-list > * {
    //   display: flex;
    //   text-decoration: none;
    //   padding: 0.7em;
    // }
    // .bm-item-list > * > span {
    //   margin-left: 10px;
    //   font-weight: 700;
    //   color: white;
    // }
 }
</style>
