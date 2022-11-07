<template>
  <div>
    <AppHeader/>
    <p>webapp</p>
    <button @click="onToggleButton">toggle</button>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue"
import {useTelegram} from '@/mixins/useTelegram.js'
const tg = window.Telegram.WebApp;

const {onToggleButton} = useTelegram();

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AppHeader
  },
  mounted() {
    tg.ready()
  }
}
</script>

<style>

</style>
