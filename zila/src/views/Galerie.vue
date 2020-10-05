<template>
  <div id="galerie-bakcground">
    <section id="galerie">
      <h1>GALERIE</h1>

      <article class="images" id="galerie-1">
        <gallery :images="images" :index="index" @close="index = null">
        </gallery>
        <figure
          class="image"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{
            backgroundImage: 'url(' + image + ')',
            width: '250px',
            height: '250px',
            margin: ' 5px',
          }"
        ></figure>
      </article>
    </section>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  data: function() {
    return {
      images: [
        require("../assets/img/henne/1.jpg"),
        require("../assets/img/henne/6.jpg"),
        require("../assets/img/henne/7.jpg"),
        require("../assets/img/henne/8.jpg"),
        require("../assets/img/henne/9.jpg"),
        require("../assets/img/henne/10.jpg"),
        require("../assets/img/henne/11.jpg"),
        require("../assets/img/henne/15.jpg"),
        require("../assets/img/henne/18.jpg"),
        require("../assets/img/henne/19.jpg"),
      ],
      index: null,
    };
  },

  components: {
    gallery: VueGallery,
  },
};
</script>

<style lang="scss">
#galerie-bakcground {
  background: url("../assets/img/flower-pink-background.jpg");
  background-size: cover;

  padding: 40px 0;
}

section#galerie {
  width: 80%;
  margin: auto;
  height: auto;
  background: white;
  padding-bottom: 8rem;
}

h1 {
  color: black;
  text-align: center;
}
article.images {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.image {
  // width: 100%;
  // height: 100%;
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
  margin: 5px;
  border: thick double rgb(200, 156, 98);
  transition: transform 0.2s;
}
</style>
