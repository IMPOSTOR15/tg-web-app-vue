<template>
  <div class="main-wrapper">
    <ImageGenerator :hover="hover" v-on:image-generated="newImage" />
    <GeneratedImage
      v-for="image in images"
      v-bind:key="image.timestamp"
      :image="image"
      v-on:selectImg="selectImg($event)"
      v-on:unselectImg="unselectImg($event)"
      :isitemAlreadySelected="isitemAlreadySelected"
      :isNeedToUnSelectItem="isNeedToUnSelectItem"
    />
    <!-- <button @click="goToMerchPreView">Оформить заказ</button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import GeneratedImage from "@/components/AITestDir/GeneratedImage.vue";
import ImageGenerator from "@/components/AITestDir/ImageGenerator.vue";

import {useTelegram} from '@/mixins/useTelegram.js';
const {tg} = useTelegram();

export default {
  name: "Dall-e",
  components: {
    GeneratedImage, ImageGenerator
  },
  data: () => ({
    hover: 0,
    images: [], // { url, prompt }

    isitemAlreadySelected: false,
    isNeedToUnSelectItem: false,

    curentImg: {
      url: ''
    },
  }),
  methods: {
    newImage(data){
      console.log("New Image Received: ", data);
      data.timestamp = new Date().getTime();
      this.images.unshift(data);
    },
    selectImg(ImgUrl) {
      this.isitemAlreadySelected = true
      console.log('item selected');
      this.isNeedToUnSelectItem = !this.isNeedToUnSelectItem
      this.curentImg.url = ImgUrl
      tg.MainButton.show();
    },
    unselectImg(ImgUrl) {
      this.isItemAlreadySelected = false
      this.curentImgUrl = ''
      console.log('item unselected');
      
      tg.MainButton.hide();
    },
    goToMerchPreView() {
      this.$router.push('generatedAiMerch')
    }
  },
  mounted() {
    tg.MainButton.setParams({
      text: 'СОЗДАТЬ'
    })
    tg.onEvent('mainButtonClicked', this.goToMerchPreView)
  },
  unmounted() {
    this.$store.dispatch('UPDATE_SELECTEDAIIMAGE', this.curentImg)
    tg.offEvent('mainButtonClicked', this.goToMerchPreView)
    tg.MainButton.hide();
  }
};
</script>


<style scoped>
.main-wrapper {
  width: 100%;
  flex-grow: 1;
  display: flex; 
  justify-content: flex-start; align-items: flex-start;
  flex-flow: row wrap; overflow: hidden; overflow-y: scroll;
  padding: 20px; box-sizing: border-box;
}
</style>