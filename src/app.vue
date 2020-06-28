<template>
  <ion-app>
    <ion-menu side="start" content-id="main-content">
      <ion-header>
        <ion-toolbar translucent>
          <ion-title>Sneak-Heir</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item>
            <ion-icon name="home" slot="start"></ion-icon>
            <ion-menu-toggle>
              <ion-label>
                <router-link to="/">Home</router-link>
              </ion-label>
            </ion-menu-toggle>
          </ion-item>
          <ion-item>
            <ion-icon name="basket" slot="start"></ion-icon>
            <ion-menu-toggle>
              <ion-label>
                <router-link to="/Brand">Catalogue</router-link>
              </ion-label>
            </ion-menu-toggle>
          </ion-item>
          <ion-item>
            <ion-icon name="document" slot="start"></ion-icon>
            <ion-menu-toggle>
              <ion-label>
                <router-link to="/News">News</router-link>
              </ion-label>
            </ion-menu-toggle>
          </ion-item>
          <ion-item>
            <ion-icon name="mail" slot="start"></ion-icon>
            <ion-menu-toggle>
              <ion-label>
                <router-link to="/Contact">Contact</router-link>
              </ion-label>
            </ion-menu-toggle>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title><input type="text" v-model="searchContent" v-on:keyup.enter="search()" placeholder="barre de recherche"></ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-body>
      <ion-vue-router id="main-content"/>
      </ion-body>
    </div>
    <div v-if="loading" class="loading"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>
  </ion-app>
</template>
<script>
export default {
    data (){
      return {
        searchContent:null,
      }
    },
    methods:{
      closeMenu() {
       this.menuCtrl.close();
      },
      search(){
          if(this.searchContent != this.$route.params.search && this.searchContent.length != 0){
          this.$router.push('/Result/'+this.searchContent)
          }
      },
      getBrandList(){
          this.$store.dispatch('getBrandList');
      },
      getProductList(){
        this.$store.dispatch('getProductList');
      },
      getNewsList(){
        this.$store.dispatch('getNewsList');
      },
    },
    computed:{
        loading(){
            return this.$store.getters.loading
        },
    },
    created: function(){
        if(this.$store.getters.EveryBrands.length == 0){
            this.getBrandList()
        }
        if(this.$store.getters.EveryProducts.length == 0){
          this.getProductList()
        }
        if(this.$store.getters.EveryNews.length == 0){
          this.getNewsList()
        }
    }
}
</script>
<style>
ion-router-outlet{
  margin-top: 50px;
}
ion-menu a{
  text-decoration: none;
  color: rgb(48, 48, 48);
}
a{
  text-decoration: none;
  color: rgb(48, 48, 48);
}
ion-app{
  --background: none;
  background-color: rgb(241, 241, 241)
}
ion-content{
  --background: none;
  background-color: rgb(241, 241, 241)
}
ion-menu ion-content{
  --backgroud:none;
  background-color: white !important;
}
.loading {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>