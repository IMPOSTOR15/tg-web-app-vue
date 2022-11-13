<template>
  <div class="home">
    <HomeElements />
  </div>
  <BGComponent class="home-bg" />
</template>

<script>
import BGComponent from '@/components/NFTPrj/HomeBGComponent.vue'
import HomeElements from '@/components/NFTPrj/HomeElementsComponents.vue'
export default {
  components: {
    BGComponent,
    HomeElements
  }
}
</script>

<style scoped>
.home-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  filter: brightness(50%);
  height: 800px;
}
.home {
  position: absolute;
  z-index: 100;
  
}
</style>