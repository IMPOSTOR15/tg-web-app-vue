<template>
  <div>
    <Header/>
    <p>webapp</p>
    <button @click="onClose">Закрыть</button>
  </div>
</template>

<script>
import Header from "@/components/AppHeader.vue"

const tg = window.Telegram.WebApp;

export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {
    onClose() {
      tg.close()
    }
  },
  components: {
    Header
  }
}
</script>

<style>

</style>
