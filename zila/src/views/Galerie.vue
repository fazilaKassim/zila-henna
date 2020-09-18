<template>
  <div id="galerie-bakcground">
    <section id="galerie">
      <h1>GALERIE</h1>
      
      <article class="images" id="galerie-1">
        
        <figure class="img-galerie">
          <img src="../assets/img/henne/1.jpg" alt="" />
        </figure>

        <div class="img-galerie">
          <img src="../assets/img/henne/6.jpg" alt="" />
        </div>
        <figure class="img-galerie">
          <img src="../assets/img/henne/7.jpg" alt="" />
        </figure>
        <figure class="img-galerie">
          <img src="../assets/img/henne/8.jpg" alt="" />
        </figure>
        <figure class="img-galerie">
          <img src="../assets/img/henne/9.jpg" alt="" />
        </figure>
        <figure class="img-galerie">
          <img src="../assets/img/henne/10.jpg" alt="" />
        </figure>
        <figure class="img-galerie">
          <img src="../assets/img/henne/11.jpg" alt="" />
        </figure>
        <figure class="img-galerie">
          <img src="../assets/img/henne/15.jpg" alt="" />
        </figure>
        <figure class="img-galerie">
          <img src="../assets/img/henne/18.jpg" alt="" />
        </figure>
        <figure class="img-galerie">
          <img src="../assets/img/henne/19.jpg" alt="" />
        </figure>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss">
#galerie-bakcground {
  background: url("../assets/img/flower-pink-background.jpg");
  background-size: cover;

  padding: 40px 0;
}

section#galerie {
  width: 60%;
  margin: auto;
  height: auto;
  background: white;
  padding-bottom: 8rem;
}

h1 {
  color: white;
  text-align: center;
}
// article {

//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
// }

// article figure img {

//     height: 250px;
//     width: 250px;
//     margin:5px;
//     border: thick double rgb(200, 156, 98);
//     transition: transform .2s;

// }

// article figure img:hover {

//   transform: scale(1.2);
// }
//     #myBtn {
//         position: fixed;
//         bottom: 200px;
//         float: right;
//         left: 95%;
//         max-width: 30px;
//         width: 100%;
//         font-size: 12px;
//         padding: .5px;
//         background: none;
//         border: none
//     }

.images {
  display: flex;
  padding: 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  transform: translateY(80px);
  padding: 0;
  height: auto;
}

.img-galerie {
  flex: 0 1 250px;
  max-width: 250px;
  height: 275px;
  margin: 2px;
  position: relative;
  z-index: 1;
  box-shadow: 0px 0px 15px 0px black;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  cursor: pointer;
}

.img-galerie img {
  object-fit: cover;
  object-position: center;
}

.img-galerie::before,
.img-galerie::after,
.img-galerie img {
  top: -50%;
  width: 100%;
  height: 200%;
  display: block;
  position: absolute;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  z-index: -1;
}

.img-galerie:hover {
  opacity: 1;
  transition: all 0.3s ease-in-out;

  transform: scale(1.2);
  z-index: 99;
  overflow: hidden;
}

.img-galerie::before {
  content: ""; //to make sure its empty
  position: absolute;
  opacity: 0.4;
  width: 350px;
  height: 70px;
  background: white;
  top: 50;
  left: 0;
  z-index: 1;
  transform: rotate(45deg);
  transition: 1.5s;
}

.img-galerie:hover:before {
  transform: translate(-100%, 600%) rotate(45deg);
  transition: transform 0.5s;
}

@media screen and (min-width: 550px) and (max-width: 825px) {
  //pour position les hexagones
  .img-galerie:nth-child(3n) {
    margin-right: calc(50% - 125px);
    margin-left: calc(50% - 125px);
  }

  .img-galerie:nth-child(3) {
    top: -70px;
  }
  .img-galerie:nth-child(4) {
    top: -140px;
  }
  .img-galerie:nth-child(5) {
    top: -140px;
  }
  .img-galerie:nth-child(6) {
    top: -210px;
  }
  .img-galerie:nth-child(7) {
    top: -280px;
    margin-right: 250px;
  }
}
</style>
