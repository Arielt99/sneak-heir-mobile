<template>
  <div class="ion-page">
    <ion-content class="ion-no-padding">
      <ion-card class="RandomProducts">
        <ion-card-title>Notre selection</ion-card-title>
        <div v-if="this.RandomProducts[0]">
          <ion-slides pager="true" ref="sliderProducts">
            <ion-slide v-for="product in RandomProducts" :key="product.id">
              <ProductCard v-bind:emitedProduct="product"/>
            </ion-slide>
          </ion-slides>
        </div>
      </ion-card>
      <ion-card class="LastNews">
        <ion-card-title>Les derniers articles</ion-card-title>
        <div v-if="this.News[0]">
          <ion-slides ref="sliderNews" pager="true">
            <ion-slide v-for="News in News.slice(0, 5)" :key="News.id" >
              <NewsCard v-bind:emitedNews="News"/>
            </ion-slide>
          </ion-slides>
        </div>
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
        slideNewsOpts: {
          centeredSlides: true,
          spaceBetween: 0,
          slidesPerView: 1,
          loop: true,
          autoplay: true,
        },
        slideProductsOpts: {
          centeredSlides: true,
          spaceBetween: 60,
          slidesPerView: 1.4,
          loop: true,
          autoplay: true,
        }
      }
    },
    components:{
      ProductCard,
      NewsCard
    },
    computed:{
      RandomProducts(){
        return this.$store.getters.RandomProducts
      },
      News(){
        return this.$store.getters.EveryNews
      },
    },
    async updated(){
      const slidesNews = await this.$refs.sliderNews
      const slidesProducts = await this.$refs.sliderProducts
      this.$nextTick(async() => {
        slidesNews.options = this.slideNewsOpts
        if(slidesProducts != undefined){
        slidesProducts.options= this.slideProductsOpts
        }
      })
    },
    methods:{
      getRandomProductList(){
        this.$store.dispatch('getRandomProductList')
      },
    },
    created: function(){
        if(this.$store.getters.RandomProducts.length == 0){
          this.getRandomProductList()
        }
    }
}
</script>
<style>
.LastNews, .RandomProducts{
  background-color: rgb(255, 255, 255);
  margin: 0;
  margin-top: 20px;
  padding: 25px 0px;
}
.LastNews ion-card-title, .RandomProducts ion-card-title{
  padding: 0px 0px 20px 15px;
  color: rgb(48, 48, 48);
  font-size: 30px;
}
</style>