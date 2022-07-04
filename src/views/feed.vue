<template>
  <ion-page>
    <ion-content>  
      <z-feed-swiper :videos="videos" />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from '@ionic/vue';
import ZFeedSwiper from '@/components/z-feed-swiper.vue';

export default {
  name: 'feed-view',
  components: {
    ZFeedSwiper,
    IonContent,
    IonPage
  }
};
</script>

<style scoped>
ion-content{
    --ion-background-color: black;
}
</style>