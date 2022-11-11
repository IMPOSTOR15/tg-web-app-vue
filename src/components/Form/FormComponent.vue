<template>
  <div class="form">
    <h3>Введите ваши данные</h3>
    <input
      class='input'
      v-model="country"
      type="text"
      placeholder='Страна'
      onChange={onChangeCountry}
    />
    <input
      class='input'
      v-model="street"
      type="text"
      placeholder='Улица'
      onChange={onChangeStreet}
    />
    <select v-model="subject" value={subject} onChange={onChangeSubject} class='select'>
      <option value='physical'>Физ. лицо</option>
      <option value='legal'>Юр. лицо</option>
    </select>
  </div>
  <p> {{subject}} </p>
  <p> {{street}} </p>
  <p> {{country}} </p>
</template>

<script>
import {useTelegram} from '@/mixins/useTelegram.js';
const {tg} = useTelegram();



export default {
  data() {
    return {
      subject: '',
      street: '',
      country: '',
    }
  },
  mounted() {
    tg.MainButton.setParams({
      text: 'Отправить данные'
    })
    tg.onEvent('mainButtonClicked', this.sendData)
  },
  methods: {
    buttonCheck() {
      if (this.street && this.country) {
        tg.MainButton.show();
      } else {
        tg.MainButton.hide(); 
      }
    },
    sendData() {
      const data = {
        country: this.country,
        street: this.street,
        subject: this.subject
      }
      tg.sendData(JSON.stringify(data))
      tg.offEvent('mainButtonClicked', this.sendData)
    }
  },
  watch: {
    street() {
      this.buttonCheck()
    },
    country() {
      this.buttonCheck()
    }
  },
}
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
}

.input {
  width: 100%;
  padding: 10px;
  margin-top: 15px;
}

.select {
  padding: 10px;
  margin-top: 15px;
}
.send-btn {
  width: 100%;
  padding: 10px 15px;
  background: var(--tg-theme-link-color);
  color: var(--tg-theme-text-color);
  border: none;
  outline: none;
  cursor: pointer;
}
</style>

