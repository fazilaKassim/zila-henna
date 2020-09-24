<template>
  <div id="boutique-bg">
    <section class="boutique boutique-menu">
      <section class="sous-menu">
        <article class="menu">
          <a href="/cone"
            ><figure class="menu">
              <img class="img-menu" src="../assets/img/cone.jpeg" alt="" />
              <figcaption class="menu">Henné</figcaption>
            </figure></a
          >
        </article>
        <article class="menu">
          <a href="/objets"
            ><figure class="menu">
              <img class="img-menu" src="../assets/img/cadre.jpg" alt="" />
              <figcaption class="menu">Objets personnalisé</figcaption>
            </figure></a
          >
        </article>
        <article class="menu">
          <a href="/lettre"
            ><figure class="menu">
              <img class="img-menu" src="../assets/img/cadre.jpg" alt="" />
              <figcaption class="menu">Lettre fleurie</figcaption>
            </figure></a
          >
        </article>
        <article class="menu">
          <a href="/bouquet"
            ><figure class="menu">
              <img class="img-menu" src="../assets/img/bouquet.jpg" alt="" />
              <figcaption class="menu">Bouquet</figcaption>
            </figure></a
          >
        </article>
      </section>
    </section>
    <section class="boutique-content boutique">
      <h1>Cone</h1>
      <article class="list-produit">
        <div class="produit">
          <figure class="produit">
            <img src="../assets/img/cadre.jpg" alt="" class="img-produit" />
             <figcaption>lot de 3 cones</figcaption>
            <p>10€</p>
                 <button class="btn">Acheter  <i class="fas fa-cart-plus"></i></button>
            <button class="btn btn2">Decouvrir  <i class="fas fa-feather-alt"></i></button>
          </figure>
       
           
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
};
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

.boutique {
  width: 90%;
  // height: 100vh;
  background: white;
  margin: auto;
  padding: 10px;
}
.boutique-menu {
  width: 90%;
  // height: 100vh;
  background: white;
  margin: auto;
  padding: 20px 10px 0 10px;
}
section.sous-menu {
  // width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
}
article.menu {
  height: auto;
  padding: 20px;
}

article.menu a {
  display: flex;
  flex-direction: column;
}

figure.menu img {
  width: 200px;
  height: 200px;
  border-radius: 80px 0 80px 0;
  cursor: pointer;
  filter: brightness(65%);
  border: double thick rgb(247, 192, 120);
}
figcaption.menu {
  color: white;
  font-size: 14px;
  width: 100%;
  text-align: center;
  position: relative;
  font-weight: 800;
  z-index: 10;
  bottom: 129px;
  height: 0;
  font-family: "Bellota", cursive;
  font-size: 18px;
  text-shadow: #fc0 2px 0 10px;
}

//contenue boutique

.boutique-content {
  margin-top: 20px;
}

article.list-produit {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
div.produit{
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
    border-radius: 20px;
  
}
figure.produit p {text-align: center;}
figure.produit {
    display: flex;
    flex-direction: column;
    justify-content: center;
 align-items: center;
  width: 250px;
  height: 300px;
  border-radius: 20px;
}
img.img-produit {
  width: 250px;
    border-radius: 20px 20px 0 0;
  height: 250px;
}

.produit figcaption {
  font-size: 18px;
  padding: 10px;
}

.produit button {
position: absolute;
z-index: -50;

}
.produit:hover button {
  cursor: pointer;
  position: relative;
  bottom: 250px;
  z-index: 10;
  background: var(--gld);
  border: none;
  color: white;
  outline: 0;
  width: 80%;
  height: 40px;
  border-radius: 20px;
  margin: 30px 0 0 0;
  padding : 10px
}
div.produit:hover figure{
  box-shadow: 0px 10px 3px grey;

}

.produit:hover  img{
    height: 250px;
    filter: brightness(65%);
}
</style>
