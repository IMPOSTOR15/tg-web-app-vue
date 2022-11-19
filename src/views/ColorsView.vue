<template>
  <div class="colors-column">
    <h1>bg_color var(--tg-theme-bg-color)</h1>
    <div class="color-example bg_color">bg_color</div>
    <h1>text_color var(--tg-theme-text-color)</h1>
    <div class="color-example text_color">text_color</div>
    <h1>hint_color var(--tg-theme-hint-color)</h1>
    <div class="color-example hint_color">hint_color</div>
    <h1>link_color var(--tg-theme-link-color)</h1>
    <div class="color-example link_color">link_color</div>
    <h1>button_color var(--tg-theme-button-color)</h1>
    <div class="color-example button_color">button_color</div>
    <h1>button_text_color var(--tg-theme-button-text-color)</h1>
    <div class="color-example button_text_color">button_text_color</div>
    <h1>secondary_bg_color var(--tg-theme-secondary-bg-color)</h1>
    <div class="color-example secondary_bg_color">secondary_bg_color</div>
    <div class="button-wrapper">
      <button class="tgbutton">Пример кнопки</button>
    </div>
    <div class="link-wrapper">
      <a href="" class="tglink">Пример ссылки</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
  color: var(--tg-theme-text-color);
  background: var(--tg-theme-bg-color);
}
h1 {
  font-size: 10px;
}
.colors-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
}
.color-example {
  width: 70%;
  border: 2px solid #42b983;
  margin: 10px auto;
  padding: 20px;
}
.bg_color{
  background-color: var(--tg-theme-bg-color);
}
.text_color{
  background-color: var(--tg-theme-text-color);
}
.hint_color {
  background-color: var(--tg-theme-hint-color);
}
.link_color {
  background-color: var(--tg-theme-link-color);
}
.button_color {
  background-color: var(--tg-theme-button-color);
}
.button_text_color {
  background-color: var(--tg-theme-button-text-color);
}
.secondary_bg_color {
  background-color: var(--tg-theme-secondary-bg-color);
}
.tgbutton {
  width: 70%;
  border: 2px solid transparent;
  border-radius: 20px;
  margin: 10px auto;
  padding: 30px;
  background: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
  font-size: 20px;
}
.tglink {
  color: var(--tg-theme-link-color);
}
</style>