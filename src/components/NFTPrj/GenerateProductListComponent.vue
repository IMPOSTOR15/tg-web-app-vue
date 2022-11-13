<template>
  <div class="btn-wrapper">
    <button class="back-btn" @click="this.$router.push('nfthome')">
      <img class="back-btn-img-back" src="@/assets/back_btn.svg" alt="">
    </button>
  </div>
  <h1 class="top-text textH1">Generate merch</h1>
  <h2 class="top-text textH2">Chose the base</h2>
  <p class="top-text textP">The chosen base will be used to print on</p>
  <div class="products-list">
    <ProductToGenerate
      v-for="product in generateProducts"
      :key="product.id"
      :product="product"
      @add-product="addProduct($event)"
      @remove-product="removeProduct($event)"
    />
  </div>
  <div class="btn-wrapper">
    <button class="back-btn" @click="this.$router.push('chooseColiction')">
      <img class="back-btn-img-next" src="@/assets/back_btn.svg" alt="">
    </button>
  </div>
</template>

<script>
import ProductToGenerate from '@/components/NFTPrj/poducts/ProductToGenerate.vue'
export default {
  components: {
    ProductToGenerate
  },
  data() {
    return {
      generateProducts: this.$store.getters.GENERATEPRODUCTS
    }
  },
  methods: {
    addProduct() {

    },
    removeProduct() {
      
    }
  }
}
</script>

<style>
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
  rotate: 90deg;
}
.back-btn-img-next {
  rotate: -90deg;
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
  display: flex;	
  justify-content: center;	
}
</style>