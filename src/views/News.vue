<template>
  <div class="ion-page">
    <ion-content class="ion-no-padding">
      <ion-card class="NewsList">
        <ion-card-title>Les actualités trépidantes</ion-card-title>
        <ion-card-content v-if="this.News[0]">
          <NewsCard v-for="News in News" :key="News.id" v-bind:emitedNews="News"/>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </div>
</template>
<script>
import ProductCard from "../components/PoductCard";
import NewsCard from "../components/NewsCard";
export default {
    data (){
      return {
      }
    },
    components:{
      NewsCard
    },
    computed:{
      News(){
        return this.$store.getters.EveryNews;
      },
    },
    methods:{
    },
}
</script>
<style>
.NewsList{
  background-color: rgb(255, 255, 255);
  margin: 0;
  margin-top: 20px;
  padding: 25px 0px;
}
.NewsList ion-card-title{
  padding: 0px 0px 20px 15px;
  color: rgb(48, 48, 48);
  font-size: 30px;
}
</style>