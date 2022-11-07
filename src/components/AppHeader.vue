<template>
  <div>
    <AppButton @click="onClose">Закрыть</AppButton>
    <span>
        <!-- {{tg.initDataUnsafe?.user?.username}} -->
        {tg.initDataUnsafe?.user?.username}
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

    }
  },
  methods: {
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