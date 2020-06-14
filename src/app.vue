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
          <ion-title>Sneak-Heir</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-body>
      <ion-vue-router id="main-content"/>
      </ion-body>
    </div>
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
        this.$router.push('/Result/'+this.searchContent)
        this.searchContent=null
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
ion-content{
  --background: none;
  background-color: rgb(241, 241, 241)
}
.product-list{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.my-custom-menu {
  --width: 500px;
}
ion-menu ion-content{
  --backgroud:none;
  background-color: white;
}
</style>