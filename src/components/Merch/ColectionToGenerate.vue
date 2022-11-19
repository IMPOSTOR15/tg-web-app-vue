<template>
  <div class="collection-card" @click="collectionSelect()">
    <div class="colection-info">
      <div class="img-wrapper">
        <img width="100" height="100" class="colection-img" :src=colection.imgSrc alt="">
      </div>
      <div class="info-text">
        <p class="colection-name">{{ colection.name }}</p>
        <p></p>
        <p class="colection-author hint-color">{{ colection.author }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    colection: {
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
      this.$emit('colectionSelected', this.colection.id)
    }
  },
}
</script>

<style scoped>

.collection-card {
  width: 50%;
  padding: 2% 2% 2% 2%;
  display: flex;
  justify-content: center;
}
.colection-img {
  margin: 0 auto;
  width: 100%;
  height: 50%;
  max-height: 136px;
  max-width: 173px;
}
.info-text {
  text-align: center;
}
.colection-name {
  font-weight: bold;
  font-size: 20px;
}
.colection-author {
  font-size: 15px;
}
</style>