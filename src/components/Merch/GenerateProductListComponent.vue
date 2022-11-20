<template>
  <p class="top-text textP">Шаг 1. Выбери базу</p>
  <div class="products-list">
    <ProductToGenerate
      v-for="product in generateProducts"
      :key="product.id"
      :product="product"
      :isProductAlreadySelected="isProductAlreadySelected"
      :isNeedToUnSelect="isNeedToUnSelect"
      @add-product="addProduct($event)"
      @remove-product="removeProduct($event)"
    />
  </div>
  <p class="top-text textP">На выбранном изделии будет печататься принт</p>
  <div class="btn-wrapper">
    <div v-if="isProductAlreadySelected" class="back-btn" @click="goToCollections">
      <img class="back-btn-img-next" src="@/assets/Button.png" alt="">
    </div>
  </div>
</template>

<script>
import ProductToGenerate from '@/components/Merch/ProductToGenerate.vue'
export default {
  components: {
    ProductToGenerate
  },
  data() {
    return {
      generateProducts: this.$store.getters.GENERATEPRODUCTS,
      isProductAlreadySelected: null,
      isNeedToUnSelect: false,

      currentProduct: {},
    }
  },
  methods: {
    addProduct(prodId) {
      this.isProductAlreadySelected = true
      this.isNeedToUnSelect = !this.isNeedToUnSelect
      var productIndex = this.generateProducts.findIndex(product => product.id === prodId)
      this.currentProduct = this.generateProducts[productIndex]
      console.log(this.currentProduct);
    },
    removeProduct(prodId) {
      this.isProductAlreadySelected = false
    },
    goToCollections() {
      this.$router.push('choose-colection')
    }
  },
  unmounted() {
    this.$store.dispatch('UPDATE_SELECTEDPRODUCT', this.currentProduct)
    console.log(this.$store.getters.SELECTEDPRODUCT);
  }
}
</script>

<style scoped>
.products-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5px 5px 5px 5px;
}
.back-btn {
  border: none;
  cursor: pointer;
}
.back-btn-img-back {
  align-self: center;
}
.back-btn-img-next {
  width: 20vw;
}
.top-text {
  text-align: center;
}
.textH2 {
  margin-top: 20px;
}
.textP {
  margin-top: 15px;
}
.btn-wrapper{
  margin-top: 20px;
  display: flex;
  justify-content: center;	
  background: none;
}
</style>