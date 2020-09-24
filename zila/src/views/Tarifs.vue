<template>
  <div id="tarifs-background">
    <section id="tarifs">
      <h1>NOS TARIFS</h1>
      <section id="section-feature" class="container">
        <div class="row">
          <h2><i class="fas fa-hand-sparkles"></i>MAIN</h2>

          <ul>
            <div id="full">
              <li @click="toggle">
                <div
                  :class="toggleClass == true ? 'sf-wrap active' : 'sf-wrap'"
                >
                  <div class="sf-mdl-left">
                    <img src="../assets/img/tarif/doigt.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-right">
                    <img src="../assets/img/tarif/doigt.jpg" alt="" />
                  </div>
                  <p class="price">Doigts</p>
                  <div class="sf-mdl-left-full">
                    <p>
                      Dessin sur les 10 doigts
                      <br />
                      <br />
                      PRIX: 3€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>

                  <div class="sf-mdl-right-full">
                    <p>
                      Dessin sur les 10 doigts
                      <br />
                      <br />
                      PRIX: 3€

                      <br />
                      <br />
                      <a href="#"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>
                </div>
              </li>
              <p class="title">Doigts</p>
            </div>

            <div id="full">
              <li @click="toggle">
                <div
                  :class="toggleClass == true ? 'sf-wrap active' : 'sf-wrap'"
                >
                  <div class="sf-mdl-left">
                    <img src="../assets/img/tarif/poignet.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-right">
                    <img src="../assets/img/tarif/poignet.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-left-full">
                    <p>
                      Dessin simple & aéré jusqu'au poignet
                      <br />
                      <br />
                      PRIX: 5€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>

                  <div class="sf-mdl-right-full">
                    <p>
                      Dessin simple & aéré jusqu'au poignet
                      <br />
                      <br />
                      PRIX: 5€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>
                </div>
              </li>
              <p class="title">Poignet</p>
            </div>

            <div id="full">
              <li @click="toggle">
                <div
                  :class="toggleClass == true ? 'sf-wrap active' : 'sf-wrap'"
                >
                  <div class="sf-mdl-left">
                    <img src="../assets/img/tarif/mi-bras.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-right">
                    <img src="../assets/img/tarif/mi-bras.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-left-full">
                    <p>
                      Dessin simple & aéré jusqu'a la moitier de l'avant bras
                      <br />
                      <br />
                      PRIX: 10€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>

                  <div class="sf-mdl-right-full">
                    <p>
                      Dessin simple & aéré jusqu'a la moitier de l'avant bras
                      <br />
                      <br />
                      PRIX: 10€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>
                </div>
              </li>
              <p class="title">Mi-Bras</p>
            </div>

            <div id="full">
              <li @click="toggle">
                <div
                  :class="toggleClass == true ? 'sf-wrap active' : 'sf-wrap'"
                >
                  <div class="sf-mdl-left">
                    <img src="../assets/img/tarif/brasEntier.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-right">
                    <img src="../assets/img/tarif/brasEntier.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-left-full">
                    <p>
                      Dessin simple & aéré sur tout l'avant bras
                      <br />
                      <br />
                      PRIX: 15€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>

                  <div class="sf-mdl-right-full">
                    <p>
                      Dessin simple & aéré sur tout l'avant bras
                      <br />
                      <br />
                      PRIX: 15€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>
                </div>
              </li>
              <p class="title">Bras entier</p>
            </div>

            <div id="full">
              <li @click="toggle">
                <div
                  :class="toggleClass == true ? 'sf-wrap active' : 'sf-wrap'"
                >
                  <div class="sf-mdl-left">
                    <img src="../assets/img/tarif/fullPoignet.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-right">
                    <img src="../assets/img/tarif/fullPoignet.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-left-full">
                    <p>
                      Dessin complexe jusqu'au poignet
                      <br />
                      <br />
                      PRIX: 10€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>

                  <div class="sf-mdl-right-full">
                    <p>
                      Dessin complexe jusqu'au poignet
                      <br />
                      <br />
                      PRIX: 10€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>
                </div>
              </li>
              <p class="title">Poignet</p>
            </div>

            <div id="full">
              <li @click="toggle">
                <div
                  :class="toggleClass == true ? 'sf-wrap active' : 'sf-wrap'"
                >
                  <div class="sf-mdl-left">
                    <img src="../assets/img/tarif/fullMiBras.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-right">
                    <img src="../assets/img/tarif/fullMiBras.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-left-full">
                    <p>
                      Dessin complexe jusqu'a la moitier de l'avant-bras
                      <br />
                      <br />
                      PRIX: 15€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>

                  <div class="sf-mdl-right-full">
                    <p>
                      Dessin complexe jusqu'a la moitier de l'avant-bras
                      <br />
                      <br />
                      PRIX: 15€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>
                </div>
              </li>
              <p class="title">Mi-Bras</p>
            </div>

            <div id="full">
              <li @click="toggle">
                <div
                  :class="toggleClass == true ? 'sf-wrap active' : 'sf-wrap'"
                >
                  <div class="sf-mdl-left">
                    <img src="../assets/img/tarif/fullBrasEntier.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-right">
                    <img src="../assets/img/tarif/fullBrasEntier.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-left-full">
                    <p>
                      Dessin complexe sur tout l'avant-bras
                      <br />
                      <br />
                      PRIX: 20€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>

                  <div class="sf-mdl-right-full">
                    <p>
                      Dessin complexe sur tout l'avant-bras
                      <br />
                      <br />
                      PRIX: 20€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>
                </div>
              </li>
              <p class="title">Bras Entier</p>
            </div>

            <div id="full">
              <li @click="toggle">
                <div
                  :class="toggleClass == true ? 'sf-wrap active' : 'sf-wrap'"
                >
                  <div class="sf-mdl-left">
                    <img src="../assets/img/tarif/coude.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-right">
                    <img src="../assets/img/tarif/coude.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-left-full">
                    <p>
                      Dessin complexe au dessus du coude
                      <br />
                      <br />
                      PRIX: 25€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>

                  <div class="sf-mdl-right-full">
                    <p>
                      Dessin complexe au dessus du coude
                      <br />
                      <br />
                      PRIX: 25€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>
                </div>
              </li>
              <p class="title">Coude</p>
            </div>

            <h2><i class="fas fa-shoe-prints"></i>PIED</h2>

            <div id="full">
              <li @click="toggle">
                <div
                  :class="toggleClass == true ? 'sf-wrap active' : 'sf-wrap'"
                >
                  <div class="sf-mdl-left">
                    <img src="../assets/img/tarif/pied.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-right">
                    <img src="../assets/img/tarif/pied.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-left-full">
                    <p>
                      Dessin sur les 10 orteils
                      <br />
                      <br />
                      PRIX: 3€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>

                  <div class="sf-mdl-right-full">
                    <p>
                      Dessin sur les 10 orteils
                      <br />
                      <br />
                      PRIX: 3€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>
                </div>
              </li>
              <p class="title">Doigts</p>
            </div>

            <div id="full">
              <li @click="toggle">
                <div
                  :class="toggleClass == true ? 'sf-wrap active' : 'sf-wrap'"
                >
                  <div class="sf-mdl-left">
                    <img src="../assets/img/tarif/OtoC.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-right">
                    <img src="../assets/img/tarif/OtoC.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-left-full">
                    <p>
                      Dessin fin tout autour du pied
                      <br />
                      <br />
                      PRIX: 4€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>

                  <div class="sf-mdl-right-full">
                    <p>
                      Dessin fin tout autour du pied
                      <br />
                      <br />
                      PRIX: 4€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>
                </div>
              </li>
              <p class="title">Pied Contour</p>
            </div>

            <div id="full">
              <li @click="toggle">
                <div
                  :class="toggleClass == true ? 'sf-wrap active' : 'sf-wrap'"
                >
                  <div class="sf-mdl-left">
                    <img src="../assets/img/tarif/pied.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-right">
                    <img src="../assets/img/tarif/pied.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-left-full">
                    <p>
                      Dessin simple sur le dessus du pied jusqu'à la cheville
                      <br />
                      <br />
                      PRIX: 6€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>

                  <div class="sf-mdl-right-full">
                    <p>
                      Dessin simple sur le dessus du pied jusqu'à la cheville
                      <br />
                      <br />
                      PRIX: 6€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>
                </div>
              </li>
              <p class="title">Cheville (simple)</p>
            </div>

            <div id="full">
              <li @click="toggle">
                <div
                  :class="toggleClass == true ? 'sf-wrap active' : 'sf-wrap'"
                >
                  <div class="sf-mdl-left">
                    <img src="../assets/img/tarif/OtoC.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-right">
                    <img src="../assets/img/tarif/OtoC.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-left-full">
                    <p>
                      Dessin complexe sur le dessus du pied jusqu'à la cheville
                      <br />
                      <br />
                      PRIX: 10€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>

                  <div class="sf-mdl-right-full">
                    <p>
                      Dessin complexe sur le dessus du pied jusqu'à la cheville
                      <br />
                      <br />
                      PRIX: 10€
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>
                </div>
              </li>
              <p class="title">Cheville (complet)</p>
            </div>

            <h2><i class="fas fa-ring"></i>FORFAIT MARIAGE</h2>

            <div id="full">
              <li @click="toggle">
                <div
                  :class="toggleClass == true ? 'sf-wrap active' : 'sf-wrap'"
                >
                  <div class="sf-mdl-left">
                    <img src="../assets/img/tarif/MRG.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-right">
                    <img src="../assets/img/tarif/MRG.jpg" alt="" />
                  </div>

                  <div class="sf-mdl-left-full">
                    <p>
                      à partir de 200€
                      <br />
                      <br />
                      -15% sur le total
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>

                  <div class="sf-mdl-right-full">
                    <p>
                      à partir de 200€
                      <br />
                      <br />
                      -15% sur le total
                      <br />
                      <br />
                      <a href="/rendezVous"
                        >Prendre RDV <i class="fas fa-arrow-right"></i
                      ></a>
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </section>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      toggleClass: false,
    };
  },

  components: {},
  created() {
    //toggle()
  },
  methods: {
    toggle() {
      //console.log(toggleClass)
      this.toggleClass = !this.toggleClass;
    },
  },
};
</script>

<style scoped>
#tarifs-background {
  background: url("../assets/img/flower-pink-background.jpg");
  background-size: contain;
  padding: 80px 0;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

section#tarifs {
  width: 70%;
  margin: auto;
  background: white;
  padding-bottom: 50px;
}

h1 {
  color: black;
  text-align: center;
  padding: 50px;
  font-size: 30px;
}

h2,
h3 {
  text-align: center;
  width: 100%;
}

#full {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

p {
  color: white;
  font-size: 17px;
  width: 200px;
  text-align: center;
}

.price {
  color: black;
}
#section-feature {
  width: 100%;
  background: white;
}

#section-feature ul {
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.title {
  color: black;
}

#section-feature li {
  /* -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box; */
  position: relative;
  /* border: 4px solid rgb(200, 156, 98) ; */
  border-radius: 25px;
  height: 200px;
  width: 200px;

  /* float: left; */
  /* margin-bottom: 40px; */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#section-feature #full {
  margin: 1.5%;
}
.sf-wrap {
  background-repeat: no-repeat;
  position: absolute;
  max-width: 280px;
  width: 100%;
  height: 100%;
  top: 0;
  -moz-perspective: 600px;
  -webkit-perspective: 600px;
  -ms-perspective: 600px;
  -o-perspective: 600px;
  perspective: 600px;
  cursor: pointer;
}

.sf-mdl-left,
.sf-mdl-right,
.sf-mdl-left-full,
.sf-mdl-right-full {
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  overflow: hidden;
}

.sf-mdl-right,
.sf-mdl-right-full {
  left: auto;
  right: 0;
}

.sf-mdl-left-full,
.sf-mdl-right-full {
  z-index: 9;
  color: #fff;
  /* background: url("../assets/img/tarif/bgpink.jpg");
   */
  background: rgb(87, 1, 44);
  background-size: cover;
  /* background: black; */

  background-size: 300px;
}

.sf-wrap a {
  color: rgb(255, 214, 111);
  text-decoration: none;
}

.sf-mdl-left,
.sf-mdl-right {
  z-index: 10;
}

.sf-mdl-left img {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
}
.sf-mdl-right img {
  position: absolute;
  right: 0;
  width: 200px;
  height: 200px;
  /* max-width: 50%; */
  z-index: 10;

  top: 0;
}

.sf-wrap > .sf-mdl-right-full,
.sf-wrap > .sf-mdl-right {
  background-position: right -30px;
  border-radius: 0px 20px 20px 0px;
}

.sf-wrap > .sf-mdl-left-full,
.sf-wrap > .sf-mdl-left {
  border-radius: 20px 0px 0px 20px;
}
.sf-wrap > .sf-mdl-right,
.sf-wrap > .sf-mdl-left-full {
  -moz-backface-visibility: hidden;
  -moz-transform-style: preserve-3d;
  -moz-transform-origin: 0 0;
  -moz-transform: rotateY(0deg);

  -webkit-backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
  -webkit-transform-origin: 0 0;
  -webkit-transform: rotateY(0deg);

  -o-backface-visibility: hidden;
  -o-transform-style: preserve-3d;
  -o-transform-origin: 0 0;
  -o-transform: rotateY(0deg);

  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform-origin: 0 0;
  transform: rotateY(0deg);
}

.sf-wrap:hover > .sf-mdl-right {
  -webkit-transform: rotateY(-45deg);
  -moz-transform: rotateY(-45deg);
  -ms-transform: rotateY(-45deg);
  -o-transform: rotateY(-45deg);
  transform: rotateY(-45deg);
  background-color: #ececec;
}

.sf-wrap > .sf-mdl-left-full {
  -moz-transform-origin: 100% 0;
  -webkit-transform-origin: 100% 0;
  -o-transform-origin: 100% 0;
  transform-origin: 100% 0;
  -moz-transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  transform: rotateY(180deg);
}

.sf-wrap.active > .sf-mdl-right,
.sf-wrap:hover.active > .sf-mdl-right {
  -moz-transform: rotateY(-180deg);
  -webkit-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}

.sf-wrap.active > .sf-mdl-left-full {
  -moz-transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  transform: rotateY(0deg);
}

.active .sf-mdl-left-full,
.active .sf-mdl-right-full {
  z-index: 11;
}

.sf-wrap div h3 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 22px;
}

.sf-wrap div h3,
.sf-wrap div p {
  width: 200%;
  position: absolute;
  text-align: center;
  left: 0;
  top: 30px;
}

.sf-wrap div.sf-mdl-right-full h3,
.sf-wrap div.sf-mdl-right-full p {
  left: auto;
  right: 0;
}

/* .sf-wrap div.sf-mdl-right-full p{
  padding-right: 20px;
}


.sf-wrap div.sf-mdl-left-full p{
  padding-left: 20px;
} */

.sf-wrap div.sf-mdl-left-full h3,
.sf-wrap div.sf-mdl-right-full h3 {
  top: 15px;
}
</style>
