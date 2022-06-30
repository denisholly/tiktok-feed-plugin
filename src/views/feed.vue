<template>
  <ion-page>
    <ion-content>  
      <swiper
        :direction="'vertical'"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide class="bg-blue-500">
          Slide 1
          <z-reactions />
        </swiper-slide>
        <swiper-slide class="bg-purple-500">
          Slide 2
          <z-reactions />
        </swiper-slide>
        <swiper-slide class="bg-green-500">
          Slide 3
          <z-reactions />
        </swiper-slide>
      </swiper>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/bundle';

import ZReactions from '@/components/z-reactions.vue'

export default {
  name: 'feed-view',
  components: {
    ZReactions,
    IonContent,
    IonPage,
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper (swiper: any) {
      console.log(swiper)
    },
    onSlideChange () {
      console.log('slide change')
    }
  }
};
</script>

<style scoped>
.swiper {
  max-width: 766px;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
