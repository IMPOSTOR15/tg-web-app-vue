<template>
<div class="main">
  <div class="top-textbar">
    <p class="top-text header-text">Твой мерч готов!</p>
    <p class="top-text textP">Ты можешь оформить заказ или вернуться в главное меню и создать что-то новенькое</p>
  </div>
  <div class="loading-indicator" v-if="isLoading">
    <LoadingIndicator/>
  </div>
  <div class="product-place" v-else>
    <div class="product-wrapper">
      <img class="merch-img" :src="selectedAiImage.url" alt="">
    </div>
    <!-- <div v-else>
      <p class="top-text no-img-text textP">Такой картинки нет</p>
    </div> -->
    <div class="button-wrapper" @click="addToCart">
      <button class="tocart-button" v-if="!isMerchInCart"><p class="btn-txt">В КОРЗИНУ</p></button>
      <button class="tocart-button" v-else><p class="btn-txt">УСПЕШНО!</p></button>
    </div>
  </div>
</div>
</template>

<script>
import LoadingIndicator from '@/components/LoadingIndicator.vue'

import {useTelegram} from '@/mixins/useTelegram.js';
const {tg} = useTelegram();

export default {
  components: {
    LoadingIndicator
  },
  data() {
    return {
      isLoading: true,

      generatedMerchImage: null,
      generatedMerchImages: null,
      selectedProduct: null,
      selectedCollection: null,
      selectedImage: null,
      isMerchInCart: false,
      generatedMerchImageName: null,
      imgArr: [],
      curProdFolder: '',
      imgWebSrc: '',
      dataToSend: {
        name: '',
        imgLocalSrc: '',
        imgSrc: '',
        collectionName: '',
        collectionAuthor: '',
      }
    }
  },
  methods: {
    async difData() {
      this.selectedProduct = this.$store.getters.SELECTEDPRODUCT
      this.selectedAiImage = this.$store.getters.SELECTEDAIIMAGE
    },
    addToCart() {
      this.isMerchInCart = true
      tg.MainButton.show();
    },
    goToConfirmOrder() {
      this.dataToSend = {
        source: 'AI',
        selectedProductName: this.selectedProduct.name,
        imgWebSrc: this.selectedAiImage.url,
      }
      
      // tg.sendData(`Вы заказали ${this.selectedProduct.name} с изображением ${this.selectedImage.name} из коллекции ${this.selectedCollection.name} автора ${this.selectedCollection.author}`);
      tg.sendData(JSON.stringify(this.dataToSend))
      tg.offEvent('mainButtonClicked', this.goToConfirmOrder)
    },
    loadingCheck() {
      setTimeout(() => {
        this.isLoading = false;
        console.log('end loading');
      }, 2000);
    }
  },
  async created() {
    
  },
  async mounted() {
    await this.difData()

    this.dataToSend = {
        source: 'AI',
        selectedProductName: this.selectedProduct.name,
        imgWebSrc: this.selectedAiImage.url,
      }
    console.log(this.dataToSend);

    tg.MainButton.setParams({
      text: 'ОФОРМИТЬ ЗАКАЗ'
    })
    tg.onEvent('mainButtonClicked', this.goToConfirmOrder)
    console.log('start loading');
    this.loadingCheck()

  },
  unmounted() {
    tg.offEvent('mainButtonClicked', this.goToConfirmOrder)
  }
}
</script>

<style scoped>
.loading-indicator {
  display: flex;
  justify-content: center;
  margin: 30vh 0;
  
}
.merch-img {
  height: 230px;
  margin: 10px 0;
}
.top-text {
  text-align: center;
  padding: 0 10%;
}
.textP {
  margin-top: 15px;
  font-size: 15px;
}
.header-text {
  margin-top: 15px;
  font-size: 17px;
  font-weight: bold;
}

.product-place {
  margin: 20px auto 0 auto;
  width: 95vw;
  height: 95vw;
  border-radius: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  background-color: var(--tg-theme-hint-color);
}
.product-wrapper {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
.button-wrapper {
  margin: 0 auto;
}
.tocart-button {
  border: none;
  border-radius: 6px;
  width: 104px;
  height: 31px;
  font-weight: bold;
  cursor: pointer;
}
.no-img-text {
  color: #000;
}
</style>