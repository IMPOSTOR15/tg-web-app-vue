<template>
  <div class="item-card" @click="collectionSelect()">
    <div class="item-info">
      <div class="img-wrapper">
        <img class="item-img" :src=item.imgSrc alt="">
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
    }
  },
  data() {
    return {

    }
  },
  methods: {
    collectionSelect() {
      this.$emit('colectionSelected', this.item.id)
    }
  }
}
</script>

<style scoped>

.item-card {
  width: 47%;
  padding: 2% 2% 2% 2%;
  margin: 0 auto 0 auto;
}
.item-img {
  display: flex;
  margin: 5px auto 5px auto;
}
.info-text {
  font-size: 15px;
  padding: 0 2%;
}
</style>