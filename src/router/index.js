// router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../App.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home // Menggunakan Home (App.vue) sebagai komponen utama
  },
  {
    path: '/Tugas1',
    name: 'Tugas1',
    beforeEnter() {
      window.location.href = 'https://fauzan-project-cv.vercel.app/'
    }
  },
  {
    path: '/Tugas2',
    name: 'Tugas2',
    beforeEnter() {
      window.location.href = 'https://tugas2pratikumpbk.netlify.app/'
    }
  },
  {
    path: '/Tugas3',
    name: 'Tugas3',
    beforeEnter() {
      window.location.href = 'https://223510556-fauzandifasafli-tugas3-pbk.netlify.app/'
    }
  },
  {
    path: '/Tugas4',
    name: 'Tugas4',
    beforeEnter() {
      window.location.href = 'https://fauzan-223510556-tugas4-prakpbk.netlify.app/'
    }
  },
  {
    path: '/Tugas5',
    name: 'Tugas5',
    beforeEnter() {
      window.location.href = 'https://fauzan-223510556-tugas5-prakpbk.netlify.app/'
    }
  },
  {
    path: '/Tugas6',
    name: 'Tugas6',
    beforeEnter() {
      window.location.href = 'https://fauzandifasafli-223510556-tugas6-prakpbk.vercel.app/'
    }
  },
  {
    path: '/Tugas7',
    name: 'Tugas7',
    beforeEnter() {
      window.location.href = 'https://fauzandifasafli-223510556-tugas7prakp.netlify.app/'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
