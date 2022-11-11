<template>
  <div class="cart">
    <p>Корзина</p>
    <div>{{products}}</div>
    <ProductInCart 
      class="cart-products"
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-product="addProduct($event)"
      @remove-product="removeProduct($event)"
    />
    <button @click="toPorductListNative">Вернуться к товарам</button>
    <div class="TotalPrice">
      <h2>Итого: {{ totalPrice }}</h2>
    </div>
  </div>
</template>

<script>
import {useTelegram} from '@/mixins/useTelegram.js';
const {tg} = useTelegram();

import ProductInCart from '@/components/ProductList/ProductInCart.vue'
import OrderConfirmation from '@/components/ProductList/OrderConfirmation.vue'

export default {
  components: {
    ProductInCart,
    OrderConfirmation
  },
  data() {
    return {
      products: this.$store.getters.PRODUCTS,
      totalPrice: 0,
      isReadyToOrder: false,
    }
  },
  methods: {
    toPorductListNative() {
      this.$router.push('products')
    },
    calculateTotalPrice() {
      this.products.map((elem) => {
        this.totalPrice += elem.price * elem.countInCart
      })
    },
    toOrder() {
      this.$router.push('order-form')
      tg.offEvent('mainButtonClicked', this.toOrder)
    }
  },
  mounted() {
    this.calculateTotalPrice()
    tg.MainButton.setParams({
      text: 'Оформить заказ'
    })
    tg.onEvent('mainButtonClicked', this.toOrder)
  }
}
</script>

<style scoped>
.TotalPrice {
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 20px 5% 20px 5%;
  border: 2px var(--tg-theme-link-color) solid;
  border-radius: 10px;
}
.cart-products {
  margin: 5px;
}
</style>