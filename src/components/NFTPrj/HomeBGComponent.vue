<template>
  <div class="main-wrapper">
    <!-- <div class="main-bg">
        <div class="first-row">
          <div class="img-row-wrapper">
            <img class="first-top-img" src="@/assets/top_1.svg" alt="">
            <img class="second-top-img" src="@/assets/top_2.svg" alt="">
            <img class="third-top-img" src="@/assets/top_2.svg" alt="">
          </div>
        </div>
        <div class="second-row">
          <div class="img-row-wrapper">
            <img class="first-mid-img" src="@/assets/mid_1.svg" alt="">
            <img class="second-mid-img" src="@/assets/mid_2.svg" alt="">
          </div>
        </div>
        <div class="third-row">
          <div class="img-row-wrapper">
            <img class="first-bottom-img" src="@/assets/bottom_1.svg" alt="">
            <img class="second-bottom-img" src="@/assets/bottom_2.svg" alt="">
          </div>
        </div>
    </div> -->
    <img class="bgimg" src="@/assets/main_bg.png" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bgimg {
  position: absolute;
  width: 100vw;
  height: 900px;
}
.main-wrapper {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
}

.first-row {
  position: absolute;
}
.second-row {
  position: absolute;
  top: 262px;
}
.third-row {
  position: absolute;
  top: 680px;
}

.img-row-wrapper {
  position: absolute;
}

.second-top-img {
  position: absolute;
  left: 192px
}
.second-mid-img {
  position: absolute;
  left: 313px
}
.second-bottom-img {
  position: absolute;
  left: 262px
}
</style>