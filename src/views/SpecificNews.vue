<template>
  <div class="ion-page">
    <ion-content class="ion-no-padding">
    <div class="article" v-if="this.CurrentNews[0]">
      <ion-card>
      <ion-card-header>
        <ion-img :src="this.CurrentNews[0].image" :alt="this.CurrentNews[0].title"/>
      </ion-card-header>
        <h1>{{this.CurrentNews[0].title}}</h1>
        <ion-label>{{this.CurrentNews[0].author}}</ion-label><br>
        <ion-label>{{configDateTime(this.CurrentNews[0].posted_at)}}</ion-label>
        <p>{{this.CurrentNews[0].content}}</p>
      </ion-card>
    </div>
    <div class="empty" v-if=" !this.CurrentNews[0]">
      <p> News indisponible </p>
    </div>
    </ion-content>
  </div>
</template>

<script>
export default {
    data (){
      return {
      }
    },
    methods:{
      configDateTime(date) {
        return this.$moment(date).startOf('second').subtract(2, 'hours').locale('fr-FR').fromNow()
      },
    },
    computed:{
      CurrentNews(){
        return this.$store.getters.EveryNews.filter(News =>
          News.id == this.$route.params.id
        )
      },
    },
}
</script>
<style>
.article{
  background-color: rgb(255, 255, 255);
  margin: 0;
  margin-top: 20px;
}
.article ion-card-header{
  width: 100%;
  height: auto;
  padding: 0;
}
.article ion-card-header ion-img{
 width: 100%;
 height: auto;
}
.article ion-card{
  margin: 0;
  }
</style>