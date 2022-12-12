<template>
  <div class="chooseCollection" v-if="!isColectionSelected">
    <p class="top-text header-text">Шаг 2. Выбери коллекцию принтов</p>
    <p class="top-text textP hint-color">Нажми на обложку коллекции для ее просмотра</p>
    <div class="colections-list">
      <div class="collections-wrapper">
        <AiCard />
        <Colection
          v-for="colection in basicColections"
          :key="colection.id"
          :colection="colection"
          @colectionSelected="selectCollection($event)"
        />
      </div>
    </div>
    <p class="top-text text-description textP">Наши коллекции - это работы российских художников, дизайнеров и фотографов</p>
    <p class="top-text text-description textP">Коллекции принтов обновляются ежемесячно</p>
  </div>
  <div class="selectPicture" v-else>
    <div class="back-p" @click="isColectionSelected = !isColectionSelected">
      <a>Go back</a>
    </div>
    <p class="top-text text-header">{{ currentCollection.name }}</p>
    <p class="top-text text-semiheader">{{ currentCollection.author }}</p>
    <p class="top-text textP text-description">{{ currentCollection.description }}</p>
    <div class="collection-item-list"> 
      <ColectionItem
        v-for="item in currentCollection.items"
        :key="item.id"
        :item="item"
        :isitemAlreadySelected="isitemAlreadySelected"
        :isNeedToUnSelectItem="isNeedToUnSelectItem"
        @selectItem="selectItem($event)"
        @unselectItem="unselectItem($event)"
      />
    </div>
    <!-- <button @click="goToCreatePage">Создать</button> -->
  </div>
</template>

<script>
import Colection from '@/components/Merch/ColectionToGenerate.vue'
import ColectionItem from '@/components/Merch/colectionPage/ColectionItem.vue'
import AiCard from '@/components/Merch/colectionPage/AiCard.vue'

import {useTelegram} from '@/mixins/useTelegram.js';
const {tg} = useTelegram();

export default {
  components: {
    Colection,
    ColectionItem,
    AiCard,
  },
  data() {
    return {
      //data
      basicColections: this.$store.getters.BASICCOLECTIONS,
      premiumColections: this.$store.getters.PREMIUMCOLECTIONS,

      isColectionSelected: false,

      currentCollection: {},
      currentItem: {},

      //item props
      isitemAlreadySelected: false,
      isNeedToUnSelectItem: false,
    }
  },
  methods: {
    selectCollection(colectionId) {
      this.isColectionSelected = true
      var colectionIndex = this.basicColections.findIndex(colection => colection.id === colectionId)
      this.currentCollection = this.basicColections[colectionIndex]
    },

    selectItem(itemId) {
      this.isitemAlreadySelected = true
      this.isNeedToUnSelectItem = !this.isNeedToUnSelectItem
      var itemIndex = this.currentCollection.items.findIndex(item => item.id === itemId)
      this.currentItem = this.currentCollection.items[itemIndex]
      tg.MainButton.show();
    },
    unselectItem(itemId) {
      this.isItemAlreadySelected = false
      this.currentItem = {}
      tg.MainButton.hide();
    },
    goToCreatePage() {
      // alert("успешно");
      this.$router.push('generatedMerch')
    }
  },
  mounted() {
    tg.MainButton.setParams({
      text: 'СОЗДАТЬ'
    })
    tg.onEvent('mainButtonClicked', this.goToCreatePage)
  },
  unmounted() {
    this.$store.dispatch('UPDATE_SELECTEDIMAGE', this.currentItem)
    this.$store.dispatch('UPDATE_SELECTEDCOLLECTION', this.currentCollection)
    console.log(this.$store.getters.SELECTEDIMAGE);
    tg.offEvent('mainButtonClicked', this.goToCreatePage)
    tg.MainButton.hide();
  }
}
</script>

<style scoped>
.ai-header {
  text-align: center;
  font-size: 18px;
}
.ai-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 20px;
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
  margin: 20px auto;
}


.collections-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5px 5px 5px 5px;
}
.top-text {
  text-align: center;
}
.textP {
  margin-top: 15px;
  font-size: 15px;
}
.header-text {
  margin-top: 15px;
  font-size: 18px;
}

.text-description {
  padding: 0 10%;
}

.btn-wrapper{
  display: flex;	
  justify-content: center;	
}
.btn-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}
.collection-item-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5px 3%;
}
.back-p {
  width: 55px;
  margin: 10px 0 20px 15px;
  font-size: 13px;
  border-bottom: 1px solid;
}
.more-collections {
  width: 47%;
  padding: 2% 2% 2% 2%;
  display: flex;
  justify-content: center;
  border: 2px solid var(--tg-theme-hint-color);
  margin: 8px auto 53px auto;
  max-height: 136px;
  max-width: 173px;
  border-radius: 10px;
  text-align: center;
}
.more-text {
  margin: auto 0;
}

.text-header {
  font-weight: bold;
  font-size: 17px;
}
.text-semiheader {
  font-size: 15px;
  color: var(--tg-theme-hint-color) !important;
}
</style>