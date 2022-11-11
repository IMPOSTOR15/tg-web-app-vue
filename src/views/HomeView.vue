<template>
  <p>webapp</p>
  <button @click="onToggleButton">toggle</button>
  <router-link to="/products">Магазин</router-link>
  <router-link to="/form">Форма</router-link>
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

<style>

</style>