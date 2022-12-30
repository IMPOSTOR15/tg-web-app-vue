<template>
  <div class="item-card" @click="collectionSelect()">
    <div class="item-info">
      <div class="img-wrapper">
        <div class="loading-wrapper" v-if="isLoading">
          <LoadingIndicator class="loading-indictaor"/>
        </div>
        <img class="item-img" :src=item.imgSrc alt="" @load="imageLoaded">
      </div>
      <div class="info-text">
        <p class="item-name">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingIndicator from '@/components/LoadingIndicator.vue';
export default {
  props: {
    item: {
      type: Object,
      reqired: true
    }
  },
  components: {
    LoadingIndicator,
  },
  data() {
    return {
      isloading: true
    }
  },
  methods: {
    imageLoaded() {
      this.isloading = false
    },
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
  z-index: 0;
}
.item-img {
  display: flex;
  margin: 5px auto 5px auto;
}
.info-text {
  font-size: 13px;
  margin: 0 2%;
}
.loading-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  background-color: var(--tg-theme-bg-color);
  z-index: 2;
}
.loading-indictaor {
  margin: auto;
}
</style>