<template>
  <div id="boutique-bg">
    <section class="boutique boutique-menu">
         <section class="sous-menu">
              <article class="menu"><a href=""><figure> <img  class="img-menu"  src="../assets/img/cone.jpeg" alt=""><figcaption>Henné</figcaption></figure></a></article>
              <article class="menu"><a href=""><figure><img class="img-menu"  src="../assets/img/cadre.jpg" alt=""><figcaption>Objets personnalisé</figcaption></figure></a></article>
              <article class="menu"><a href=""><figure><img  class="img-menu" src="../assets/img/cadre.jpg" alt=""><figcaption>Lettre fleurie</figcaption></figure></a></article>
              <article class="menu"><a href=""><figure><img class="img-menu"  src="../assets/img/bouquet.jpg" alt=""><figcaption>Bouquet</figcaption></figure></a></article>
         </section>
    
  


    </section>
           <section class="boutique-content boutique">
<article>

</article>
         </section>
                <HenneBoutique />
    
  </div>
</template>

<script>
import HenneBoutique from "../components/HenneBoutique"

export default {
  components : {
   HenneBoutique
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
