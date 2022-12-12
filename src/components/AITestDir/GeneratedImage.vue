<template>
  <div class="img-box" @click="imgSelect()">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <img class="generated-img" :class="isActiveImg ? 'activeImg' : ''" width="300" height="300" :src="image.url" :alt="image.prompt"  />
  </div>
</template>

<script>
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
  data() {
    return {
      isActiveImg: false,
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
}
.generated-img {
  margin: 0 auto;
  border: 5px solid transparent;
}

.activeImg {
  border: 5px solid #c431c4;
  /* margin-top: 0;
  margin-bottom: 0; */
}
</style>