<template>
  <p>webapp</p>
  <button @click="onToggleButton">toggle</button>
  <router-link to="/products">Магазин</router-link>
  <router-link to="/form">Форма</router-link>
  <div class="main-btn-area">
    <button class="main-btn">
      <router-link class="link" to="nfthome">Main Page</router-link>
    </button>
  </div>
</template>

<script>

import {useTelegram} from '@/mixins/useTelegram.js'
const tg = window.Telegram.WebApp;

const {onToggleButton} = useTelegram();

export default {
  
  methods: {
    onToggleButton() {
      onToggleButton()
    }
  },
  mounted() {
    tg.ready()
  }
}

</script>

<style scoped>
.main-btn-area {
  display: flex;
  justify-content: center;
}
.main-btn {
  margin-top: 300px;
  padding: 20px 40px 20px 40px;
  
}
.link {
  font-size: 30px;
  text-decoration: none;
}
</style>