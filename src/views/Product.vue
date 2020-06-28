<template>
  <div class="ion-page">
    <ion-content class="ion-no-padding">
    <ion-card class="Product">
      <ion-slides pager="true">
        <ion-slide>
          <div class="slide">
            <ion-img :src="this.CurrentProduct.principal_images"/>
          </div>
        </ion-slide>
        <ion-slide v-for="image in this.CurrentProduct.images" :key="image.id" >
          <div class="slide">
            <ion-img :src="image.image"/>
          </div>
        </ion-slide>
      </ion-slides>
      <div class="SpecProduct" v-if="this.CurrentBrand[0]">
        <h1>{{this.CurrentProduct.name}}</h1>
        <p>{{this.CurrentProduct.color}}</p>
        <p>{{this.CurrentProduct.description}}</p>
        <div class="price"><p>{{this.CurrentProduct.price}} €</p> <a :href="this.env.VUE_APP_URL+'/Brand/'+CurrentProduct.brand_id+'/Product/'+CurrentProduct.id"><button>Voir sur le site</button></a></div>
        <p>{{this.CurrentBrand[0].name}}</p>
      </div>
    </ion-card>
    <div class="empty" v-if=" !this.CurrentProduct">
      <p> Produit indisponible </p>
    </div>
    </ion-content>
  </div>
</template>
<script>
export default {
    data (){
      return {
        env: process.env
      }
    },
    methods:{
    },
    computed:{
        CurrentProduct(){
          return this.$store.getters.product
        },
        CurrentBrand(){
            return this.$store.getters.EveryBrands.filter(brand =>
              brand.id === this.CurrentProduct.brand_id
            )
        },
    },
    created: function(){
        this.$store.dispatch('getProduct',{id: this.$route.params.id})
    }
}
</script>
<style>
.Product{
  margin-top: 20px !important;
  background-color: rgb(255, 255, 255);
  margin: 0;
}
.SpecProduct{
  width: 100%;
  height: auto;
  padding: 0;
}
.SpecProduct button{
  font-size: 20px;
  border-radius: 5px;
  font-weight: bold;
  width: 200px;
  height: 40px;
}
.SpecProduct .price{
  font-size: 20px;
  margin-right: 10vw;
  align-items: center;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.SpecProduct > *{
  padding-left: 10px;
}
.slide{
  width: 100vw;
  height: 100vw;
  overflow: hidden;
}
.Product .swiper-container {
  overflow: unset !important;
}
</style>