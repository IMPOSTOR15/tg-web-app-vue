<template>
  <div class="header">
    <AppButton @click="onClose">Закрыть</AppButton>
    <span class="username">
        <!-- {{tg.initDataUnsafe?.user?.username}} -->
        {{user?.username}}
    </span>
  </div>  
</template>

<script>
import {useTelegram} from '@/mixins/useTelegram.js'
import AppButton from "./AppButton.vue";

const {user, onClose} = useTelegram();

export default {
  components: {
    AppButton
  },
  data() {
    return {
      user: user
    }
  },
  methods: {
    onClose() {
      onClose()
    }
  },
  
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