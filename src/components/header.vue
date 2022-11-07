<template>
  <div>
    <Button @click="onClose">Закрыть</Button>
    <span>
        {tg.initDataUnsafe?.user?.username}
    </span>
  </div>  
</template>

<script>
const tg = window.Telegram.WebApp;
import Button from "./Button";
import {useTelegram} from "../../hooks/useTelegram";
export default {
  components: {
    Button
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