import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import ChoosePage from "./components/ChoosePage.vue"
import WelcomePage from "./components/WelcomePage.vue"

const router = createRouter({
    history : createWebHistory(),
    routes: [
        { path : "/", component : WelcomePage },
        { path : "/choose", component : ChoosePage }
    ]
})

createApp(App).use(router).mount('#app')
