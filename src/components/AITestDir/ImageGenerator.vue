<template>
  <div class="input-wrapper">
    <p class="top-text textP">Введи текст и нажми на кнопку, чтобы увидеть результат</p>
    <p class="top-text textP">Как только найдешь картинку по душе, выбери ее и оформи заказа</p>
    <input type="text" placeholder="Что загадал?" v-model="prompt">
    <button class="generateAi-btn" @click="generateImage">Создать</button>
    <p class="top-text textP">Изображения создаются некоторое время, прояви терпение</p>
  </div>
</template>
    
<script>
// const apiKey = process.env.VUE_APP_OPENAI_API_KEY;
const apiKey = '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';
export default {
  name: "ImageGenerator",

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
      
      {
        // fetch request with header
        await fetch("https://api.openai.com/v1/images/generations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            prompt: prompt,
            n: 1,
            size: "1024x1024",
          })
        }).then(res => res.json())
        .then(data => {
          this.loading = false;
          this.prompt = "";
          console.log("Response:", data);
          let url = data.data[0].url;
          this.$emit("imageGenerated", {url, prompt});
        })
        .catch(err => {
          this.loading = false;
          this.error = "Error generating image";
          console.log(err);
        });
      }
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.top-text {
  text-align: center;
}
.textP {
  margin-top: 15px;
  font-size: 15px;
}
input {
  height: 30px;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  margin: 10px 0;
}
input::placeholder {
  text-align: center;
}

.generateAi-btn {
  width: 200px;
  height: 40px;
  background: rgb(148,58,180);
  background: linear-gradient(90deg, rgba(148,58,180,1) 11%, rgba(253,100,29,1) 50%, rgba(69,91,252,1) 94%);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin: 10px auto;
}
</style>