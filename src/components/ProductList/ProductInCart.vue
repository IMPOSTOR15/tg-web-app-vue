<template>
  <div class="product-card" v-if="product.countInCart > 0">
    <div class="product-info">
      <div class="img-wrapper">
        <img width="100" height="100" class="good-img" src="https://avatars.mds.yandex.net/get-mpic/1656415/img_id7726862920721667552.jpeg/orig" alt="">
      </div>
      <div class="info-wrapper">
        <p class="product-name">{{ product.name }}</p>
        <p class="product-price">Цена: {{ product.price }} ₽</p>
        <p class="product-amount">Колличество {{ product.countInCart }}</p>
        <p v-if="product.countInCart > 1">Итого: {{product.price * product.countInCart}} ₽</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      reqired: true
    }
  },
  data() {
    return {
      amount: 0
    }
  },
  methods: {
    // addToCart() {
    //   this.amount += 1
    //   var productObj = {
    //     id: this.product.id,
    //     name: this.product.name,
    //     price: this.product.price,
    //     count: 1,
    //   }
    //   this.$emit('addProduct', productObj)

    // },
    // removeFromCart() {
    //   this.amount -= 1
    //   var productObj = {
    //     id: this.product.id,
    //     name: this.product.name,
    //     price: this.product.price,
    //     count: 1,
    //   }
    //   this.$emit('removeProduct', productObj)
    // }
  }
}
</script>

<style scoped>
.product-card {
  padding: 2% 2% 2% 2%;
  margin: 8px auto 8px auto;
  border: 1px var(--tg-theme-link-color) solid;
  border-radius: 20px;
  background-color: var(--tg-theme-secondary-bg-color);
}
.product-info {
  display: flex;
  flex-direction: row;
}

.good-img {
  display: flex;
  margin: 5px auto 5px auto;
  border-radius: 25px;
}
.product-name, .product-price{
  display: flex;
}
.info-wrapper {
  margin-top: 10px;
  margin-left: 20px;
}

</style>