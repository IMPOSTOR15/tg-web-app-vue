<template>
  <div class="collection-card" @click="collectionSelect()">
    <div class="colection-info">
      <div class="img-wrapper">
        <div class="loading-wrapper" v-if="isLoading">
          <LoadingIndicator class="loading-indictaor"/>
        </div>
        <img width="100" height="100" class="colection-img" :src=colection.imgSrc alt="" @load="imageLoaded">
      </div>
      <div class="info-text">
        <p class="colection-name">{{ colection.name }}</p>
        <p></p>
        <p class="colection-author">{{ colection.author }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingIndicator from '@/components/LoadingIndicator.vue';

export default {
  props: {
    colection: {
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
      this.$emit('colectionSelected', this.colection.id)
    }
  },
}
</script>

<style scoped>

.collection-card {
  display: flex;
  justify-content: center;
  text-align: left;
  width: 80vw;
  margin: 10px auto;
  cursor: pointer;
}
.colection-img {
  margin: 0 auto;
  width: 340px;
  height: 280px;
}
.colection-name {
  font-weight: bold;
  font-size: 20px;
}
.colection-author {
  font-size: 15px;
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