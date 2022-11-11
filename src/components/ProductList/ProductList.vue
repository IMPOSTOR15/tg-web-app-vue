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
import Cart from '@/components/ProductList/CartComponent.vue'

export default {
  components: {
    ProductCard,
    Cart
  },
  methods: {
    addProduct(currentProductId) {
      var currentProductIndex = this.products.findIndex(product => product.id === currentProductId)
      this.products[currentProductIndex].countInCart += 1
      // console.log(this.products[currentProductIndex]);
      this.$store.dispatch('GET_PRODUCTS', this.products);
      this.countInCart += 1
      // currentProduct.countInCart += 1
      // console.log(currentProduct);

      // var isProductExist = false
      // if (this.cart.length > 0) {
      //   for(let i = 0; i<this.cart.length; i++) {
      //     if (this.cart[i].name === productObj.name) {
      //       this.cart[i].count += 1;
      //       isProductExist = true
      //       break
      //     }
      //   }
      //   if (!isProductExist) {
      //     this.cart.push(productObj)
      //     this.countInCart += 1
      //   }
      // } else {
      //   this.cart.push(productObj)
      //   this.countInCart += 1
      // }
    },
    removeProduct(currentProductId) {
      // var isProductExist = false
      var currentProductIndex = this.products.findIndex(product => product.id === currentProductId)
      this.products[currentProductIndex].countInCart -= 1
      // console.log(this.products[currentProductIndex]);
      this.$store.dispatch('GET_PRODUCTS', this.products);
      this.countInCart -= 1
      // if (this.cart.length > 0) {
      //   for(let i = 0; i<this.cart.length; i++) {
      //     if (this.cart[i].name === productObj.name) {
      //       if (this.cart[i].count > 1) {
      //         this.cart[i].count -= 1
      //         break
      //       } else {
      //         this.cart.splice(i,1)
      //         this.countInCart -= 1
      //         break
      //       }
      //     }
      //   }
      // }
    },
    buttonCheck() {
      if (this.products.length > 0) {
        tg.MainButton.show();
      } else {
        tg.MainButton.hide(); 
      }
    },
    toCart() {
      this.checkout = true;
      tg.offEvent('mainButtonClicked', this.toCart)
    },
    toCartNative() {
      this.checkout = !this.checkout;
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