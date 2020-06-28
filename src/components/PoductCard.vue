<template>
    <RouterLink :to="'/Brand/'+emitedProduct.brand_id+'/Product/'+emitedProduct.id">
        <ion-card class="productCard">
            <ion-card-header class="card-header">
                <img :src="emitedProduct.principal_images"/>
            </ion-card-header>
            <ion-card-content class="ion-text-start" v-if=" this.CurrentBrand[0]">
                <h2>{{emitedProduct.name}}</h2>
                <p class="price">{{emitedProduct.price}} €</p>
                <p class="tag">{{CurrentBrand[0].name}}</p>
            </ion-card-content>
        </ion-card>
    </RouterLink>
</template>

<script>
export default {
        name :"ProductCard",
        props:{
        emitedProduct: Object
        },
        computed:{
            CurrentBrand(){
                return this.$store.getters.EveryBrands.filter(brand =>
                 brand.id === this.emitedProduct.brand_id
                )
            },
        }
}
</script>

<style>
.productCard{
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(241, 241, 241);
    border-radius: 10px;
    width: 300px;
    height: 330px !important;
}
.productCard ion-card-header{
    padding: 0;
}
.card-header{
    width: 100%;
    height: 200px;
    display: flex;
}
.card-header img{
    display: flex;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
}
.productCard ion-card-content{
    padding: 10px;
}
.productCard ion-card-content h2{
    padding: 10px 0px;
    font-size: 20px;
}
.productCard ion-card-content .price{
    padding: 0px 0px 10px 0px;
}
.tag {
  background: #eee;
  border-radius: 3px 0 0 3px;
  color: #999;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
}

.tag::before {
  background: #fff;
  border-radius: 10px;
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
  content: '';
  height: 6px;
  left: 10px;
  position: absolute;
  width: 6px;
  top: 10px;
}

.tag::after {
  background: #fff;
  border-bottom: 13px solid transparent;
  border-left: 10px solid #eee;
  border-top: 13px solid transparent;
  content: '';
  position: absolute;
  right: 0;
  top: 0;
}
</style>