<template>
  <Form class="form" @submit="sendData">
    <h3 class="form-header">Укажите данные для доставки</h3>
    <label for="name">Укажите ФИО</label>
    <Field
      class='input'
      name="name"
      placeholder='Фамилия Имя Отчество'
      type="text"
      v-model="name"
      :rules="validateName" 
    />
    <ErrorMessage name="name" />
    <label for="phone">Укажите номер телефона</label>
    <Field
      class='input'
      name="phone"
      placeholder='Номер телефона'
      type="text"
      v-model="phoneNumber"
      :rules="validateNumber" 
    />
    <ErrorMessage name="phone" />
    <label for="email">Укажите адрес электронной почты</label>
    <Field
      class='input'
      name="email"
      placeholder='Адрес электронной почты'
      type="text"
      v-model="email"
      :rules="validateEmail" 
    />
    <ErrorMessage name="email" />
    <label for="adres">Укажите полный адрес доставки и индекс</label>
    <Field
      class='input'
      v-model="adres"
      type="text"
      placeholder='Адрес'
      name="adres"
      :rules="validateAdres" 
    />
    <ErrorMessage name="adres" />
    <label for="deliveryCompany">Выберите желаемую транспортную компанию</label>
    <select name="deliveryCompany" v-model="deliveryCompany" class='select' >
      <option value='SDECK'>СДЕК</option>
      <option value='pochta'>Почта россии</option>
    </select>
    <!-- <button class="form-button">ОФОРМИТЬ ЗАКАЗ</button> -->
  </Form>
</template>

<script>
import {useTelegram} from '@/mixins/useTelegram.js';
const {tg} = useTelegram();

import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      name: '',
      phoneNumber: '',
      email: '',
      adres: '',
      deliveryCompany: 'pochta',
    }
  },
  methods: {
    buttonCheck() {
      // if (this.name && this.phoneNumber && this.adres && this.deliveryCompany) {
      //   tg.MainButton.show();
      // } else {
      //   tg.MainButton.hide();
      // }
      if (this.validateName(this.name) === true &&
          this.validateAdres(this.adres) === true &&
          this.validateNumber(this.phoneNumber) === true &&
          this.validateEmail(this.email) === true ) {
        console.log(true);
        tg.MainButton.show();
      } else {
        tg.MainButton.hide();
        console.log(false);
      }
    },
    sendData() {
      this.orderInfo.customerName = this.name
      this.orderInfo.phoneNumber = this.phoneNumber
      this.orderInfo.email = this.email
      this.orderInfo.adres = this.adres
      this.orderInfo.deliveryCompany = this.deliveryCompany
      console.log(this.orderInfo);
      tg.sendData(JSON.stringify(this.orderInfo))
      tg.offEvent('mainButtonClicked', this.sendData)
    },
    validateName(value) {
      if (!value) {
        return 'Это поле обязательно';
      }
      return true;
    },
    validateAdres(value) {
      if (!value) {
        return 'Это поле обязательно';
      }
      return true;
    },
    validateNumber(value) {
      if (!value) {
        return 'Это поле обязательно';
      }
      const regex = /^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/i;
      if (!regex.test(value)) {
        return 'Это поле должно содержать номер телефона';
      }
      return true;
    },
    validateEmail(value) {
      if (!value) {
        return 'Это поле обязательно';
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'Проверьте правильность ввода';
      }
      return true;
    },
  },
  mounted() {
    this.orderInfo = this.$store.getters.ORDERINFO
    tg.MainButton.setParams({
      text: 'ОФОРМИТЬ ЗАКАЗ'
    })
    tg.onEvent('mainButtonClicked', this.sendData)
    this.buttonCheck()
  },
  watch: {
    name() {
      this.buttonCheck()
    },
    phoneNumber() {
      this.buttonCheck()
    },
    adres() {
      this.buttonCheck()
    },
    deliveryCompany() {
      this.buttonCheck()
    },
  },
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
}
.form-header {
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}
.input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  margin-top: 5px;
  
  border-radius: 5px;
}
span {
  margin-top: -15px;
  color: red;
}
.select {
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 5px;
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

.form-button {
  width: 250px;
  height: 31px;
  border: none;
  border-radius: 7px;
  font-size: 15px;
  font-weight: bold;
  margin: 10px auto;
}
</style>