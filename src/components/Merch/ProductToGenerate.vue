<template>
  <div class="product-card" :class="{ beat: noActivated }" @click="productAction()">
    <div class="product-info" :style="{ opacity: + opacityPercent }">
      <div class="img-wrapper">
        <img width="100" height="100" class="good-img" :src=product.imgSrc alt="">
      </div>
      <div class="info-text">
        <p class="product-name">{{ product.name }}</p>
        <p></p>
        <p v-if="!(product.name === 'Чехол' || product.name === 'Худи' || product.name === 'Кепка')" class="product-price">{{ product.price }}₽</p>
      </div>
    </div>
    <div class="add-section"
      v-if="product.name === 'Чехол' || product.name === 'Худи' || product.name === 'Кепка'"
    >
      <div class="add-row">
        <button class="soon-btn">
          <span class="btn-text">СКОРО</span> 
        </button>
      </div>
    </div>
    <div class="add-section" v-else>
      <div class="add-row">
        <button :class="!isProductSelected ? 'add-btn' : 'remove-btn'">
          <span class="btn-text">{{ !isProductSelected ? 'ВЫБРАТЬ' : 'ОТМЕНИТЬ' }}</span> 
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
    },
    isProductAlreadySelected: {
      type: Boolean,
      reqired: true,
    },
    isNeedToUnSelect: {
      type: Boolean,
      reqired: true,
    }
  },
  data() {
    return {
      isProductSelected: false,
      opacityPercent: '1',
      noActivated: false,
    }
  },
  methods: {
    async productAction() {
      if (!(this.product.name === 'Чехол' || this.product.name === 'Худи' || this.product.name === 'Кепка' )) {
        if (this.isProductSelected) {
          
          await this.$emit('removeProduct', this.product.id)
          this.isProductSelected = false
        } else {
          await this.$emit('addProduct', this.product.id)
          this.isProductSelected = true
        }
        this.noActivated = true;
        setTimeout(() => {this.noActivated = false}, 500)
      }
    }
  },
  mounted() {
    if (this.product.name === 'Чехол' || this.product.name === 'Худи' || this.product.name === 'Кепка' ) {
      this.opacityPercent = 0.5
    }
  },
  watch: {
    isNeedToUnSelect() {
      if (!this.isProductSelected) {
        // this.noActivated = false
      }
      this.isProductSelected = false
    }
  }
}
</script>

<style scoped>

.product-card {
  width: 32%;
  padding: 2% 2% 2% 2%;
  margin: 15px auto 5px auto;
}

.product-info {
  font-size: 15px;
}

.add-btn {
  height: 30px;
  margin-top: 5px;
  width: 87%;
  border: none;
  border-radius: 6px;
}

.soon-btn {
  height: 30px;
  margin-top: 5px;
  width: 87%;
  border: none;
  border-radius: 6px;
  background-color: #454340;
}

.remove-btn {
  height: 30px;
  margin-top: 5px;
  width: 87%;
  border: none;
  border-radius: 6px;
  background: #d5584c;
}
.btn-text {
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
  font-size: 15px;
  cursor: pointer;
}


.beat {
  animation: beat 0.5s ease 0s 1 normal forwards;
}

@keyframes beat {
	0% {
		transform: scale(1);
	}

	50% {
		transform: scale(1.1);
	}

	100% {
		transform: scale(1);
	}
}

</style>