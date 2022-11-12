<template>
  <div class="products-list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-product="addProduct($event)"
      @remove-product="removeProduct($event)"
    /> 
    <p>Всего товаров: {{countInCart}} </p>
    <p> Корзина:</p>
    <div>
      {{products}}
    </div>
  </div>
  <button @click="toCartNative">В коризину</button>
</template>

<script>
import {useTelegram} from '@/mixins/useTelegram.js';
const {tg} = useTelegram();
import ProductCard from '@/components/ProductList/ProductCard.vue'

export default {
  components: {
    ProductCard,
  },
  methods: {
    addProduct(currentProductId) {
      var currentProductIndex = this.products.findIndex(product => product.id === currentProductId)
      this.products[currentProductIndex].countInCart += 1
      this.$store.dispatch('GET_PRODUCTS', this.products);
      this.countInCart += 1
    },
    removeProduct(currentProductId) {
      var currentProductIndex = this.products.findIndex(product => product.id === currentProductId)
      this.products[currentProductIndex].countInCart -= 1
      this.$store.dispatch('GET_PRODUCTS', this.products);
      this.countInCart -= 1
    },
    buttonCheck() {
      if (this.products.length > 0) {
        tg.MainButton.show();
      } else {
        tg.MainButton.hide(); 
      }
    },
    toCart() {
      this.$router.push('cart')
    },
    toCartNative() {
      this.$router.push('cart')
    }
  },
  watch: {
    countInCart() {
      this.buttonCheck()
      
    },
  },
  mounted() {
    console.log(this.products);
    tg.MainButton.setParams({
      text: 'В корзину'
    })
    tg.onEvent('mainButtonClicked', this.toCart)
  },
  unmounted() {
    tg.offEvent('mainButtonClicked', this.toCart)
  },
  data() {
    return {
      checkout: false,
      countInCart: 0,
      products: this.$store.getters.PRODUCTS,
    }
  }
}
</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--tg-theme-button-color);
  padding: 15px;
  width: 170px;
}

.img {
  width: 100%;
  background: lightgray;
  height: 100px;
  margin: 0 auto;
  background: var(--tg-theme-button-color);
}

.description {
    font-size: 0.8em;
}

.add-btn {
    width: 100%;
}
.products-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5px 5px 5px 5px;
}
</style>