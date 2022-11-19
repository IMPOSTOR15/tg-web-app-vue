<template>
  <div class="chooseCollection" v-if="!isColectionSelected">
    <p class="top-text textP">Шаг 2. Выбери коллекцию принтов</p>
    <p class="top-text textP hint-color">Нажми на обложку коллекции для ее просмотра</p>
    <div class="colections-list">
      <div class="collections-wrapper">
        <Colection
          v-for="colection in basicColections"
          :key="colection.id"
          :colection="colection"
          @colectionSelected="selectCollection($event)"
        />
        <div class="more-collections">
          <p class="more-text hint-color">СКОРО ЗДЕСЬ ПОЯВИТСЯ БОЛЬШЕ КОЛЛЕКЦИЙ</p>
        </div>
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
        @itemSelected="selectItem($event)"
      />
    </div>
  </div>
</template>

<script>
import Colection from '@/components/Merch/ColectionToGenerate.vue'
import ColectionItem from '@/components/Merch/colectionPage/ColectionItem.vue'
export default {
  components: {
    Colection,
    ColectionItem
  },
  data() {
    return {
      basicColections: this.$store.getters.BASICCOLECTIONS,
      premiumColections: this.$store.getters.PREMIUMCOLECTIONS,
      collectionListToShow: 'basic',
      isBasicBtnActive: true,
      isPremiumBtnActive: false,
      isColectionSelected: false,
      currentCollection: {},
    }
  },
  methods: {
    selectCollection(colectionId) {
      this.isColectionSelected = true
      var colectionIndex = this.basicColections.findIndex(colection => colection.id === colectionId)
      this.currentCollection = this.basicColections[colectionIndex]
    }
  }
}
</script>

<style scoped>

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

.text-description {
  padding: 0 2%;
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
  margin: 5px 5px 5px 5px;
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