<template>
  <div class="ion-page">
    <ion-content class="ion-padding">
    <h2>Notre selection</h2>
    <div class="product-list" v-if="this.RandomProducts[0]">
      <ion-slides pager="true">
        <ion-slide v-for="product in RandomProducts" :key="product.id">
          <ProductCard v-bind:emitedProduct="product"/>
        </ion-slide>
      </ion-slides>
    </div>
    <h2>Les derniers articles</h2>
    <div class="news-list" v-if="this.News[0]">
      <ion-slides ref="slider" pager="true">
        <ion-slide v-for="News in News.slice(0, 5)" :key="News.id" >
           <NewsCard v-bind:emitedNews="News"/>
        </ion-slide>
      </ion-slides>
    </div>
    </ion-content>
  </div>
</template>
<script>
import ProductCard from "../components/PoductCard";
import NewsCard from "../components/NewsCard";
export default {
    data (){
      return {
        slideOpts: {
          centeredSlides: true,
          spaceBetween: 20,
          slidesPerView: 1,
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
        return this.$store.getters.RandomProducts;
      },
      News(){
        return this.$store.getters.EveryNews;
      },
    },
    async updated() {
      const slides = await this.$refs.slider;
      console.log(slides)
      this.$nextTick(() => {
        slides.options = this.slideOpts;
      });
    },
    methods:{
      getRandomProductList(){
        this.$store.dispatch('getRandomProductList');
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

</style>