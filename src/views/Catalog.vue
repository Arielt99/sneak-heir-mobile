<template>
  <div class="ion-page">
    <ion-content class="ion-no-padding">
      <ion-card class="BrandsList">
        <ion-card-title>Nos marques</ion-card-title>
        <div class="Brands" v-if="this.brands[0]">
            <BrandCard class="brand" v-for="brand in brands" :key="brand.id" v-bind:emitedBrand="brand"/>
        </div>
      </ion-card>
    </ion-content>
  </div>
</template>

<script>
import BrandCard from "../components/BrandCard";
export default {
    data (){
      return {
      }
    },
    components:{
        BrandCard
    },
    methods:{
    },
    computed:{
        brands(){
            return this.$store.getters.EveryBrands;
        },
    },
}
</script>
<style>
.BrandsList{
  background-color: rgb(255, 255, 255);
  margin: 0;
  margin-top: 20px;
  padding: 25px 0px;
}
.BrandsList ion-card-title{
  padding: 0px 0px 20px 15px;
  color: rgb(48, 48, 48);
  font-size: 30px;
}
.Brands{
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
.Brands > *{
  margin: 20px 0px;
}
.BrandsList .Brands .brand{
  width: 100%;
  height: 100%;
}
</style>