<template>
  <!-- <AppHeader/> -->
  <router-view />
</template>

<script>
import AppHeader from "@/components/AppHeader.vue"
const tg = window.Telegram.WebApp;

export default {
  name: 'App',
  data() {
    return {

    }
  },
  mounted() {
    tg.ready()
  },
  components: {
    AppHeader
  },
}
</script>

<style>

</style>
