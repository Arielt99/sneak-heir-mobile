<template>
    <RouterLink :to="'News/'+emitedNews.id">
        <ion-item id="news" lines="none" class="ion-no-padding">
            <ion-img :src="emitedNews.image" :alt="emitedNews.title"/>
            <div class="item-resume">
                <h2 class="ion-padding-start ion-padding-end">{{emitedNews.title}}</h2>
                <ion-label  class="ion-padding-start ion-padding-bottom">{{emitedNews.author}}</ion-label>
            </div>
            <!-- <p>{{emitedNews.resume}}</p> -->
        </ion-item>
    </RouterLink>
</template>

<script>
export default {
    name :"NewsCard",
    props:{
    emitedNews: Object
    },
    methods:{
    },
    computed:{
    }
    }
</script>
<style>
#news{
    --background: none;
    width: 300px;
    height: 300px;
    display: flex;
    position: relative;
    padding: 0 !important;
}
ion-img{
    display: flex;
    width: 100%;
    height: auto;
    object-fit: cover;
    position: absolute;
    z-index: 1;
    top:0;
    bottom:0;
    padding: 0;
    margin: 0;
}
.item-resume{
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    bottom:0;
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
    background-color: rgba(48, 48, 48, 0.333);
    color:rgba(255, 255, 255, 0.90);
}
</style>