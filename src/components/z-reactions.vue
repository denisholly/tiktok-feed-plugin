<template>
    <div class="reactions-wrapper w-12 h-72 text-center absolute flex flex-col items-center right-4 bottom-[10%]">
        <div class="icons flex text-white flex-col items-center">
            <div class="my-1">
                <ion-icon :icon="heart" class="w-8 h-8 drop-shadow icon-default cursor-pointer md" @click="like" :class=" !liked ? 'text-white' : 'text-red-500'" />  
                <p class="text-sm font-bold drop-shadow text-default">
                    {{ likes }}
                </p>
            </div>
            <div class="my-1">
                <ion-icon :icon="chatbubbleEllipses" class="w-8 h-8 drop-shadow icon-default cursor-pointer md" />  
                <p class="text-sm font-bold drop-shadow text-default">
                    3
                </p>
            </div>
            <div class="my-1">
                <ion-icon :icon="bookmark" class="w-8 h-8 drop-shadow icon-default cursor-pointer md" @click="saved = !saved" :class=" !saved ? 'text-white' : 'text-yellow-400'" />  
                <p class="text-sm font-bold drop-shadow text-default">
                    Uložiť
                </p>
            </div>
            <div class="my-1">
                <ion-icon :icon="arrowRedo" class="w-8 h-8 drop-shadow icon-default cursor-pointer md" />  
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
    components: {
        IonIcon,
    },
    data() {
        return { 
            liked: false,
            likes: 1,
            saved: false,
            heart, chatbubbleEllipses, bookmark, arrowRedo 
        }
    },
    methods: {
        like() {
            !this.liked ? this.likes++ : this.likes--;
            this.liked = !this.liked;
        }
    }
}
</script>