<template>
  <div>
    <p>webapp</p>
    <button @click="onClose">Закрыть</button>
  </div>
</template>

<script>
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
  }
}
</script>

<style>

</style>
