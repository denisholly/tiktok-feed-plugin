<template>
    <swiper 
    :direction="'vertical'" 
    :slidesPerView="'1'"  
    :modules="modules" 
    :mousewheel="true"
    :simulateTouch="false"
    @swiper="onSwiper" 
    @slideChange="onSlideChange"
    >
        <swiper-slide v-for="video in videos" :key="video.name" class="bg-black">
            <div class="sound-button bg-white w-12 h-12 z-10 absolute left-4 top-[10%] cursor-pointer rounded-full p-2 border border-gray-200" @click="toggleMute">
                <ion-icon :icon="isMuted ? icons.volumeMute : icons.volumeHigh" class="text-black w-full h-full cursor-pointer" />
            </div>
            <ion-icon v-if="!isPlaying" :icon="icons.play" class="absolute z-10 text-[#f3f3f3b3] w-16 h-16" @click="togglePlay" />
            <video class="w-full h-full" :poster="video.content_thumbnail" ref="video" @click="togglePlay" loop playsinline webkit-playsinline>
                <source :src="video.content_shot" type="video/mp4">
                Video is unsopported!
            </video>
            <z-reactions :data="video" />
        </swiper-slide>
    </swiper>
</template>

<script>
import ZReactions from '@/components/z-reactions.vue'
import axios from 'axios';
import { IonIcon, toastController } from '@ionic/vue'
import { play, volumeHigh, volumeMute } from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/bundle';
import { Mousewheel } from "swiper";

export default {
    components: {
        ZReactions,
        IonIcon,
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            isPlaying: false,
            isMuted: false,
            swiper: null,
            videos: [],
            modules: [Mousewheel],
            icons: { play, volumeHigh, volumeMute }
        }
    },
    async created() {
        await this.loadVideos();
        this.loadVideos();
    },
    methods: {
        toggleMute() {
            this.isMuted = !this.isMuted;
            this.$refs.video[this.swiper.activeIndex].muted = this.isMuted;
        },
        togglePlay() {
            !this.isPlaying ? this.playVideo() : this.pauseVideo();
        },
        playVideo() {
            this.$refs.video[this.swiper.activeIndex].play();
            this.isPlaying = true;
        },
        pauseVideo() {
            this.$refs.video[this.swiper.activeIndex].pause();
            this.isPlaying = false;
        },       
        onSwiper (swiper) {
            this.swiper = swiper;
        },
        onSlideChange () {
            this.$refs.video[this.swiper.previousIndex].pause()
            this.playVideo();
            this.isPlaying = true;
            this.isMuted = false;

            if(this.swiper.activeIndex == this.videos.length - 1) {
                this.loadVideos();
            }
        },
        async loadVideos() {
            try {
                const { data: { data: resp } } = (await axios.get(`https://gamechangers.wezeo.dev/cms/api/v1/lesson/feed/recommended/`));
                this.videos.push(...resp.filter(content => content.content_shot))
            } catch (error) {
                this._openToast('Videos not loaded.');
            }
        },
        async _openToast(text) {
            const toast = await toastController
                .create({
                    message: text,
                    duration: 2000
                })
            return toast.present();
        },
    }
}
</script>

<style scoped>

.swiper {
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
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

@media only screen and (min-width: 767px) {
    .swiper-slide {
        width: 56vh !important;
        margin: auto;
    }
}

</style>