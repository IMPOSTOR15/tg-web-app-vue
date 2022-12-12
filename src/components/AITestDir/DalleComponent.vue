<template>
  <div class="home" v-on:mouseover.stop="hover+=1">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->

    <!-- <GeneratedImage :image="image" /> -->
    <ImageGenerator :hover="hover" v-on:image-generated="newImage" />
    <GeneratedImage v-for="image in images" v-bind:key="image.timestamp" :image="image" />
  </div>
</template>

<style scoped>
.home {
  width: 100%; flex-grow: 1;
  /* background: gold; */
  display: flex; 
  justify-content: flex-start; align-items: flex-start;
  flex-flow: row wrap; overflow: hidden; overflow-y: scroll;
  padding: 20px; box-sizing: border-box;
}
.home::-webkit-scrollbar {
  display: none;
}
/* responsive */
@media (max-width: 600px) {
  .home {
    flex-flow: column nowrap; margin: auto; width: calc(100% - 40px);
  }
}
</style>

<script>
// @ is an alias to /src
import GeneratedImage from "./GeneratedImage.vue";
import ImageGenerator from "./ImageGenerator.vue";

export default {
  name: "Dall-e",
  components: {
    GeneratedImage, ImageGenerator
  },
  data: () => ({
    hover: 0,
    images: [] // { url, prompt }
  }),
  methods: {
    newImage(data){
      console.log("New Image Received: ", data);
      data.timestamp = new Date().getTime();
      this.images.unshift(data);
    }
  }
};
</script>
