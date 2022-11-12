<template>
  <div class="main-wrapper">
    <div class="top-container">
      <div>
        <img src="@/assets/ArtistAvatar.svg" alt="">
      </div>
      <h2 class="artist-name">Malcolm</h2>
    </div>
    <div class="mid-container">
      <h1>Gonna live in Male</h1>
      <h1>and paint every day</h1>
    </div>
    <div class="button-column">
      <button class="main-btn">NFT Showcase</button>
      <button class="btn-gradient" @click="pushToStore"><p class="gradient-text">Support now</p></button>
      <a class="btn-link" href="">Go back</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    pushToStore() {
      this.$router.push('ChoseProducteToGenerate')
    }
  }
}
</script>

<style scoped>
* {
  color: white;
}
.main-wrapper {
	width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
}
.top-container {
  display: flex;
  flex-direction: column;
  margin: 34% auto 0 auto;
}
.mid-container {
  display: flex;
  flex-direction: column;
  margin: 7% auto 0 auto;
  text-align: center;
}
.button-column {
  display: flex;
  flex-direction: column;
  margin: 12% auto 0 auto;
}
.artist-name {
  margin: 0 auto 0 auto;
  text-align: center;
}
.main-btn {
  width: 254px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 12px;
  font-size: 20px;
  cursor: pointer;
}
.btn-gradient {
  width: 254px;
  height: 50px;
  border-radius: 12px;
  font-size: 20px;
  margin-top: 4%;
  border: 2px solid #fff;
  cursor: pointer;
}
.gradient-text {
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(90deg, #C431C4, #FFFFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.btn-link {
  font-size: 15px;
  display: block;
  margin: 4% auto 0 auto;
  color: lightgray;
}
/* linear-gradient(90.69deg, #C431C4 14.88%, #FFFFFF 82.3%) */
</style>