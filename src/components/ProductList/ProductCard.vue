<template>
  <div class="product-card">
    <div class="product-info">
      <div class="img-wrapper">
        <img width="100" height="100" class="good-img" src="https://avatars.mds.yandex.net/get-mpic/1656415/img_id7726862920721667552.jpeg/orig" alt="">
      </div>
      <p class="product-name">{{ product.name }}</p>
      <p class="product-price">{{ product.price }} ₽</p>
    </div>
    <div class="add-section">
      <div class="add-row" v-if="product.countInCart < 1">
        <button class="adToCard-btn" @click="addToCart()" >В коризну</button>
      </div>
      <div class="add-remove-row" v-else>
        <button class="remove-btn" @click="removeFromCart()">-</button>
        <p class="prodAmmount">{{ product.countInCart }}</p>
        <button class="add-btn" @click="addToCart()">+</button>
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
  methods: {
    addToCart() {
      this.$emit('addProduct', this.product.id)
    },
    removeFromCart() {
      this.$emit('removeProduct', this.product.id)
    }
  }
}
</script>

<style scoped>

.product-card {
  width: 48%;
  padding: 2% 2% 2% 2%;
  margin: 5px auto 5px auto;
  border-radius: 45px;
  background: linear-gradient(145deg, var(--tg-theme-bg-color), var(--tg-theme-secondary-bg-color));
  box-shadow:  6px 6px 12px  var(--tg-theme-bg-color),
              -3px -3px 10px var(--tg-theme-secondary-bg-color);
}
.adToCard-btn {
  width: 50%;
  padding: 2px 0 2px 0;
  border: 1px solid var(--tg-theme-secondary-bg-color);
  border-radius: 10px;
}
.remove-btn {
  width: 20%;
  border: 1px solid var(--tg-theme-secondary-bg-color);
  border-radius: 10px;
}
.add-btn {
  width: 20%;
  border: 1px solid var(--tg-theme-secondary-bg-color);
  border-radius: 10px;
}
.prodAmmount {
  padding-top: 3px;
  width: 10px;
  margin: 0 5px 0 5px;
}
.add-section {
  margin: 0 auto 0 auto;
}
.good-img {
  display: flex;
  margin: 5px auto 5px auto;
  border-radius: 25px;
}
.product-name, .product-price, .add-row, .add-remove-row{
  display: flex;
  justify-content: center;
}

.adToCard-btn, .add-btn, .remove-btn {
  padding: 4px 0 4px 0;
  font-size: 13px;
  cursor: pointer;
}

</style>