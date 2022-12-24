<template>
  <div class="input-wrapper">
    <p class="top-text textP">Ты можешь создать все, что угодно!</p>
    <p class="mid-text textP">1) Введи любой текст в строку ниже. Чем длиннее и точнее запрос, тем качественнее изображение на выходе. А еще наша нейросеть лучше понимает английский.</p>
    <p class="mid-text textP">2) Нажми на кнопку «Создать».</p>
    <p class="mid-text textP">3) Дай нейросети время на создание — об этом тебе подскажет индикатор загрузки.</p>
    <p class="mid-text textP">4) Если тебе не понравился результат, ты можешь попробовать снова совсем бесплатно!</p>
    <p class="mid-text textP">5) Когда создашь идеальный результат, добавь предмет в корзину и оформи заказ, как обычно.</p>
    <input type="text" placeholder="Например, «Лев и яблоко в космосе»..." v-model="prompt">
    <button class="generateAi-btn" @click="generateImage">СОЗДАТЬ</button>
    <LoadingIndicator class="loading-indicator" v-if="loading"/>
  </div>
</template>
    
<script>
import LoadingIndicator from '@/components/LoadingIndicator.vue'

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.VUE_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default {
  name: "ImageGenerator",
  components: {
    LoadingIndicator,
  },

  data() {
    return {
      prompt: "", 
      error: "",
      loading: false,
    };
  },
  watch: {

  },
  methods: {
    async generateImage() {
      if(this.loading) return;
      this.error = "";
      let prompt = this.prompt;
      if(!prompt){
          this.error = "Please enter a prompt";
          return;
      }
      this.loading = true;
      console.log("generating image for prompt: ", prompt);
      

      try {
        var response = await openai.createImage({
          prompt: prompt,
          n: 1,
          size: "1024x1024",
        });
        console.log(response.data.data[0].url);
      } catch (error) {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      }

      let url = response.data.data[0].url;
      console.log("Response:", response.data);
      
      this.$emit("imageGenerated", {url, prompt});
      this.prompt = "";
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: gray; */
}
.top-text {
  text-align: center;
  font-size: 18px;
}
.mid-text {
  font-size: 15px;
  color: var(--tg-theme-hint-color);
}
.textP {
  margin-top: 15px;
  
}
input {
  height: 30px;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  margin: 30px 0 10px 0;
}
input::placeholder {
  text-align: center;
}

.generateAi-btn {
  width: 133px;
  height: 31px;
  /* background: rgb(148,58,180);
  background: linear-gradient(90deg, rgba(148,58,180,1) 11%, rgba(253,100,29,1) 50%, rgba(69,91,252,1) 94%); */
  border: none;
  border-radius: 7px;
  /* color: #fff; */
  font-size: 20px;
  font-weight: bold;
  margin: 10px auto;
}
.loading-indicator {
  margin: 50px auto;
}
</style>