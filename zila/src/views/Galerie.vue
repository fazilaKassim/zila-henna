<template>
<div id="galerie-bakcground">
  <section id="galerie">
    <h1>GALERIE</h1>
    <article class="contenu active" id="galerie-1">
      <figure><img src="../assets/img/henne/1.jpg" alt="" /></figure>

    <figure><img src="../assets/img/henne/6.jpg" alt="" /></figure>
      <figure><img src="../assets/img/henne/7.jpg" alt="" /></figure>
      <figure><img src="../assets/img/henne/8.jpg" alt="" /></figure>
      <figure><img src="../assets/img/henne/9.jpg" alt="" /></figure>
         <figure><img src="../assets/img/henne/10.jpg" alt="" /></figure>
      <figure><img src="../assets/img/henne/11.jpg" alt="" /></figure>
      <figure><img src="../assets/img/henne/15.jpg" alt="" /></figure>
          <figure><img src="../assets/img/henne/18.jpg" alt="" /></figure>
      <figure><img src="../assets/img/henne/19.jpg" alt="" /></figure>
   
    </article>
  </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">

#galerie-bakcground{
  background: url("../assets/img/flower-pink-background.jpg");
  background-size: cover;
 
  padding: 40px 0;
}

section#galerie {
  width: 60%;
  margin: auto;
  background: white;
}

h1 {
  color: white;
  text-align: center;
}
article {
    
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}



article figure img {

    height: 250px;
    width: 250px;
    margin:5px

}

    #myBtn {
        position: fixed;
        bottom: 200px;
        float: right;
        left: 95%;
        max-width: 30px;
        width: 100%;
        font-size: 12px;
        padding: .5px;
        background: none;
        border: none
    }

</style>
