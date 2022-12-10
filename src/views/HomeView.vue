<template>
  <p>webapp</p>
  <button @click="onToggleButton">toggle</button>
  <router-link to="/products">Магазин</router-link>
  <router-link to="/form">Форма</router-link>
  <div class="main-btn-area">
    <button class="main-btn">
      <router-link class="link" to="nfthome">Main Page</router-link>
    </button>
    <button class="main-btn">
      <router-link class="link" to="choose-merch">New merch design</router-link>
    </button>
    <button class="main-btn">
      <router-link class="link" to="tgcolors">Color samples</router-link>
    </button>
    <button class="main-btn">
      <router-link class="link" to="dalleGenerator">ImageGenerator</router-link>
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
  flex-direction: column;
}
.main-btn {
  padding: 20px 40px 20px 40px;
  width: 50%;
  margin: 100px auto 0 auto;
  
}
.link {
  font-size: 30px;
  text-decoration: none;
  color: var(--tg-theme-text-color);
}
</style>