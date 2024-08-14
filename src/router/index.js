import { createRouter, createWebHistory } from 'vue-router'
import MeetingRoom from '../views/MeetingRoom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MeetingRoom',
      component: MeetingRoom
    },
  ]
})

export default router
