<template>
  <div class="collection-card entrance" @click="collectionSelect()">
    <div class="colection-info">
      <div class="img-wrapper">
        <!-- <img width="100" height="100" class="colection-img" :src=colection.imgSrc alt=""> -->
        <img width="100" height="100" class="colection-img" :src="require('@/assets' + colection.imgLocalSrc)" alt="">
      </div>
      <div class="info-text" :style="{opacity: + opacityPercent}">
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
      activeImg: 'active-img',
      isActiveImg: false,
      opacityPercent: '1',
    }
  },
  methods: {
    collectionSelect() {
      if (!(this.colection.name === 'ABSTRACTIONS')) {
        this.isActiveImg = true
        this.$emit('colectionSelected', this.colection.id)
      }
      
    }
  },
  mounted() {
    if (this.colection.name === 'ABSTRACTIONS') {
      this.opacityPercent = '.6'
    }
  }
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
  height: 60%;
  max-height: 136px;
  max-width: 173px;
  min-height: 136px;
  min-width: 173px;
}
.info-text {
  text-align: center;
}
.colection-name {
  font-weight: bold;
  font-size: 15px;
}
.colection-author {
  font-size: 13px;
}
.active-img {
  border: 2px solid
}
</style>