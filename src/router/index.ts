import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Feed from '../views/feed.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/feed'
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
