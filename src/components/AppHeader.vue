<template>
  <div>
    <AppButton @click="onClose">Закрыть</AppButton>
    <span>
        {{tg.initDataUnsafe?.user?.username}}
    </span>
  </div>  
</template>

<script>
const tg = window.Telegram.WebApp;
import AppButton from "./AppButton.vue";
export default {
  components: {
    AppButton
  },
  data() {
    return {

    }
  },
  methods: {
    onClose() {
      tg.close()
    }
  }
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 20px;
}

.username {
    margin-left: auto;
}
</style>