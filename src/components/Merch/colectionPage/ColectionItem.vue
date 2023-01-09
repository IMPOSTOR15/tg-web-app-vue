<template>
  <div class="item-card entrance" @click="collectionSelect()">
    <div class="item-info">
      <div class="img-wrapper">
        <div class="loading-indicator-wrapper" v-if="isLoading">
          <LoadingIndicator class="loading-indicator"/>
        </div>
        <!-- <img class="item-img"  :class="isActiveImg ? 'activeImg' : ''" :src=item.imgSrc alt=""> -->
        <img 
          v-show="!isLoading"
          class="item-img" 
          :class="isActiveImg ? 'activeImg' : '' "
          :src="require('@/assets/CollectionsImages/' + item.imgLocalSrc)"
          alt=""
          @load="isLoading = false"
        >
      </div>
      <div class="info-text">
        <p class="item-name">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingIndicator from '@/components/LoadingIndicator.vue'
export default {
  components: {
    LoadingIndicator,
  },
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
      isLoading: true,
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
  margin: 0 0;
}
.item-img {
  width: 100%;
  display: flex;
  margin: 0 auto 0 auto;
  border: 5px solid transparent;
  border-radius: 10px;
  z-index: 0;
}
.info-text {
  font-size: 15px;
  padding: 2% 5px;
}
.activeImg {
  border: 5px solid #c431c4;
}
.img-wrapper {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
}
.loading-indicator-wrapper {
  /* position: absolute; */
  display: flex;
  width: 200px;
  height: 190px;
  justify-content: center;
  margin: 0 auto 0 auto;
  background-color: var(--tg-theme-bg-color);
  z-index: 2;
}

.loading-indicator {
  margin: auto;
  z-index: 3;
}
</style>