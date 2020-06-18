<template>
    <RouterLink :to="'Brand/'+emitedBrand.id">
        <ion-card id="brand" lines="none" class="ion-no-padding">
            <ion-img class="logo" :src="emitedBrand.image" :alt="emitedBrand.name"/>
            <h2>{{emitedBrand.name}}</h2>
            <p>{{nbProducts.length}} produit{{ nbProducts.length > 1  ?  's' : ' '}}</p>
        </ion-card>
    </RouterLink>
</template>
<script>
export default {
    name :"BrandCard",
    props:{
    emitedBrand: Object
    },
    methods:{
    },
    computed:{
        nbProducts(){
            return this.$store.getters.EveryProducts.filter(product =>
                product.brand_id === this.emitedBrand.id
            )
        }
    }
    }
</script>
<style>
#brand{
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: auto;
    display: flex;
    margin: 0;
    align-items: center;
}
#brand .logo{
    display: flex;
    width: 75px !important;
    height: 75px;
    object-fit: cover;
    margin-left: 20px ;
}
#brand h2{
    display: flex;
    padding: 0px 10px;
    text-align: start;
    flex-wrap: wrap;
    width: 180px;
}
#brand p{
    padding-right: 10px;
    width: 90px !important;
    margin-left: auto;
    text-align: start;
    flex-wrap: wrap;
    display: flex;
}
</style>
