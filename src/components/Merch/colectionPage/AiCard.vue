<template>
  <div class="card entrance"  @click="$router.push('dalleGenerator')">
    <div class="card-wrapper">
      <div class="card-info">
        <div class="img-wrapper">
          <img class="ai-img" width="66" height="66" src="@/assets/ai_pic.svg" alt="">
        </div>
        <div class="text-wrapper">
          <p class="ai-header">НЕЙРОСЕТЬ</p>
        </div>
      </div>
    </div>
    <p class="ai-header">СОЗДАЙ СВОЙ ПРИНТ</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 2% 2% 2% 2%;
}
.card-wrapper {
  display: flex;
  flex-direction: column;
  border: 2px solid var(--tg-theme-hint-color);
  border-radius: 7px;
  margin: 0 auto;
  margin-bottom: 5px;
  max-height: 136px;
  max-width: 173px;
  min-height: 136px;
  min-width: 173px;
}
.card-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto 0;
}

.ai-header {
  text-align: center;
  font-weight: bold;
  font-size: 15px;
}
.img-wrapper {
  margin: 0 auto;
}

</style>