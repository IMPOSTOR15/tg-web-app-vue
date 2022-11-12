<template>
  <div class="product-card" @click="productAction()">
    <div class="product-info">
      <div class="img-wrapper">
        <img width="100" height="100" class="good-img" :src=product.imgSrc alt="">
      </div>
      <div class="info-text">
        <p class="product-name">{{ product.name }}</p>
        <p></p>
        <p class="product-price">{{ product.price }} $</p>
      </div>
    </div>
    <div class="add-section">
      <div class="add-row">
        <button v-if="!isProductSelected" class="add-btn">
          <span class="btn-text">CHOOSE</span> 
        </button>
        <button v-else class="remove-btn">
          <span class="btn-text">CANCEL</span> 
        </button>
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
      isProductSelected: false
    }
  },
  methods: {
    productAction() {
      if (this.isProductSelected) {
        this.$emit('removeProduct', this.product.id)
      } else {
        this.$emit('addProduct', this.product.id)
      }
      this.isProductSelected = !this.isProductSelected
    },
  }
}
</script>

<style scoped>

.product-card {
  width: 47%;
  padding: 2% 2% 2% 2%;
  margin: 15px auto 5px auto;
}

.product-info {
  font-size: 13px;
}

.add-btn {
  height: 30px;
  margin-top: 5px;
  width: 65%;
  background: #C431C4;
  border: none;
  border-radius: 4px;
}
.remove-btn {
  height: 30px;
  margin-top: 5px;
  width: 65%;
  border: none;
  border-radius: 4px;
  background: #4cc3dd;
}
.btn-text {
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  padding: 4px;
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
}
.product-name, .product-price, .add-row, .add-remove-row{
  display: flex;
  justify-content: center;
}

.add-btn, .remove-btn {
  padding: 4px 0 4px 0;
  font-size: 13px;
  cursor: pointer;
}

</style>