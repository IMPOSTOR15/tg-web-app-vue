<template>
  <h1>Подтверждение заказа</h1>
  <div class="form">
    <h3>Введите для доставки товара</h3>
    <ul>
      <li>
        <label for="input">Страна доставки</label>
        <input
          class='input'
          v-model="country"
          type="text"
          placeholder='Страна'
          onChange={onChangeCountry}
        />
      </li>
      <li>
        <label for="">Адресс доставки</label>
        <input
          class='input'
          v-model="country"
          type="text"
          placeholder='Страна'
          onChange={onChangeCountry}
        />
      </li>
      <li>
        <select v-model="subject" value={subject} onChange={onChangeSubject} class='select'>
          <option value='physical'>Физ. лицо</option>
          <option value='legal'>Юр. лицо</option>
        </select>
      </li>
    </ul>
    

  </div>
  <p> {{subject}} </p>
  <p> {{street}} </p>
  <p> {{country}} </p>
</template>

<script>
import {useTelegram} from '@/mixins/useTelegram.js';
const {tg} = useTelegram();

export default {
  mounted() {
    tg.MainButton.setParams({
      text: 'Оформить заказ'
    })
    tg.onEvent('mainButtonClicked', this.toOrder)
  },
  unmounted() {
    tg.offEvent('mainButtonClicked', this.toOrder)
  }
}
</script>

<style>

</style>