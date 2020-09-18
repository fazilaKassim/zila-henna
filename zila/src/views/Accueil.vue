<template>
  <section id="accueil">
    <div id="slide">
      <agile
        :nav-buttons="false"
        :autoplay-speed="5000"
        :speed="2500"
        fade="fade"
        pause-on-hover="pause-on-hover"
        pause-on-dots-hover="pause-on-dots-hover"
        autoplay="autoplay"
        ><img class="slide" src="../assets/img/slide1.png"/><img
          class="slide"
          src="../assets/img/slide3.jpg"/><img
          class="slide"
          src="../assets/img/slide4.jpg"
      /></agile>
    </div>
    <div id="accueil-baground">
      <div id="content-accueil">
        <section id="boutique">
          <h2>Menu Boutique</h2>
          <ul class="menu">
            <li class="menu">
              <a href="">
                <figure>
                  <img src="../assets/img/cone.jpeg" alt="" class="menu" />
                  <figcaption>Cone</figcaption>
                </figure>
              </a>
            </li>
            <li class="menu">
              <a href="">
                <figure>
                  <img src="../assets/img/cadre.jpg" alt="" class="menu" />
                  <figcaption>Cadre</figcaption>
                </figure>
              </a>
            </li>
            <li class="menu">
              <a href="">
                <figure>
                  <img src="../assets/img/bougie.jpeg" alt="" class="menu" />
                  <figcaption>Bougie</figcaption>
                </figure>
              </a>
            </li>
            <li class="menu">
              <a href="">
                <figure>
                  <img src="../assets/img/bouquet.jpg" alt="" class="menu" />
                  <figcaption>Bouquet</figcaption>
                </figure>
              </a>
            </li>
          </ul>
        </section>
        <div id="fb-root"></div>

        <section id="avis">
 
        </section>

        <section id="propos">
          <article id="henne">
            <ul class="propos">
              <li>Déplacement possible en Ile-de-France</li>
              <li>Nous utilisons des produit de haute qualité 100% naturel</li>
              <li><button class="reserver">Reservez</button></li>
            </ul>
          </article>
          <article class="video">
            <video controls muted>
              <source src="assets/video/zila Henné.mp4" type="video/mp4" />
            </video>
          </article>
        </section>

        <section id="livraison">
          <ul class="livraisons">
            <li>
              <figure>
                <img src="../assets/img/smiley.png" alt="" />
                <figcaption>
                  satisfait ou remboursée <br /><span>dans les 15 jours </span>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="../assets/img/box.png" alt="" />
                <figcaption>
                  livraison offerte <br /><span>des 25€ d'achat</span>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="../assets/img/time.png" alt="" />
                <figcaption>Livraison rapide</figcaption>
              </figure>
            </li>
            <li>
              <figure>
                <img src="../assets/img/card.png" alt="" />
                <figcaption>Paiement sécurisé</figcaption>
              </figure>
            </li>
          </ul>
        </section>

        <section id="newsletter">
          <article class="newsletter">
            <h3>
              Sign Up For Our Newsletter <br />
              Be the first to learn about our latest trends and get exclusive
              offers
            </h3>
          </article>
          <article class="subscribe">
            <label for="email"></label>
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              class="newsletter"
            />
            <div class="subcribe"><button class="news">Subscribe</button></div>
          </article>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
app = new Vue({
  el: "#app",
  components: {
    agile: VueAgile,
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --gld: rgb(200, 156, 98);
}
body {
  overflow-x: hidden;
  // width: 100%;
  min-width: 480px;
  max-width: 100%;
}

.row {
  margin: 0;
  padding: 0;
}
h2 {
  text-align: center;
  font-size: 23px;
  padding: 40px 0 0 0;
}
#accueil-baground {
  background: url("../assets/img/flower.jpg");

  background-attachment: fixed;
  background-position: center;

  /* background-repeat: no-repeat; */
}
#content-accueil {
  // background: black;
  color: white;
  width: 100%;
  margin: auto;
}
/* #slide */
.agile__dots {
  bottom: 10px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  right: 30px;
  position: absolute;
}
.agile__dot {
  margin: 5px 0;
}
.agile__dot button {
  background-color: transparent;
  border: 1px solid #fff;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #fff;
}

.slide {
  display: block;
  height: 500px;
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
}

/* a propos */
#propos {
  width: 100%;
  // background: url("../assets/img/flower.jpg");
  background: rgba(0, 0, 0, 0.411);
  background-attachment: fixed;
  background-position: center;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#propos article {
  // width: 50%;
  display: flex;
  margin: 50px;
}
#henne {
  display: flex;
  justify-content: center;
  align-items: center;
}
ul.propos {
  list-style: none;
}
ul.propos li {
  text-align: center;
  font-size: 22px;
}
video {
  width: 500px;
  height: auto;
  margin: 50px;
  border: none;
}
/* boutique */
#boutique {
  background: black;
  width: 100%;
}
ul.menu {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
}
li.menu {
  list-style: none;

  // width: 20%;
  /* margin-top: 0px; */
  height: auto;
  // border-radius: 50%;
  margin: 50px 0 20px 0;
}
.menu a {
  text-decoration: none;
  color: white;
  font-size: 22px;
}
.menu a figure {
  cursor: pointer;
  display: flex;
  flex-direction: column;

  align-items: center;
}
figcaption {
  text-align: center;
  padding: 30px;
}
img.menu {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

/* newsletter */
#newsletter {
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  height: auto;
  background: rgba(0, 0, 0, 0.411);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#newsletter article {
  height: auto;
}

.newsletter h3 {
  text-align: center;
  margin: 35px;
}

button.news,
button.reserver {
  width: 120px;
  height: 35px;
  border-radius: 10px;
  background: rgb(200, 156, 98);
  font-family: "Bellota", cursive;
  color: white;
  font-size: 18px;
  margin: 20px;
  border: none;
}

input.newsletter {
  color: rgb(200, 156, 98);
  font-family: "Bellota", cursive;
  background-color: transparent;
  border-bottom: 3px solid rgb(200, 156, 98);
  border-top: inherit;
  border-left: inherit;
  border-right: inherit;
  width: 350px;
  font-weight: 800;
}

#email::placeholder {
  font-family: "Bellota", cursive;
  color: rgb(200, 156, 98);
  padding-bottom: 10px;
}

article.subcribe {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* livraison  */

.livraisons {
  display: flex;
  // justify-content: space-around;
  justify-content: center;
  align-items: center;
  align-items: center;
  background: black;
}

ul.livraisons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.livraisons li {
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
}

.livraisons li figcaption {
  text-align: center;
}

ul.livraisons li figure {
  display: flex;
  flex-direction: column;
  width: 200px;
  justify-content: center;
  align-items: center;
}

@media screen and( max-width: 679px ) {
}
</style>
