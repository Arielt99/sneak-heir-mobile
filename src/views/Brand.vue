<template>
  <div class="ion-page">
    <ion-content class="ion-no-padding">
        <div class="SpecBrand" v-if=" this.CurrentBrand[0]">
            <ion-img :src="this.CurrentBrand[0].banner" :alt="this.CurrentBrand[0].name"/>
            <h1>{{this.CurrentBrand[0].name}}</h1>
            <p>{{this.CurrentBrand[0].description}}</p>
            <h2>Les produits</h2>
            <div class="product-list">
                <ProductCard v-for="product in productList" :key="product.id" v-bind:emitedProduct="product"/>
            </div>
        </div>
        <div class="empty" v-if=" !this.CurrentBrand[0]">
            <p> Marque indisponible </p>
        </div>
    </ion-content>
    </div>
</template>

<script>
import ProductCard from "../components/PoductCard";
export default {
    data (){
      return {
      }
    },
    components:{
        ProductCard
    },
    methods:{
    },
    computed:{
        productList(){
            return this.$store.getters.productList;
        },
        CurrentBrand(){
            return this.$store.getters.EveryBrands.filter(brand =>
                 brand.id == this.$route.params.id
            );
        }
    },
    created: function(){
        this.$store.dispatch('getBrandProductList',{id: this.$route.params.id})
    }
}
</script>
<style>
.SpecBrand ion-img{
    width: 100%;
    height: 200px;
    object-fit: cover;
}
</style>