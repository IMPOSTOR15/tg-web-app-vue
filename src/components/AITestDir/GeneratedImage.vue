<template>
  <div class="img-box" @click="imgSelect()">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div class="loading-wrapper" v-if="isLoading">
      <LoadingIndicator class="loading-indictaor"/>
    </div>
    <img class="generated-img" :class="isActiveImg ? 'activeImg' : ''" width="300" height="300" :src="image.url" :alt="image.prompt"  @load="imageLoaded"/>
  </div>
</template>

<script>
import LoadingIndicator from '../LoadingIndicator.vue';

export default {
  name: "GeneratedImage",
  props: {
    image: {
      type: Object,
      required: true,
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
  components: {
    LoadingIndicator
  },
  data() {
    return {
      isActiveImg: false,
      isLoading: true,
    };
  },
  methods: {
    async imgSelect() {
      if(this.isActiveImg) {
        await this.$emit('unselectImg', this.image.url)
        this.isActiveImg = false
      } else {
        await this.$emit('selectImg', this.image.url)
        this.isActiveImg = true
      }
    },
    imageLoaded() {
      this.isLoading = false
    }
  },
  watch: {
    isNeedToUnSelectItem() {
      this.isActiveImg = false
    }
  }
};
</script>

<style scoped>
.img-box {
  display: flex;
  justify-content: center;
  width: 80vw;
  margin: 10px auto;
  z-index: 0;
}
.generated-img {
  margin: 0 auto;
  border: 5px solid transparent;
}
.loading-wrapper {
  position: absolute;
  height: 320px;
  width: 100%;
  display: flex;
  background-color: var(--tg-theme-bg-color);
  z-index: 2;
}
.loading-indictaor {
  margin: auto;
}

.activeImg {
  border: 5px solid #c431c4;
  /* margin-top: 0;
  margin-bottom: 0; */
}

.invisible {
  opacity: 0;
}
</style>