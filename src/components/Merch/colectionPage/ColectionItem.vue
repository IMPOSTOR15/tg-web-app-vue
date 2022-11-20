<template>
  <div class="item-card" @click="collectionSelect()">
    <div class="item-info">
      <div class="img-wrapper">
        <img class="item-img"  :class="isActiveImg ? 'activeImg' : ''" :src=item.imgSrc alt="">
      </div>
      <div class="info-text">
        <p class="item-name">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      reqired: true
    },
    isItemAlreadySelected: {
      type: Boolean,
      reqired: true,
    },
    isNeedToUnSelectItem: {
      type: Boolean,
      reqired: true,
    }
  },
  data() {
    return {
      isActiveImg: false,
    }
  },
  methods: {
    async collectionSelect() {
      if(this.isActiveImg) {
        await this.$emit('unselectItem', this.item.id)
        this.isActiveImg = false
      } else {
        await this.$emit('selectItem', this.item.id)
        this.isActiveImg = true
      }
      
    }
  },
  watch: {
    isNeedToUnSelectItem() {
      this.isActiveImg = false
    }
  }
  
}
</script>

<style scoped>

.item-card {
  width: 50%;
  /* padding: 2% 2% 2% 2%; */
  margin: 0 0;
}
.item-img {
  width: 100%;
  display: flex;
  margin: 0 auto 0 auto;
  border: 5px solid transparent;
  border-radius: 10px;
}
.info-text {
  font-size: 15px;
  padding: 2% 5px;
}
.activeImg {
  border: 5px solid #c431c4;
  /* margin-top: 0;
  margin-bottom: 0; */
}
</style>