<template>
  <div class="chooseCollection" v-if="!isColectionSelected">
    <div class="btn-wrapper">
      <button class="back-btn" @click="this.$router.push('nfthome')">
        <img class="back-btn-img-back" src="@/assets/back_btn.svg" alt="">
      </button>
    </div>
    <h1 class="top-text textH1">Generate merch</h1>
    <h2 class="top-text textH2">Chose the print collection</h2>
    <p class="top-text textP"> {{collectionListToShow === 'basic' ? 'Basic print collections update every month' : 'Premium collections are chosen by the artist'}}</p>
    <div class="btn-row">
      <button class="coltype-btn" :class="{activeBtn : isBasicBtnActive}" @click="showBasicColections">Basic</button>
      <button class="coltype-btn" :class="{activeBtn : isPremiumBtnActive}" @click="showPremiumCollections">Premium</button>
    </div>
    <div class="colections-list">
      <div v-if="collectionListToShow === 'basic'" class="basic-collections-wrapper">
        <Colection
          v-for="colection in basicColections"
          :key="colection.id"
          :colection="colection"
          @colectionSelected="selectCollection($event)"
        />
      </div>
      <div v-if="collectionListToShow === 'premium'" class="premium-collections-wrapper">
        <div class="ai-wrapper">
          <img class="ai-pic" src="@/assets/ai_pic.svg" alt="">
          <h2>Create a unique print</h2>
          <h2>using AI</h2>
        </div>
        <Colection
          v-for="colection in premiumColections"
          :key="colection.id"
          :colection="colection"
          @colectionSelected="selectCollection($event)"
        />
      </div>
    </div>
  </div>
  <div class="selectPicture" v-else>
    <div class="back-p" @click="isColectionSelected = !isColectionSelected">
      <a>Go back</a>
    </div>
    <h1 class="top-text textH1">{{ currentCollection.name }}</h1>
    <h2 class="top-text textH2">{{ currentCollection.author }}</h2>
    <p class="top-text textP"> {{ currentCollection.description }}</p>
    <div class="collection-item-list"> 
      <ColectionItem 
        v-for="item in currentCollection.items"
        :key="item.id"
        :item="item"
        @itemSelected="selectItem($event)"
      />
    </div>
    <div class="btn-column">
      <button class="bottom-btn generate-btn">Generate</button>
      <button class="bottom-btn artist-btn">Artist’s page</button>
    </div>
  </div>

</template>

<script>
import Colection from '@/components/NFTPrj/colections/ColectionToGenerate.vue'
import ColectionItem from '@/components/NFTPrj/colections/colectionPage/ColectionItem.vue'
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
    showBasicColections() {
      this.collectionListToShow = 'basic'
      this.isBasicBtnActive = true
      this.isPremiumBtnActive = false
    },
    showPremiumCollections() {
      this.collectionListToShow = 'premium'
      this.isBasicBtnActive = false
      this.isPremiumBtnActive = true
    },
    selectCollection(colectionId) {
      this.isColectionSelected = true
      if (this.collectionListToShow === 'basic') {
        var colectionIndex = this.basicColections.findIndex(colection => colection.id === colectionId)
        this.currentCollection = this.basicColections[colectionIndex]
        // console.log(this.currentCollection);
      } else {
        var colectionIndex = this.premiumColections.findIndex(colection => colection.id === colectionId)
        this.currentCollection = this.premiumColections[colectionIndex]
        // console.log(this.currentCollection);
      }
    }
  }
}
</script>

<style scoped>
.ai-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 2px solid lightgray;
  border-radius: 5px;
  margin: 20px 20px;
  padding: 15px;
  text-align: center;
}

.ai-pic {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
.back-btn {
  border: none;
  cursor: pointer;
}
.back-btn-img-back {
  align-self: center;
  rotate: 90deg;
}

.top-text {
  text-align: center;
}
.textH2 {
  margin-top: 20px;
}
.textP {
  margin-top: 15px;
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
.coltype-btn {
  width: 49%;
  margin: 5px auto;
  border: none;
  border-bottom: 1px solid rgba(74, 74, 74, 35%);
  color: rgba(74, 74, 74, 35%);
  font-size: 20px;
  cursor: pointer;
}
.activeBtn {
  border-bottom: 1px solid #C431C4;
  color: #C431C4;
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
.btn-column {
  display: flex;
  flex-direction: column;
}
.bottom-btn {
  width: 70%;
  height: 55px;
  margin: 0 auto 20px auto;
  font-size: 20px;
  border-radius: 9px;
}
.generate-btn {
  border: 2px solid #63a6d8;
  color: #63a6d8;
  background: #fff;
  transition: background 0.5s ease 0s;
}

.generate-btn:hover{
  background: #63a6d8;
  color: #fff;
}
.artist-btn {
  border: 2px solid #777777;
  color: #777777;
}
</style>