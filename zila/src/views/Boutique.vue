<template>
  <div id="boutique-bg">
    <section class="boutique boutique-menu">
      <section class="sous-menu">
              <article class="menu"><router-link to="/boutique/henne"><figure  class="menu"> <img  class="img-menu"  src="../assets/img/cone.jpeg" alt=""><figcaption class="menu">Henné</figcaption></figure></router-link></article>
              <article class="menu"><router-link to="/boutique/objets"><figure class="menu"><img class="img-menu"  src="../assets/img/cadre.jpg" alt=""><figcaption class="menu">Objets personnalisé</figcaption></figure></router-link></article>
              <article class="menu"><router-link to="/boutique/lettre"><figure class="menu"><img  class="img-menu" src="../assets/img/cadre.jpg" alt=""><figcaption class="menu">Lettre fleurie</figcaption></figure></router-link></article>
              <article class="menu"><router-link to="/boutique/bouquet"><figure class="menu"><img class="img-menu"  src="../assets/img/bouquet.jpg" alt=""><figcaption class="menu">Bouquet</figcaption></figure></router-link></article>
         </section>
    <router-link to="/cone">BLALBLZLFAEZ</router-link>

    <router-view >
         
    </router-view>
          


    </section>
           <section class="boutique-content boutique">
<article>

</article>
         </section>
            
    
  </div>
</template>

<script>

export default {

     data(){
          return {
               produits: []
          }
     },
  components : {
       
  },
  async created(){
     //   console.log(this.$store)
     //   console.log(this.$store.dispatch("produit/exemple"))
     await this.$store.dispatch("produit/getProduits");
     const produits = this.$store.getters["produit/produits"];
     this.produits = produits;//this= data
     console.log("GETTERS -> ", produits)
     // console.log()

  }
}
</script>

<style lang="scss" scoped>

//boutique menu 
#boutique-bg {
  background: url("../assets/img/flower.jpg");
  height: auto;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px;
}

.boutique{
     width: 90%;
     // height: 100vh;
     background: white;
     margin: auto;
     padding: 10px;
}
.boutique-menu{
     width: 90%;
     // height: 100vh;
     background: white;
     margin: auto;
     padding: 20px 10px 0 10px;
}
section.sous-menu{
     // width: 80%;
     height: auto;
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: center;
     align-items: center;
     margin: auto;
}
article.menu{

     height: auto;
     padding: 20px;
}

article.menu a{

     display: flex;
     flex-direction: column;
     
}

figure img{
     width: 200px;
     height: 200px;
     border-radius: 80px 0 80px 0;
     cursor: pointer;
    filter: brightness(65%);
    border:  double thick  rgb(247, 192, 120);
     
}
figcaption{color: white;
font-size: 14px;
width: 100%;
text-align: center;
position: relative;
font-weight: 800;
z-index: 10;
bottom: 129px;
height: 0;
font-family:  "Bellota", cursive;
font-size: 18px;
text-shadow: #FC0 2px 0 10px;;
}


//contenue boutique 

.boutique-content{
     margin-top: 20px;
     
}
</style>
