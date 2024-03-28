import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import Home from './pages/Home.vue'
import Favorites from './pages/Favorites.vue'

const app = createApp(App)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/favorites', name: 'Favorites', component: Favorites }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(router)
app.use(autoAnimatePlugin)

app.mount('#app')

/*import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

const Config = {
    apiKey: "AIzaSyCZZsNMxBiv-ZgvdGMsmQRLpmZu7K3AhXQ",
    authDomain: "vue-arkis.firebaseapp.com",
    projectId: "vue-arkis",
    storageBucket: "vue-arkis.appspot.com",
    messagingSenderId: "940662866254",
    appId: "1:940662866254:web:3760d120e0ac345b6c1e1f",
    measurementId: "G-R597K4PLGJ"
  };

  firebase.initializeApp(Config);*/
