<template>
    <div class="w-12 h-72 text-center absolute flex flex-col items-center right-4 bottom-[10%]">
        <div class="icons flex text-white flex-col items-center">
            <div class="my-1">
                <ion-icon :icon="heart" class="w-8 h-8 drop-shadow icon-default cursor-pointer" @click="like" :class=" !liked ? 'text-white' : 'text-red-500'" />  
                <p class="text-sm font-bold drop-shadow text-default">
                    {{ likesAmount }}
                </p>
            </div>
            <div class="my-1">
                <ion-icon :icon="chatbubbleEllipses" class="w-8 h-8 drop-shadow icon-default cursor-pointer" id="open-modal"/>  
                <p class="text-sm font-bold drop-shadow text-default">
                    3
                </p>
            </div>
            <div class="my-1">
                <ion-icon :icon="bookmark" class="w-8 h-8 drop-shadow icon-default cursor-pointer" @click="saved = !saved" :class=" !saved ? 'text-white' : 'text-yellow-400'" />  
                <p class="text-sm font-bold drop-shadow text-default">
                    Uložiť
                </p>
            </div>
            <div class="my-1" @click="share(data)">
                <ion-icon :icon="arrowRedo" class="w-8 h-8 drop-shadow icon-default cursor-pointer" />  
                <p class="text-sm font-bold drop-shadow text-default">
                    Zdielať
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { IonIcon } from '@ionic/vue'
import { heart, chatbubbleEllipses, bookmark, arrowRedo } from 'ionicons/icons';
export default {
    props: ['data'],
    components: {
        IonIcon,
    },
    data() {
        return { 
            liked: false,
            likesAmount: this.data.likes,
            saved: false,
            heart, chatbubbleEllipses, bookmark, arrowRedo 
        }
    },
    methods: {
        like() {
            !this.liked ? this.likesAmount++ : this.likesAmount--;
            this.liked = !this.liked;
        },
        share(video) {
            navigator.share({
                title: video.name,
                url: video.src
            })
        }
    }
}
</script>